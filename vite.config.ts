import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages veröffentlicht dieses Repository unter /Nexora/.
  base: '/Nexora/',
  plugins: [react()],
})
