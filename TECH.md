# Technical Documentation

## 1. Visión general

`mvp--filtro-NEW-ERA` es una propuesta de filtro inteligente para la marca New Era, pensado para guiar la elección de gorras según el rostro y los gustos del usuario. Busca reducir la fricción de compra online con recomendaciones personalizadas, análisis fisionómico y experiencia de visualización previa.

## 2. Stack recomendado

### Frontend
- React (SPA) o Vue.js para UI dinámica y componentes reutilizables.
- Typescript para mayor seguridad en el código y escalabilidad.
- Tailwind CSS o Material UI para estilos rápidos y consistentes.
- React Router / Vue Router para navegación de flujo de preguntas, recomendaciones y prueba AR.

### Backend
- Node.js con Express o Fastify para API REST.
- Typescript en backend para mantener consistencia con el frontend.
- Base de datos: PostgreSQL para datos de catálogo, usuarios y preferencias.
- Redis opcional para caching de recomendaciones y sesiones.

### Visión Artificial y ML
- OpenCV / TensorFlow.js para detección de rasgos faciales y clasificación de tipo de rostro.
- MediaPipe Face Mesh como opción ligera para obtener puntos faciales sin depender de servicios externos.
- Modelos entrenados o heurísticos para mapear tipos de rostro a siluetas de gorra.

### Realidad Aumentada (AR)
- WebXR o librerías de AR basadas en WebGL para superponer gorras en la cámara.
- Alternativa móvil: AR.js o Three.js para prueba virtual si el MVP funciona en navegador.

### DevOps / Infraestructura
- GitHub Actions para CI/CD de compilación y despliegue.
- Docker para contenerización de servicios.
- Despliegue en Vercel/Netlify para frontend y en un servicio de nube (AWS / DigitalOcean / Railway) para backend.

## 3. Librerías clave

### Frontend
- `react` / `vue`
- `typescript`
- `axios` o `fetch` para llamadas a API
- `react-hook-form` / `vee-validate` para formularios de quiz
- `zustand` / `redux-toolkit` para estado compartido (recomendado si hay flujo complejo)
- `three` y `@react-three/fiber` si se implementa visualización 3D ligera

### Backend
- `express` o `fastify`
- `prisma` o `typeorm` para ORM con PostgreSQL
- `zod` para validación de datos
- `jsonwebtoken` si se añade autenticación
- `multer` si el servicio recibe imágenes de usuario

### ML / Visión
- `opencv4nodejs` o `@tensorflow/tfjs`
- `@mediapipe/face_mesh`
- `face-api.js` como alternativa de detección facial en cliente

### AR / Cámara
- `@react-three/fiber`
- `three`
- `webxr-polyfill` si se busca compatibilidad multiplataforma

## 4. Arquitectura propuesta

### 4.1 Capas del sistema
- Capa de interfaz: aplicación web responsiva que guía al usuario con quiz, resultados y vista previa.
- Capa de aplicación: lógica de recomendación, reglas de curaduría y mapeo entre tipo de rostro y gorras.
- Capa de datos: catálogo de productos, perfiles de estilo y reglas de recomendación.
- Capa de ML/visión: procesamiento de la imagen para detectar tipo de rostro y extraer métricas.

### 4.2 Flujo de datos
1. El usuario entra y responde preguntas sobre estilo y uso.
2. El sistema solicita o captura una imagen de rostro.
3. El motor de visión artificial detecta forma de cara y sugiere siluetas apropiadas.
4. El motor de curaduría combina el resultado del quiz con el análisis fisionómico.
5. El usuario recibe un listado filtrado de gorras y puede probar modelos en AR.

### 4.3 Integración de AR
- Usar la cámara del dispositivo para superponer una gorra sobre la cara.
- El primer MVP puede ofrecer una previsualización basada en un modelo 2D/3D simple.
- Mantener la AR como un componente independiente para facilitar iteraciones.

## 5. Decisiones técnicas

### 5.1 Elección de stack
- Elegir `React + TypeScript` permite acelerar el desarrollo con un ecosistema sólido y mayor mantenibilidad.
- Elegir `Node.js + Express/Fastify` facilita el desarrollo de APIs y la integración con servicios de visión artificial.

### 5.2 Modularidad
- Separar claramente el módulo de recomendación del módulo de AR y del módulo de gestión de catálogo.
- El backend debe exponer endpoints claros: `/quiz`, `/recommendations`, `/face-analysis`, `/catalog`.

### 5.3 Rendimiento y escalabilidad
- Mantener el análisis de rostro del lado del cliente cuando sea posible para reducir latencia y privacidad.
- Usar cache para recomendaciones frecuentes y filtros de usuario.
- Diseñar la arquitectura para que el motor de visión sea escalable como servicio independiente.

### 5.4 Privacidad y datos
- No almacenar imágenes de rostro a menos que sean necesarias.
- Si se recoge información personal, cumplir con políticas de privacidad y normativas locales.

### 5.5 MVP prioritario
- Priorizar el flujo de descubrimiento: quiz + recomendaciones basadas en el tipo de rostro.
- Dejar la prueba AR como funcionalidad de segundo paso a medida que el prototipo se estabilice.

## 6. Recomendaciones para el desarrollo

- Documentar el catálogo de gorras y las reglas de mapeo entre tipo de rostro y silueta.
- Definir claramente las categorías de estilos (`deportivo`, `urbano`, `minimalista`, etc.).
- Probar el análisis facial con muestras reales y ajustar el mapeo de recomendaciones.
- Mantener el proyecto lo más ligero posible en la primera versión para validar el concepto.

## 7. Estructura de carpetas sugerida

- `/src/frontend` - aplicación web
- `/src/backend` - servidor API
- `/src/ml` - lógica de análisis fisionómico
- `/src/data` - modelos de datos y reglas de recomendación
- `/docs` - documentación adicional

---

Este `TECH.md` está diseñado para servir como guía técnica del proyecto, mostrando el stack, las librerías principales, la arquitectura propuesta y las decisiones que respaldan el MVP de filtro de gorras New Era.