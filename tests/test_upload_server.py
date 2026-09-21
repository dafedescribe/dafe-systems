import tempfile
import unittest
from pathlib import Path

from scripts.upload_server import destination_for, safe_filename, store_upload


class UploadPolicyTests(unittest.TestCase):
    def test_routes_supported_files_to_site_folders(self):
        self.assertEqual(destination_for('hero.webp'), ('public/uploads', 'image'))
        self.assertEqual(destination_for('company-profile.pdf'), ('public/docs', 'document'))
        self.assertEqual(destination_for('new-note.mdx'), ('content/notes', 'content'))

    def test_rejects_unsupported_files(self):
        with self.assertRaises(ValueError):
            destination_for('password.exe')

    def test_sanitizes_names_and_avoids_overwriting(self):
        self.assertEqual(safe_filename('../../My File!.PDF'), 'my-file.pdf')
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            first = store_upload(root, 'hero.webp', b'first')
            second = store_upload(root, 'hero.webp', b'second')
            self.assertNotEqual(first, second)
            self.assertEqual(first.read_bytes(), b'first')
            self.assertEqual(second.read_bytes(), b'second')


if __name__ == '__main__':
    unittest.main()
