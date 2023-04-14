import { defineConfig } from 'vite'
import { createProxyMiddleware } from 'http-proxy-middleware';
import react from '@vitejs/plugin-react';
import axios from 'axios';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/users': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  async configureServer(server) {
    server.middlewares.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    });
  },
  define: {
    'process.env': {
      API_BASE_URL: JSON.stringify('http://localhost:8080')
    }
  }
})
