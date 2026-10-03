import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  workers: 2,
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://localhost:3000",
    headless: true,
    proxy: process.env.TEST_PROXY
      ? { server: process.env.TEST_PROXY }
      : undefined,
    launchOptions: {
      executablePath: process.env.TEST_CHROMIUM_PATH,
      args: process.env.TEST_CA_SPKI
        ? [`--ignore-certificate-errors-spki-list=${process.env.TEST_CA_SPKI}`]
        : [],
    },
  },
  reporter: [["list"], ["json", { outputFile: "test-results/results.json" }]],
});
