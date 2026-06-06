# Documentación técnica

## 1. Visión general

`mvp--filtro-NEW-ERA` es un MVP enfocado en la experiencia de selección de gorras New Era, basado en la forma del rostro y las preferencias de estilo del usuario. El objetivo es entregar recomendaciones útiles y una vista previa visual sin sobrecargar el proyecto con infraestructuras complejas.

## 2. Stack recomendado

### Frontend
- React (SPA) o Vue.js para construir la experiencia interactiva.
- TypeScript para mayor seguridad y claridad en el desarrollo.
- Tailwind CSS o Material UI para estilos rápidos y coherentes.
- React Router / Vue Router para manejar el flujo de preguntas, recomendaciones y AR.

### Visión artificial y ML
- TensorFlow.js o `face-api.js` para detección facial y clasificación de tipo de rostro en el navegador.
- MediaPipe Face Mesh como opción ligera para obtener puntos faciales sin dependencias pesadas.
- Algoritmos heurísticos simples para mapear tipos de rostro a siluetas de gorra.

### Realidad Aumentada (AR)
- AR.js, Three.js o WebXR para superponer una gorra sobre la cámara.
- Implementación de prueba virtual que pueda funcionar directamente en el navegador.

### Operaciones y despliegue
- GitHub Actions para CI de frontend.
- Despliegue en Vercel o Netlify para una entrega rápida del MVP.
- Docker opcional para entornos locales consistentes.

## 3. Librerías clave

### Frontend
- `react` / `vue`
- `typescript`
- `axios` o `fetch` para carga de datos del catálogo o simulaciones de recomendación.
- `react-hook-form` / `vee-validate` para el quiz de usuario.
- `zustand` / `pinia` para estado compartido si el producto requiere múltiples pantallas.
- `three` y `@react-three/fiber` si se usa visualización 3D ligera.

### ML / Visión
- `@tensorflow/tfjs`
- `@mediapipe/face_mesh`
- `face-api.js`

### AR / Cámara
- `@react-three/fiber`
- `three`
- `ar.js` o `webxr-polyfill` según compatibilidad.

## 4. Arquitectura propuesta

### 4.1 Capas del sistema
- Interfaz: experiencia web responsiva que guía al usuario paso a paso.
- Lógica de recomendación: reglas de estilo y mapeo entre tipo de rostro y silueta.
- Cliente de visión: análisis facial que se ejecuta preferentemente en el navegador.

### 4.2 Flujo de datos
1. El usuario responde el mini-quiz de estilo.
2. El sistema solicita cámara o permite seleccionar tipo de rostro manualmente.
3. Se detecta la forma de cara y se asignan recomendaciones de silueta.
4. Se muestran hasta 3 gorras sugeridas.
5. El usuario puede activar el probador virtual AR para ver la gorra en su rostro.

### 4.3 Integración AR
- Diseñar AR como una capa opcional dentro del frontend.
- En el MVP, utilizar una solución 2D/3D simple que no dependa de servicios externos.
- Mantener el probador virtual (AR) independiente del flujo principal para iterar rápido.

## 5. Decisiones técnicas

### 5.1 Enfoque frontend
- Priorizar una experiencia autocontenida en el navegador.
- Reducir dependencias de backend a lo mínimo, concentrándose en las funciones visibles.
- Utilizar detección facial en el cliente (análisis fisionómico ligero) para mejorar la rapidez y privacidad.

### 5.2 Modularidad
- Separar el quiz, la recomendación y el probador virtual en componentes independientes.
- Mantener el motor de mapeo de rostro y estilo como una capa reutilizable.

### 5.3 Privacidad y simplicidad
- Evitar el almacenamiento de imágenes de rostro.
- Procesar datos de cara en el dispositivo siempre que sea posible.
- Mantener la experiencia ligera y fácil de probar.

## 6. Recomendaciones para el desarrollo

- Definir claramente las categorías de estilo (`deportivo`, `urbano`, `minimalista`, etc.).
- Crear la guía de mapeo entre tipos de rostro y siluetas de gorras.
- Validar la detección facial con ejemplos reales.
- Construir el MVP como una experiencia frontend ágil antes de añadir más capas.

## 7. Estructura de carpetas sugerida

- `/src` - aplicación web
- `/src/components` - componentes UI y de flujo
- `/src/lib` - lógica de recomendación y reglas de estilo
- `/src/vision` - integración de detección facial y AR
- `/public` - activos visuales y datos de catálogo

---

Este `TECH.md` se enfoca en la experiencia frontend del MVP, eliminando la propuesta de backend y priorizando las herramientas de visión artificial y AR para la selección de gorras.