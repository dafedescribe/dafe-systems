import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeSlug from 'rehype-slug';
import { defineConfig } from 'vite';

// SSR bundle for prerendering. Emits ESM to .ssr/ for scripts/prerender.mjs.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeSlug],
    }),
  ],
  resolve: { alias: { '@': '.' } },
  build: {
    ssr: 'src/prerender-entry.tsx',
    outDir: '.ssr',
    emptyOutDir: true,
    rollupOptions: { output: { format: 'esm', entryFileNames: 'entry.mjs' } },
  },
});
