import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type Props = { defaultModel?: string }

export default function ColorFilterViewer({ defaultModel }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const gltfRef = useRef<any>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    const el = mountRef.current!
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf6f6f6)

    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 1000)
    camera.position.set(0, 1.4, 2.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.outputEncoding = THREE.sRGBEncoding
    el.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0)
    hemi.position.set(0, 2, 0)
    scene.add(hemi)
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(5, 10, 7.5)
    scene.add(dir)

    const loader = new GLTFLoader()

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    function load(url: string) {
      loader.load(url, gltf => {
        if (gltfRef.current) scene.remove(gltfRef.current.scene)
        gltfRef.current = gltf
        scene.add(gltf.scene)
      })
    }

    if (defaultModel) load(defaultModel)

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [defaultModel])

  async function applyColor(hex: string) {
    if (!gltfRef.current) return
    const promises: Promise<void>[] = []
    gltfRef.current.scene.traverse((node: any) => {
      if (node.isMesh) {
        const mat = node.material
        if (!mat.map) {
          if (mat.color) mat.color = new THREE.Color(hex)
        } else {
          promises.push(new Promise(resolve => {
            const img = mat.map.image
            const canvas = document.createElement('canvas')
            canvas.width = img.width || 1024
            canvas.height = img.height || 1024
            const ctx = canvas.getContext('2d')!
            if (img instanceof ImageBitmap || img instanceof HTMLImageElement) ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            ctx.globalCompositeOperation = 'source-atop'
            ctx.fillStyle = hex
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            const tex = new THREE.CanvasTexture(canvas)
            tex.encoding = THREE.sRGBEncoding
            mat.map = tex
            mat.needsUpdate = true
            resolve()
          }))
        }
      }
    })
    await Promise.all(promises)
  }

  function reset() {
    if (!gltfRef.current) return
    gltfRef.current.scene.traverse((node: any) => {
      if (node.isMesh && node.material && node.material.userData && node.material.userData.original) {
        node.material = node.material.userData.original
      }
    })
  }

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <input id="file" type="file" accept=".glb,.gltf" onChange={e => {
          const f = e.target.files?.[0]
          if (!f) return
          const url = URL.createObjectURL(f)
          const loader = new GLTFLoader()
          loader.load(url, gltf => {
            if (gltfRef.current && gltfRef.current.scene) {
              const parent = gltfRef.current.scene.parent
              if (parent) parent.remove(gltfRef.current.scene)
            }
            gltfRef.current = gltf
            const el = mountRef.current!
            const scene = el.querySelector('canvas') ? null : null
            // Add to existing scene by dispatching a custom event
            const event = new CustomEvent('gltf-loaded', { detail: gltf })
            window.dispatchEvent(event)
            URL.revokeObjectURL(url)
          })
        }} />
        <input id="color" type="color" defaultValue="#ff0000" style={{ marginLeft: 8 }} />
        <button onClick={() => applyColor((document.getElementById('color') as HTMLInputElement).value)} style={{ marginLeft: 8 }}>Aplicar color</button>
        <button onClick={() => reset()} style={{ marginLeft: 8 }}>Reset</button>
      </div>
      <div ref={mountRef} style={{ width: '100%', height: 480, border: '1px solid #ddd' }} />
    </div>
  )
}
