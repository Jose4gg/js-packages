import { resolve } from 'path';

import { defineConfig, UserConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, './vitest.setup.ts')],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/**/*.stories.tsx',
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/**/*.types.ts',
      ],
    },
    include: ['**/*.test[s].{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@stories': resolve(__dirname, './src/stories'),
      '@tests': resolve(__dirname, './src/tests'),
    },
  },
});
