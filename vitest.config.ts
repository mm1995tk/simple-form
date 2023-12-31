/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.vitest': false,
  },
  test: {
    includeSource: ['src/**/*.ts'],
    environment: 'jsdom'
  },
});
