import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
    coverage: {
      include: ['types/**/*.ts'],
      exclude: [
        'types/**/*.d.ts',
        'node_modules',
        'dist'
      ],
      reporter: ['text', 'json', 'html']
    },
    setupFiles: ['./tests/setup.ts']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './types'),
      '@/types': resolve(__dirname, './types'),
      '@/examples': resolve(__dirname, './examples')
    }
  }
});