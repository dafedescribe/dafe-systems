"""Generate branded 1200x630 cover cards for notes posts.

Reads content/notes/*.mdx frontmatter, renders title + cluster on the
DafeDeScribe dark/amber system. Owner replaces individual covers via the
CMS later; these guarantee no post ever ships coverless.
Usage: python3 scripts/make-covers.py [--force]
"""
import os
import sys
import textwrap

import yaml
from PIL import Image, ImageDraw, ImageFont

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOTES = os.path.join(REPO, 'content', 'notes')

W, H = 1200, 630
BG = (24, 24, 22)
AMBER = (180, 120, 40)
WHITE = (245, 243, 238)
MUTED = (150, 145, 135)


def font(size, bold=True):
    name = 'DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf'
    return ImageFont.truetype(name, size)


def frontmatter(path):
    with open(path) as f:
        text = f.read()
    assert text.startswith('---')
    raw, _ = text.split('---', 2)[1], None
    return yaml.safe_load(raw)


def cover_for(slug, meta, force=False):
    out = os.path.join(REPO, 'public', meta['cover'].lstrip('/'))
    if os.path.exists(out) and '--force' not in sys.argv:
        return f'skip {out}'
    os.makedirs(os.path.dirname(out), exist_ok=True)
    img = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 14, H], fill=AMBER)
    d.text((80, 90), str(meta['cluster']).upper(), font=font(34), fill=AMBER)
    lines = textwrap.wrap(meta['title'], width=28)[:4]
    y = 160
    for line in lines:
        d.text((78, y), line, font=font(64), fill=WHITE)
        y += 78
    d.rectangle([80, H - 130, 220, H - 124], fill=AMBER)
    d.text((80, H - 100), 'DAFEDESCRIBE  ·  dafe.name.ng', font=font(28, bold=False), fill=MUTED)
    img.save(out, 'WEBP', quality=82)
    kb = os.path.getsize(out) // 1024
    assert kb <= 2048, f'{out} is {kb}KB, over budget'
    return f'wrote {out} ({kb}KB)'


def main():
    for fname in sorted(os.listdir(NOTES)):
        if not fname.endswith('.mdx') or fname.startswith(('_', '.')):
            continue
        meta = frontmatter(os.path.join(NOTES, fname))
        if meta.get('draft'):
            continue
        print(cover_for(fname[:-4], meta))


if __name__ == '__main__':
    main()
