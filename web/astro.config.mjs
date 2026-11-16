// @ts-check
import { defineConfig } from 'astro/config';

// Signal Lost - configuracion del sitio.
// El sitio se publica en GitHub Pages: https://lalocarrito.github.io/signal-lost/
export default defineConfig({
  site: 'https://lalocarrito.github.io',
  base: '/signal-lost',

  // Por ahora la pagina se construye en web/dist (solo para verla en local).
  // Cuando ya se vaya a publicar, cambia esto a '../docs'.
  // OJO: al construir, Astro BORRA y vuelve a crear esa carpeta, asi que el juego
  // de Unity debe vivir en web/public/play/ (Astro lo copia solo a docs/play/).
  outDir: './dist',
});
