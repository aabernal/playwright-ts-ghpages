import { test, expect } from '@playwright/test';

test.describe('DemoBlaze Automation', () => {
  test('Navegar a DemoBlaze y verificar página', async ({ page }) => {
    // Ir a la página de DemoBlaze
    await page.goto('https://www.demoblaze.com/index.html');
    
    // Esperar a que la página cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Verificar que la página cargó correctamente
    await expect(page).toHaveTitle(/STORE/);
    
    // Verificar que el logo/navbar está presente
    const navbar = page.locator('.navbar-brand');
    await expect(navbar).toBeVisible();
    
    // Tomar screenshot de la página principal
    await page.screenshot({ path: 'test-results/demoblaze-homepage.png', fullPage: true });
    
    console.log('✅ Navegación a DemoBlaze completada exitosamente');
  });
});
