# Signal Lost

Proyecto para el **NASA Space Apps Challenge 2026**.

🌐 **Sitio:** https://lalocarrito.github.io/signal-lost/
🎮 **Jugar:** https://lalocarrito.github.io/signal-lost/play/

## Estructura

```
signal-lost/
├── docs/              ← sitio publicado con GitHub Pages
│   ├── index.html     ← página de información del proyecto
│   └── play/          ← build de Unity WebGL
├── .gitignore
└── README.md
```

## Despliegue (GitHub Pages)

1. En el repositorio: **Settings → Pages**.
2. En *Build and deployment* elegir **Deploy from a branch**.
3. Rama **main**, carpeta **/docs** → **Save**.
4. En uno o dos minutos el sitio queda disponible en la URL de arriba.

Cada cambio que se suba a `main` dentro de `docs/` actualiza el sitio automáticamente.

## Cómo subir el build de Unity WebGL

1. En Unity: **File → Build Settings → WebGL**.
2. En **Player Settings → Publishing Settings**:
   - **Compression Format:** `Disabled`, o bien dejar `Gzip`/`Brotli` y activar **Decompression Fallback**
     (GitHub Pages no envía los encabezados que necesitan los archivos comprimidos).
3. Generar el build y copiar **el contenido** de la carpeta resultante
   (`index.html`, `Build/`, `TemplateData/`) dentro de `docs/play/`.
4. Ningún archivo puede pesar más de 100 MB.

## Equipo

- _Pendiente_
