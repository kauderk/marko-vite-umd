// @ts-check
import { defineConfig } from 'vite'
import marko from '@marko/vite'
const name = 'LinklipExtension'
const dev = process.env.NODE_ENV !== 'production'

/**
 * @type {import('vite').UserConfigExport}
 */
export default defineConfig({
  plugins: [
    marko({
      linked: false,
    }),
  ],
  build: {
    outDir: 'dist', // Server and client builds should output assets to the same folder.
    emptyOutDir: false, // Avoid server / client deleting files from each other.

    sourcemap: true,
    minify: false,

    lib: {
      entry: 'src/index.js',
      formats: ['umd'],
      name,
      fileName: `${name}.js`,
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        name,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return `${name}.css`
          return `[name].[ext]`
        },
        entryFileNames: `${name}.js`,
        chunkFileNames: `${name}.js`,
      },
    },
  },
})
