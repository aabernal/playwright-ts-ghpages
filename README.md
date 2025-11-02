# Playwright + TypeScript + GitHub Actions + Pages

Proyecto mínimo listo para:
- Ejecutar pruebas E2E con **Playwright** (TypeScript)
- Generar **reporte HTML**
- Publicarlo automáticamente en **GitHub Pages** usando **Actions**

## Requisitos
- Node.js 18+ (recomendado 20)
- Repositorio en GitHub con rama `main` (o ajusta el workflow)
- GitHub Pages habilitado con **Source: GitHub Actions** (Settings → Pages)

## Primer uso local
```bash
npm ci
npx playwright install
npm test
npm run report   # abre el reporte localmente
```

## ¿Cómo funciona el CI?
Cada `push` a `main` ejecuta:
1. `npm ci` e instalación de navegadores Playwright
2. `npx playwright test --reporter=html`
3. Copia el reporte a `public/` y lo sube como artifact para Pages
4. Despliega con `actions/deploy-pages` (necesita permisos `pages: write`, `id-token: write`)

Tras completarse, el sitio de Pages mostrará el **reporte HTML**.

## Estructura
```
.github/workflows/ci.yml   # pipeline: test + deploy a Pages
tests/example/example.spec.ts
playwright.config.ts
package.json
tsconfig.json
```

## Personalización
- Agrega más pruebas dentro de `tests/`
- Cambia `baseURL` en `playwright.config.ts`
- Ajusta los proyectos/navegadores en la misma config
