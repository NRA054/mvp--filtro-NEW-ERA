import React from 'react'
import ColorFilterViewer from './components/ColorFilterViewer'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <h2>MVP Filtro New Era</h2>
      </header>
      <main style={{ padding: 12 }}>
        <p>Sube un archivo `.glb` o usa `Assets/baseball_cap.glb` y prueba colores en tiempo real.</p>
        <ColorFilterViewer defaultModel="/Assets/baseball_cap.glb" />
      </main>
    </div>
  )
}
