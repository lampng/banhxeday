import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'src/assets/**/*.{jpg,png}', dest: 'dist/src' }
      ],
      hook: 'writeBundle',
      flatten: false // Ensure the directory structure is preserved
    })
  ],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000000000 // tăng giới hạn kích thước khối lên 1000 kB
  }
})