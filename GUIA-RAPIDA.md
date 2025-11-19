# 🚀 Guía de Inicio Rápido - DGA Producciones

## Primeros Pasos

### 1. El servidor ya está corriendo
El sitio web está funcionando en: **http://localhost:5173**

### 2. Comandos Disponibles

```bash
# Detener el servidor (Ctrl+C en la terminal)
# Volver a iniciar el servidor
npm run dev

# Construir para producción
npm run build

# Previsualizar el sitio de producción
npm run preview
```

## 📝 Personalización Inmediata

### Cambiar Textos e Información

1. **Información de Contacto**
   - Archivo: `src/components/Contact.jsx`
   - Buscar y reemplazar:
     - Email: `info@dgaproducciones.com`
     - Teléfono: `+54 9 11 2345-6789`
     - WhatsApp: `5491123456789`

2. **Redes Sociales**
   - Archivos: `src/components/Contact.jsx` y `src/components/Footer.jsx`
   - Actualizar enlaces de:
     - Instagram: `https://instagram.com/dgaproducciones`
     - TikTok: `https://tiktok.com/@dgaproducciones`

3. **Textos del Hero**
   - Archivo: `src/components/Hero.jsx`
   - Líneas 22-27: Cambiar el claim principal

4. **Sobre Nosotros**
   - Archivo: `src/components/About.jsx`
   - Líneas 26-37: Editar la presentación

### Agregar Imágenes Reales

#### Hero (Fondo Principal)
1. Coloca tu imagen en la carpeta `public/`
2. Edita `src/components/Hero.css`
3. Línea 29: Cambia la ruta de la imagen

```css
background: url('/tu-imagen.jpg') center/cover no-repeat;
```

#### Portafolio
1. Coloca tus imágenes en `public/portfolio/`
2. Edita `src/components/Portfolio.jsx`
3. Actualiza el array `portfolioItems` con las rutas reales

#### Sobre Nosotros
1. Coloca imagen en `public/`
2. Edita `src/components/About.css`
3. Reemplaza `.image-placeholder` con imagen real

## 🎨 Cambiar Colores de Marca

Archivo: `src/index.css` (líneas 9-17)

```css
:root {
  --color-primary: #1a1a1a;      /* Tu color oscuro */
  --color-secondary: #d4af37;    /* Tu color dorado/principal */
  --color-accent: #8b7355;       /* Tu color de acento */
}
```

## 📱 Contenido de Secciones

### Servicios
Archivo: `src/components/Services.jsx` (línea 13)

### Testimonios
Archivo: `src/components/Testimonials.jsx` (línea 11)

### Casos Destacados
Archivo: `src/components/FeaturedCases.jsx` (línea 10)

## ⚡ Tips Importantes

### Hot Reload Automático
Los cambios se reflejan automáticamente en el navegador. Solo guarda el archivo.

### Verificar Errores
- Revisa la terminal para errores de compilación
- Abre la consola del navegador (F12) para errores de ejecución

### Responsive Design
- El sitio es responsive por defecto
- Prueba en diferentes tamaños: Redimensiona la ventana del navegador
- O usa las DevTools (F12 → ícono de teléfono)

## 🌐 Subir a Internet

### Opción 1: Vercel (Gratis y Fácil)

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   npm run build
   vercel --prod
   ```

### Opción 2: Netlify (Gratis)

1. Construye el proyecto:
   ```bash
   npm run build
   ```
2. Arrastra la carpeta `dist/` a [netlify.com/drop](https://app.netlify.com/drop)

### Opción 3: GitHub Pages

1. Instala gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Agrega a `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/dga-produciones",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## 📧 Integrar Formulario de Contacto

El formulario actualmente solo muestra los datos en consola. Para hacerlo funcional:

### Opción 1: EmailJS (Gratis)
1. Crea cuenta en [emailjs.com](https://www.emailjs.com)
2. Instala: `npm install @emailjs/browser`
3. Integra en `src/components/Contact.jsx`

### Opción 2: Formspree (Gratis)
1. Crea cuenta en [formspree.io](https://formspree.io)
2. Agrega tu endpoint al form action

### Opción 3: Backend Propio
Conecta con tu propio servidor Node.js/Express

## 🆘 Solución de Problemas

### El sitio no carga
```bash
# Detén el servidor (Ctrl+C)
# Reinstala dependencias
npm install
# Reinicia
npm run dev
```

### Cambios no se reflejan
- Guarda el archivo
- Recarga el navegador (Cmd+R o Ctrl+R)
- Revisa la consola por errores

### Errores de importación
Verifica que todos los archivos CSS estén importados correctamente en sus componentes .jsx

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Documentación de Vite](https://vitejs.dev)

## 💬 Soporte

Para preguntas o soporte técnico, contacta al equipo de desarrollo.

---

**¡Tu sitio está listo para ser personalizado! 🎉**
