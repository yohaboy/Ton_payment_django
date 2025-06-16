import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
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
      'cee5-196-188-227-13.ngrok-free.app',
    ],
  },
})
