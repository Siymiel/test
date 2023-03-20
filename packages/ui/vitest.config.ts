/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [`${__dirname}/tests/setup.js`],
    alias: [
      { find: 'test-utils', replacement: `${__dirname}/tests/test-utils.tsx` },
    ],
  },
});
