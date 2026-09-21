#!/usr/bin/env python3
"""Local-only asset intake page for the DafeDeScribe repository."""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from email import policy
from email.parser import BytesParser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse

MAX_REQUEST_BYTES = 12 * 1024 * 1024
MAX_IMAGE_BYTES = 2 * 1024 * 1024
MAX_CONTENT_BYTES = 512 * 1024
MAX_DOCUMENT_BYTES = 10 * 1024 * 1024

FILE_TYPES = {
    '.avif': ('public/uploads', 'image'),
    '.gif': ('public/uploads', 'image'),
    '.jpeg': ('public/uploads', 'image'),
    '.jpg': ('public/uploads', 'image'),
    '.png': ('public/uploads', 'image'),
    '.svg': ('public/uploads', 'image'),
    '.webp': ('public/uploads', 'image'),
    '.doc': ('public/docs', 'document'),
    '.docx': ('public/docs', 'document'),
    '.pdf': ('public/docs', 'document'),
    '.txt': ('public/docs', 'document'),
    '.md': ('content/notes', 'content'),
    '.mdx': ('content/notes', 'content'),
}


def safe_filename(filename: str) -> str:
    """Return a predictable, lowercase filename without path traversal."""
    name = Path(filename.replace('\\', '/')).name
    normalized = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    path = Path(normalized)
    stem = re.sub(r'[^a-z0-9]+', '-', path.stem.lower()).strip('-') or 'upload'
    extension = path.suffix.lower()
    return f'{stem}{extension}'


def destination_for(filename: str) -> tuple[str, str]:
    extension = Path(filename).suffix.lower()
    try:
        return FILE_TYPES[extension]
    except KeyError as error:
        supported = ', '.join(sorted(FILE_TYPES))
        raise ValueError(f'Unsupported file type. Use: {supported}') from error


def _unique_path(directory: Path, filename: str) -> Path:
    candidate = directory / filename
    if not candidate.exists():
        return candidate
    stem = candidate.stem
    extension = candidate.suffix
    index = 2
    while True:
        candidate = directory / f'{stem}-{index}{extension}'
        if not candidate.exists():
            return candidate
        index += 1


def store_upload(root: Path, filename: str, content: bytes) -> Path:
    relative_directory, kind = destination_for(filename)
    max_bytes = {
        'image': MAX_IMAGE_BYTES,
        'content': MAX_CONTENT_BYTES,
        'document': MAX_DOCUMENT_BYTES,
    }[kind]
    if len(content) > max_bytes:
        raise ValueError(f'{kind} files must be smaller than {max_bytes // (1024 * 1024)} MB')
    directory = root / relative_directory
    directory.mkdir(parents=True, exist_ok=True)
    destination = _unique_path(directory, safe_filename(filename))
    destination.write_bytes(content)
    return destination


def _parse_uploads(content_type: str, body: bytes) -> Iterable[tuple[str, bytes]]:
    message = BytesParser(policy=policy.default).parsebytes(
        f'Content-Type: {content_type}\r\nMIME-Version: 1.0\r\n\r\n'.encode() + body
    )
    if not message.is_multipart():
        raise ValueError('Expected a multipart file upload')
    for part in message.iter_attachments():
        filename = part.get_filename()
        content = part.get_payload(decode=True)
        if filename and content is not None:
            yield filename, content


class UploadHandler(BaseHTTPRequestHandler):
    server_version = 'DafeAssetIntake/1.0'

    @property
    def root(self) -> Path:
        return self.server.repo_root  # type: ignore[attr-defined]

    def _json(self, status: int, payload: dict) -> None:
        encoded = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def do_GET(self) -> None:  # noqa: N802
        if urlparse(self.path).path != '/':
            self.send_error(404)
            return
        page = (Path(__file__).parent / 'upload.html').read_bytes()
        self.send_response(200)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(page)))
        self.end_headers()
        self.wfile.write(page)

    def do_POST(self) -> None:  # noqa: N802
        if urlparse(self.path).path != '/upload':
            self._json(404, {'error': 'not found'})
            return
        length = int(self.headers.get('Content-Length', '0'))
        if length <= 0 or length > MAX_REQUEST_BYTES:
            self._json(413, {'error': 'upload is empty or larger than 12 MB'})
            return
        content_type = self.headers.get('Content-Type', '')
        try:
            uploads = list(_parse_uploads(content_type, self.rfile.read(length)))
            if not uploads:
                raise ValueError('Choose at least one file')
            saved = []
            for filename, content in uploads:
                destination = store_upload(self.root, filename, content)
                saved.append({
                    'name': destination.name,
                    'kind': destination.parent.name,
                    'path': destination.relative_to(self.root).as_posix(),
                    'bytes': len(content),
                })
            self._json(200, {'files': saved})
        except ValueError as error:
            self._json(400, {'error': str(error)})
        except Exception:
            self._json(500, {'error': 'Could not save the files'})

    def log_message(self, format: str, *args: object) -> None:
        print(f'[upload] {format % args}')


def main() -> None:
    parser = argparse.ArgumentParser(description='Run the local DafeDeScribe asset upload page.')
    parser.add_argument('--host', default='127.0.0.1', help='Bind address (default: localhost only)')
    parser.add_argument('--port', type=int, default=8787)
    parser.add_argument('--root', type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()

    server = ThreadingHTTPServer((args.host, args.port), UploadHandler)
    server.repo_root = args.root.resolve()  # type: ignore[attr-defined]
    print(f'Asset intake ready: http://{args.host}:{args.port}')
    print(f'Writing files into: {server.repo_root}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nAsset intake stopped.')
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
