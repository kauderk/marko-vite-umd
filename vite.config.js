// @ts-check
import { defineConfig } from 'vite'
import marko from '@marko/vite'
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
  },
})
