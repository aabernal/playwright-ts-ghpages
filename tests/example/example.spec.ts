import { test, expect } from '@playwright/test';

test.describe('DemoBlaze Automation', () => {
  test('Navegar a DemoBlaze y verificar página', async ({ page }) => {
    // Ir a la página de DemoBlaze
    await page.goto('https://www.demoblaze.com/index.html');
    
  
    
    console.log('✅ Navegación a DemoBlaze completada exitosamente');
  });
});
