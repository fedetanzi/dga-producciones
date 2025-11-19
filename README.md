# DGA Producciones - Sitio Web Premium

Sitio web elegante y minimalista para DGA Producciones, una productora de eventos sociales de lujo con proyección nacional e internacional.

## 🎯 Características

### Diseño y Estilo
- ✨ Diseño minimalista y elegante
- 🎨 Paleta de colores sofisticada (dorado, negro, blanco)
- 🌊 Animaciones suaves con Framer Motion
- 📱 Completamente responsive
- ⚡ Carga optimizada y rendimiento excepcional

### Secciones Implementadas

1. **Hero Section**
   - Fondo con imagen de alta calidad
   - Claim principal impactante
   - CTAs para "Solicitar Propuesta" y "Ver Portafolio"
   - Indicador de scroll animado

2. **Sobre Nosotros**
   - Presentación profesional de DGA Producciones
   - Enfoque en Maia & Guille
   - Layout grid con imagen

3. **Servicios**
   - Producción Integral
   - Ambientación
   - Logística
   - Técnica (luces/sonido/estructuras)
   - Gestión de Proveedores
   - Eventos Boutique
   - Cards con iconos y animaciones hover

4. **Portafolio/Galería**
   - Grid moderno y responsive
   - Lightbox con navegación
   - Animaciones de entrada
   - Categorización de eventos

5. **Casos Destacados**
   - Sección para eventos premium (ej: Wonderland)
   - Cards grandes con detalles
   - Imágenes destacadas

6. **Proceso de Trabajo**
   - 5 pasos claramente definidos:
     1. Consulta Inicial
     2. Conceptualización
     3. Planificación Detallada
     4. Producción y Montaje
     5. Experiencia y Cierre
   - Timeline visual con iconos
   - Layout alternado

7. **Testimonios**
   - Formato carrusel
   - Sistema de navegación con flechas y dots
   - Calificación con estrellas
   - Transiciones suaves

8. **Disponibilidad**
   - Base en Buenos Aires
   - Alcance nacional e internacional
   - CTA para consultas

9. **Contacto**
   - Formulario completo con validación
   - Campos: nombre, email, teléfono, tipo de evento, fecha, cantidad de invitados, ubicación, mensaje
   - Botón "Solicitar Propuesta"
   - Información de contacto
   - Integración con redes sociales

10. **Footer**
    - Menú resumido
    - Enlaces a redes sociales (Instagram, WhatsApp, TikTok)
    - Datos básicos de contacto
    - Créditos

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool y dev server
- **Framer Motion** - Animaciones avanzadas
- **React Icons** - Iconografía
- **CSS Custom Properties** - Variables CSS para theming
- **Google Fonts** - Tipografías premium:
  - Cormorant Garamond (títulos)
  - Montserrat (cuerpo)

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio o navegar a la carpeta del proyecto
cd dga-produciones

# Instalar dependencias (ya instaladas)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

El sitio estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
dga-produciones/
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
├── IMG_4813.JPG           # Imagen de hero
└── src/
    ├── main.jsx           # Entry point
    ├── App.jsx            # Componente principal
    ├── App.css            # Estilos generales de App
    ├── index.css          # Estilos globales y variables
    └── components/
        ├── Header.jsx + Header.css
        ├── Hero.jsx + Hero.css
        ├── About.jsx + About.css
        ├── Services.jsx + Services.css
        ├── Portfolio.jsx + Portfolio.css
        ├── FeaturedCases.jsx + FeaturedCases.css
        ├── WorkProcess.jsx + WorkProcess.css
        ├── Testimonials.jsx + Testimonials.css
        ├── Availability.jsx + Availability.css
        ├── Contact.jsx + Contact.css
        └── Footer.jsx + Footer.css
```

## 🎨 Paleta de Colores

```css
--color-primary: #1a1a1a      /* Negro principal */
--color-secondary: #d4af37    /* Dorado elegante */
--color-accent: #8b7355       /* Dorado oscuro */
--color-bg: #ffffff           /* Fondo blanco */
--color-bg-dark: #f5f5f5      /* Fondo gris claro */
--color-text: #2c2c2c         /* Texto principal */
--color-text-light: #666666   /* Texto secundario */
```

## 📱 Redes Sociales

El sitio incluye integración directa con:
- **WhatsApp Business**: Enlaces directos para contacto
- **Instagram**: Perfil de DGA Producciones
- **TikTok**: Canal oficial

Los enlaces se encuentran en:
- Header (móvil)
- Sección de Contacto
- Footer

## 🔧 Personalización

### Cambiar Imágenes
Reemplaza los placeholders en:
- `Hero.css` → `.hero-image` (fondo principal)
- Componentes con `.image-placeholder` (About, Portfolio, etc.)

### Actualizar Contenido
Edita directamente los componentes en `src/components/`:
- Textos en archivos `.jsx`
- Estilos en archivos `.css` correspondientes

### Modificar Colores
Actualiza las variables CSS en `src/index.css`:
```css
:root {
  --color-primary: #tu-color;
  --color-secondary: #tu-color;
  /* ... */
}
```

## ✨ Características Técnicas

### Optimización
- Lazy loading de componentes
- Animaciones hardware-accelerated
- Imágenes optimizadas
- Bundle size mínimo

### SEO
- Meta tags configurados
- Semántica HTML5
- URLs amigables
- Schema markup ready

### Accesibilidad
- ARIA labels
- Navegación por teclado
- Contraste adecuado
- Focus states visibles

## 📦 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### Otros Servicios
El proyecto genera una carpeta `dist/` lista para deploy en cualquier servicio de hosting estático.

## 🤝 Contacto DGA Producciones

- **Email**: info@dgaproducciones.com
- **Teléfono**: +54 9 11 2345-6789
- **Ubicación**: Buenos Aires, Argentina
- **Instagram**: @dgaproducciones
- **TikTok**: @dgaproducciones

## 📄 Licencia

Copyright © 2024 DGA Producciones. Todos los derechos reservados.

---

**Desarrollado con ❤️ por Maia & Guille**
