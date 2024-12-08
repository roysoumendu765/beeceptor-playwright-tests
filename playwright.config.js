import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  expect: {
  },
  use: {
    headless: false,
  },
});
