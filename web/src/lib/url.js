// Arma rutas que respetan el "base" del sitio (/signal-lost/).
// Ejemplos: url('') -> /signal-lost/   url('images/star.webp') -> /signal-lost/images/star.webp
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
