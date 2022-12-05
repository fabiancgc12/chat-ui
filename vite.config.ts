import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@/assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@/hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
})
