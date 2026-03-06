import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/app')
    }
  },
  // serve index.html from src/ and static files from project-level public/
  root: 'src',
  publicDir: '../public',
  server: {
    port: 4200
  }
});
