import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expose to network
    port: process.env.PORT || 5173,
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: [
      "mock-interview-ai-q90j.onrender.com" // add your Render domain here
    ]
  }
})
