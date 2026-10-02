import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Custom plugin to ensure Windows doesn't serve JS files as application/octet-stream
const fixMimeType = () => ({
  name: 'fix-mime-type',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split('?')[0] || ''
      if (url.endsWith('.js') || url.endsWith('.mjs') || url.endsWith('.jsx') || url.endsWith('.ts') || url.endsWith('.tsx')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
      }
      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [fixMimeType(), react(), tailwindcss()],
})

