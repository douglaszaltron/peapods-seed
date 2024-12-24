import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      reporter: ['cobertura', 'lcovonly', 'text', 'text-summary', 'html'],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
      include: ['src/**/*'],
      exclude: [
        '**/__test__/**',
        '**/__mocks__/**/*',
        '**/*.types.ts',
        '**/*.d.ts',
        '*.test.{ts,tsx}',
        '*.spec.{ts,tsx}',
        '**/entry.{client,expose}.tsx',
        'src/index.tsx',
      ],
    },
  },
});
