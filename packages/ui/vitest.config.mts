import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/**/*.stories.tsx', 'src/**/*.types.ts'],
    },
    include: ['**/*.test[s].{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist'],
    server: {
      deps: {
        inline: [/@nayya-com\/.*/],
      },
    },
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
