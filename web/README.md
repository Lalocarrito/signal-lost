# Signal Lost · página web (Astro)

## Verla en tu compu
```bash
cd web
npm install      # solo la primera vez
npm run dev
```
Abre http://localhost:4321/signal-lost/

## Dónde está cada cosa
- `src/pages/` → las 4 páginas: `index.astro` (Home), `mission.astro` (Signal lost), `data.astro`, `about.astro`
- `src/components/` → `Nav.astro`, `Footer.astro`, `Sky.astro` (estrellas decorativas)
- `src/layouts/BaseLayout.astro` → nav + fondo + footer que comparten todas las páginas
- `src/styles/global.css` → paleta, tipografías y estilos dibujados a mano
- `src/data/team.js` → equipo, roles, links de GitHub/LinkedIn y link de Space Apps
- `src/data/robots.js` → los robots de la página Data
- `public/images/` → arte (fondos, logo, astronauta, estrella, parche, íconos)
- `public/fonts/` → Up and Down y KG Blank Space Solid
- `public/play/` → aquí va el build de Unity WebGL

## Publicar (más adelante)
En `astro.config.mjs` cambia `outDir` a `'../docs'` y corre `npm run build`.
Astro borra y vuelve a crear `docs/`, por eso el juego debe estar en `web/public/play/`.
