import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  fullyParallel: true,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--headless',                    // Ejecutar en modo headless
            '--disable-gpu',                 // Necesario para algunos entornos headless
            '--no-sandbox',                  // Necesario para algunos entornos CI/CD
            '--disable-dev-shm-usage',       // Evitar problemas con recursos de memoria compartida
            '--window-size=1920,1080',       // Establecer un tamaño de ventana fijo
            '--remote-debugging-port=9222'   // Para depuración remota si es necesario
          ]
        }
      },
    },
  ],
});
