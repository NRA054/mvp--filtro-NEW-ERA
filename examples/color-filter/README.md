Ejemplo: Filtro de color en runtime

Instrucciones rápidas:

1. Abrir `index.html` en un navegador moderno que soporte módulos ES.
2. Arrastrar/seleccionar un archivo `.glb` (modelo de gorra) usando el input `file`.
3. Seleccionar un color con el picker y pulsar `Aplicar color`.
4. Pulsar `Reset` para volver al material original.

Notas:
- El ejemplo usa Three.js desde CDN y carga el `.glb` desde un input local (sin subida al servidor).
- Si la malla tiene textura base, el script genera una textura tintada por Canvas y la aplica.
- Para producción conviene optimizar texturas y respetar espacio de color sRGB/Linear según pipeline.
