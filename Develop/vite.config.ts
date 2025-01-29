import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: 4173,
    host: '0.0.0.0',
    allowedHosts: ['candidate-search-qtz0.onrender.com']
  },
});