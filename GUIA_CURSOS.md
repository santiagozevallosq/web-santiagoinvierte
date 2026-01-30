# Guía de Edición - Sección Cursos

Esta guía explica cómo gestionar los cursos que aparecen en la página `cursos.html` sin necesidad de tocar código HTML. Todo el contenido se gestiona desde un único archivo de datos.

## 1. Archivo de Datos
El archivo maestro se encuentra en:
`assets/data/cursos.json`

## 2. Cómo Previsualizar Cambios
Para ver tus cambios reflejados correctamente, asegúrate de estar corriendo el servidor local (ya que el navegador puede bloquear la lectura de archivos locales por seguridad).

1. Abre la terminal en la carpeta del proyecto.
2. Ejecuta el comando:
   ```bash
   npm run dev
   ```
3. La web se abrirá automáticamente. Ve a la sección **Cursos**.

## 3. Estructura de un Curso
Cada curso es un bloque (objeto) dentro del archivo JSON. Para agregar uno nuevo, simplemente copia y pega el siguiente bloque y rellena los datos:

```json
{
  "id": "identificador-unico",
  "title": "Título del Curso",
  "description": "Descripción corta y atractiva del curso.",
  "level": {
    "text": "Principiante", 
    "color": "green"
  },
  "badges": [
    {
      "text": "Popular",
      "color": "yellow",
      "icon": "⭐"
    }
  ],
  "features": [
    { "icon": "schedule", "text": "Duración" },
    { "icon": "videocam", "text": "Modalidad" },
    { "icon": "layers", "text": "Cantidad de módulos" },
    { "icon": "infinity", "text": "Acceso de por vida" }
  ],
  "cta": {
    "text": "Más información",
    "link": "https://tusitio.com/link-al-curso",
    "style": "primary",
    "icon": "open_in_new"
  }
}
```

## 4. Referencia de Estilos

### Niveles y Colores
El sistema reconoce automáticamente ciertos textos para asignar iconos, pero tú controlas los colores de fondo.

**Niveles Recomendados (Texto):**
- `Principiante` (Añade automáticamente 🟢)
- `Intermedio` (Añade automáticamente 🟡)
- `Avanzado` (Añade automáticamente 🔵)

**Colores de Badges Disponibles:**
Puedes usar estos nombres de color en la propiedad `"color"`:
- `green` (Verde)
- `yellow` (Amarillo)
- `blue` (Azul)
- `purple` (Morado)
- `gray` (Gris)

### Iconos
Los iconos usados (como "schedule", "videocam", "star") provienen de **Google Material Symbols**.
Puedes buscar más nombres de iconos aquí: [Google Fonts Icons](https://fonts.google.com/icons)

### Botones (CTA)
- `style: "primary"` -> Botón azul oscuro sólido (Principal).
- `style: "outline"` -> Botón con borde y fondo transparente (Secundario).

## 5. Preguntas Frecuentes

**¿Cómo elimino un curso?**
Simplemente borra todo el bloque del curso (desde la llave `{` hasta la llave `}`) en el archivo JSON. Asegúrate de borrar también la coma `,` si es el último elemento de la lista o el que estaba antes.

**¿Cómo cambio el orden?**
Corta y pega los bloques de los cursos en el orden que prefieras dentro de los corchetes `[...]`. El primero en la lista será el primero en aparecer en la web.
