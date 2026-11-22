import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative-to-root asset paths. If the site is ever hosted in a sub-folder
// (e.g. https://example.com/lstn/), change `base` to '/lstn/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
