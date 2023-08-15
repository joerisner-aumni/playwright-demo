const config = {
  expect: {
    timeout: 5000, // Maximum time expect() should wait for the condition to be met
  },
  fullyParallel: true,
  outputDir: './playwright/artifacts/', // Folder for test artifacts such as screenshots, videos, traces, etc.
  reporter: [['dot'], ['html', { open: 'never', outputFolder: './playwright/report' }]],
  testDir: './playwright',
  timeout: 30 * 1000,
  use: {
    actionTimeout: 0, // Maximum time each action such as `click()` can take. 0 = no limit
    baseURL: 'http://localhost:4000',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry', // Collect trace when retrying the failed test
    viewport: { width: 1600, height: 1000 },
  },
  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
      },
    },
  ],
  webServer: {
    command: 'yarn start',
    timeout: 120 * 1000,
    url: 'http://localhost:4000',
  },
};

export default config;
