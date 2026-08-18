# Siwina 🦉

Sitio web corporativo de Siwina - Una empresa de desarrollo de software especializada en soluciones digitales innovadoras.

## 🚀 Acerca del Proyecto

Siwina es una plataforma web moderna construida con Angular 21 que muestra los servicios, proyectos y capacidades de la empresa. El sitio incluye:

- **Landing Page Moderna**: Diseño responsivo con animaciones y efectos visuales
- **Secciones Principales**:
  - Hero con llamado a la acción
  - Productos: POS con facturación DIAN, agentes de IA y plataforma de ventas
  - Nosotros / diferenciadores
  - Clientes que confían en Siwina
  - CTA de contacto
- **Navegación Responsive**: Menú adaptable para desktop y móvil
- **Integración con WhatsApp**: Botones de contacto directo
- **Diseño Modular**: Componentes reutilizables y escalables

## 🛠️ Tecnologías

- **Angular 21.0** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de estilos
- **Angular Material** - Componentes UI
- **Signals API** - Manejo de estado reactivo
- **Vitest** - Testing framework

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm 11.6.2 o superior
- Angular CLI 21.0.5

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone <repository-url>
cd Siwina
```

2. Instala las dependencias:

```bash
npm install
```

## 💻 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm start
# o
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── common/
│   │   └── components/
│   │       └── nabvar/          # Barra de navegación
│   ├── home/
│   │   └── components/
│   │       ├── about/           # Sección "Nosotros"
│   │       ├── cta/             # Call to Action
│   │       ├── Footer/          # Pie de página
│   │       ├── hero/            # Sección principal
│   │       ├── projects/        # Portafolio de proyectos
│   │       ├── services/        # Servicios ofrecidos
│   │       └── technologies/    # Stack tecnológico
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── assets/                      # Recursos estáticos
├── main.ts                      # Punto de entrada
└── styles.css                   # Estilos globales
```

## 🏗️ Construcción

Para construir el proyecto para producción:

```bash
npm run build
# o
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

## 🧪 Testing

Ejecutar las pruebas unitarias:

```bash
npm test
# o
ng test
```

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run watch` - Construye en modo desarrollo con observación de cambios
- `npm test` - Ejecuta las pruebas unitarias

## 🎨 Características de Diseño

- **Responsive Design**: Adaptado a móviles, tablets y desktop
- **Tema Personalizado**: Paleta de color principal #902bcc
- **Animaciones Suaves**: Transiciones y efectos hover
- **Modo Claro/Oscuro**: Variables CSS personalizables
- **Accesibilidad**: Estructura semántica y navegación por teclado

## 🖼️ Imágenes de la landing

Las imágenes del hero y de los tres productos viven en `public/images/`. Son recortes con canal
alfa, ya redimensionados y comprimidos desde los originales del diseño:

| Archivo                    | Dimensiones | WebP  | Uso                         |
| -------------------------- | ----------- | ----- | --------------------------- |
| `hero-composed.png`        | 1120 × 840  | 140 K | Hero (LCP, con `preload`)   |
| `hero-composed-720.webp`   | 720 × 540   | 72 K  | Variante móvil del hero     |
| `pos-barista.png`          | 680 × 580   | 67 K  | Producto 01 · POS DIAN      |
| `support-headphones.png`   | 680 × 453   | 40 K  | Producto 02 · Agentes de IA |
| `team-group.png`           | 680 × 453   | 40 K  | Producto 03 · Ventas        |

El marcado usa `<picture>` con `image/webp` y hace fallback al PNG. Si reemplazás un PNG,
regenerá su WebP:

```bash
npm run images:webp
```

Requiere `cwebp` (`brew install webp`). Para reprocesar desde un original grande: redimensionar
con `sips -Z <ancho>`, comprimir el PNG con `pngquant --quality 65-88` y recién ahí generar el
WebP.

## 🔍 SEO y rendimiento

- Metadatos completos en `src/index.html`: título, descripción, `canonical`, Open Graph,
  Twitter Card y `og:locale` es_CO.
- Datos estructurados JSON-LD (`Organization`, `WebSite` e `ItemList` de productos).
- `public/sitemap.xml` y `robots.txt` con referencia al sitemap.
- Estructura semántica: un único `<h1>`, jerarquía de `<h2>`/`<h3>` por sección, landmarks
  `header`/`main`/`footer` y enlace "Saltar al contenido".
- Imágenes con `width`/`height` explícitos (evita CLS), `loading="lazy"` fuera del viewport y
  `fetchpriority="high"` en el hero.
- Google Tag Manager se carga en tiempo de inactividad (`requestIdleCallback`) para no competir
  con el LCP.
- Todos los componentes usan `ChangeDetectionStrategy.OnPush`.

## 📞 Contacto

- **WhatsApp**: +57 300 781 0339
- **Email**: contacto@Siwina.com

## 🔗 Enlaces Útiles

- [Documentación de Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 Licencia

Este proyecto es privado y pertenece a Siwina.

---

Desarrollado con ❤️ por el equipo de Siwina
