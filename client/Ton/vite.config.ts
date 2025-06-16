import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    nodePolyfills({
      include: ['buffer'],
      globals: { Buffer: true }
    })
  ],
  optimizeDeps: {
    esbuildOptions: { target: 'es2020' }
  },
  server: {
    allowedHosts: [
      '58de-196-190-62-168.ngrok-free.app',
    ],
  },
})
