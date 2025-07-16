import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

const isDev = process.env.NODE_ENV !== 'production';
const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 7777,
  },
  plugins: [
    // MDX + remark/rehype
    mdx({
      rehypePlugins: [
        [rehypeImgSize, { dir: 'public' }],
        rehypeSlug,
        rehypePrism,
      ],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),

    // Sólo en dev local, nunca en Vercel
    isDev && remixCloudflareDevProxy(),

    // Plugin principal de Remix
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),

    // Resuelve alias de paths desde jsconfig.json/tsconfig.json
    jsconfigPaths(),
  ].filter(Boolean), // eliminamos los “falsy” para no tener slots vacíos
});
