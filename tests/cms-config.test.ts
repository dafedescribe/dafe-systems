import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

describe('cms config', () => {
  it('uses internal git media storage (no legacy external provider key)', () => {
    const yml = readFileSync(join(REPO_ROOT, 'public', 'admin', 'config.yml'), 'utf8');
    expect(yml).not.toMatch(/^media_library:/m);
    expect(yml).toContain('media_libraries:');
    expect(yml).toContain('max_file_size: 2097152');
  });
});
