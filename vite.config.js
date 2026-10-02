import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Custom plugin to ensure Windows doesn't serve JS files as application/octet-stream
const fixMimeType = () => ({
  name: 'fix-mime-type',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const originalSetHeader = res.setHeader.bind(res)
      res.setHeader = (name, value) => {
        if (typeof name === 'string' && name.toLowerCase() === 'content-type') {
          const path = (req.url || '').split('?')[0]
          if (
            /\.(js|mjs|jsx|ts|tsx)$/i.test(path) ||
            (typeof value === 'string' && value.includes('octet-stream'))
          ) {
            value = 'text/javascript; charset=utf-8'
          }
        }
        return originalSetHeader(name, value)
      }
      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [fixMimeType(), react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
})

