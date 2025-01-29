import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: 10000,
    host: '0.0.0.0',
  },
  preview: {
    allowedHosts: ['candidate-search-qtz0.onrender.com'],
  },
});