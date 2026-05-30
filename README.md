# Portafolio profesional

Sitio web personal de portafolio para desarrollador, listo para publicar en **GitHub Pages**.
Tema oscuro y elegante con paleta fría (azul, cian y verde esmeralda), animaciones suaves y diseño responsivo.

## 📁 Estructura del proyecto

```
portafolio/
├── index.html          # Página principal (estructura del sitio)
├── css/
│   └── styles.css      # Todos los estilos y la paleta de colores
├── js/
│   └── main.js         # Animaciones de aparición al hacer scroll
├── recursos/
│   └── apis.html       # Cheat sheet de APIs (mismo estilo del sitio)
├── assets/
│   ├── ico/            # Iconos del sitio (favicon en varios tamaños)
│   └── images/         # Aquí van tus imágenes (foto, badges, capturas)
└── README.md           # Este archivo
```

## ✏️ Cómo personalizarlo

1. Abre `index.html` y busca los comentarios `<!-- EDITA: ... -->`.
   Ahí cambias tu nombre, descripción, proyectos, experiencia y enlaces.
2. Para cambiar colores, fuentes o espaciado, edita `css/styles.css`
   (las variables de color están al inicio, dentro de `:root`).
3. Para añadir tu CV, coloca un archivo `cv.pdf` en la raíz de la carpeta
   (el botón "Descargar CV" ya lo enlaza).
4. Para añadir imágenes, guárdalas en `assets/images/` y enlázalas así:
   `<img src="assets/images/foto.jpg" alt="...">`

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube **el contenido** de esta carpeta
   (es decir, `index.html` debe quedar en la raíz del repositorio).
2. Ve a **Settings → Pages**.
3. En *Source*, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Guarda y espera uno o dos minutos. Tu sitio estará en
   `https://tuusuario.github.io/nombre-del-repo/`.

## 🎨 Créditos

Tipografías: Bricolage Grotesque, Hanken Grotesk y JetBrains Mono (Google Fonts).
