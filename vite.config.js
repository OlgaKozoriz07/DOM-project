// import { defineConfig } from 'vite';
// import { glob } from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
// import SortCss from 'postcss-sort-media-queries';

// export default defineConfig(({ command }) => {
//   return {
//     base: '/DOM-project/',
//     define: {
//       [command === 'serve' ? 'global' : '_global']: {},
//     },
//     root: 'src',
//     build: {
//       sourcemap: true,
//       rollupOptions: {
//         input: glob.sync('./src/**/*.html'),
//         output: {
//           manualChunks(id) {
//             if (id.includes('node_modules')) {
//               return 'vendor';
//             }
//           },
//           entryFileNames: chunkInfo => {
//             if (chunkInfo.name === 'commonHelpers') {
//               return 'commonHelpers.js';
//             }
//             return '[name].js';
//           },
//           assetFileNames: assetInfo => {
//             if (assetInfo.name && assetInfo.name.endsWith('.html')) {
//               return '[name].[ext]';
//             }
//             return 'assets/[name]-[hash][extname]';
//           },
//         },
//       },
//       outDir: '../dist',
//       emptyOutDir: true,
//     },
//     plugins: [
//       injectHTML(),
//       FullReload(['./src/**/**.html']),
//       SortCss({
//         sort: 'mobile-first',
//       }),
//     ],
//   };
// });

import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: '/DOM-project/', // дуже важливо для GitHub Pages
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          // 👇 тут явно вказуєш, які сторінки збирати
          main: './src/index.html',
          form: './src/tasks/form.html',
          generator: './src/tasks/generator.html',
          'images-slider': './src/tasks/images-slider.html',
          'shopping-list': './src/tasks/shopping-list.html',
          'theme-switcher': './src/tasks/theme-switcher.html',
          'to-do-list': './src/tasks/to-do-list.html',
        },
        output: {
          entryFileNames: `tasks/[name].js`,
          chunkFileNames: `tasks/[name]-[hash].js`,
          assetFileNames: `tasks/[name]-[hash][extname]`,
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      SortCss({ sort: 'mobile-first' }),
    ],
  };
});
