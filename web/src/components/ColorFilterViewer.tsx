import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class GLTFMaterialsPBRSpecularGlossinessExtension {
  name = 'KHR_materials_pbrSpecularGlossiness'

  constructor(private parser: any) {}

  getMaterialType() {
    return THREE.MeshStandardMaterial
  }

  extendMaterialParams(materialIndex: number, materialParams: any) {
    const parser = this.parser
    const materialDef = parser.json.materials[materialIndex]
    const extension = materialDef.extensions?.[this.name]
    if (!extension) return Promise.resolve()

    const pending: Promise<any>[] = []
    materialParams.color = new THREE.Color(1, 1, 1)
    materialParams.opacity = 1.0
    materialParams.metalness = 0.0
    materialParams.roughness = 1.0

    if (Array.isArray(extension.diffuseFactor)) {
      materialParams.color.setRGB(extension.diffuseFactor[0], extension.diffuseFactor[1], extension.diffuseFactor[2])
      materialParams.opacity = extension.diffuseFactor[3] ?? 1.0
    }

    if (extension.diffuseTexture !== undefined) {
      pending.push(parser.assignTexture(materialParams, 'map', extension.diffuseTexture, THREE.SRGBColorSpace))
    }

    if (extension.glossinessFactor !== undefined) {
      materialParams.roughness = 1.0 - extension.glossinessFactor
    }

    if (Array.isArray(extension.specularFactor)) {
      const averageSpecular = (extension.specularFactor[0] + extension.specularFactor[1] + extension.specularFactor[2]) / 3
      materialParams.roughness = Math.min(Math.max(1.0 - averageSpecular, 0.0), 1.0)
    }

    if (extension.specularGlossinessTexture !== undefined) {
      pending.push(parser.assignTexture(materialParams, 'roughnessMap', extension.specularGlossinessTexture))
      pending.push(parser.assignTexture(materialParams, 'metalnessMap', extension.specularGlossinessTexture))
    }

    return Promise.all(pending)
  }
}

type Props = { defaultModel?: string }

export default function ColorFilterViewer({ defaultModel }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const gltfRef = useRef<any>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const loaderRef = useRef<GLTFLoader | null>(null)
  const originalMaterials = useRef<Map<string, THREE.Material>>(new Map())
  const [cameraError, setCameraError] = useState<string | null>(null)
  const [cameraActive, setCameraActive] = useState(false)
  const [modelError, setModelError] = useState<string | null>(null)

  const fitModelToView = (gltf: any) => {
    const scene = sceneRef.current
    const camera = cameraRef.current
    const controls = controlsRef.current
    if (!scene || !camera || !controls) return

    const box = new THREE.Box3().setFromObject(gltf.scene)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    gltf.scene.position.sub(center)

    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = camera.fov * (Math.PI / 180)
    const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 2.2

    camera.position.set(cameraZ, cameraZ * 0.75, cameraZ)
    camera.near = Math.max(0.1, cameraZ / 100)
    camera.far = cameraZ * 10
    camera.updateProjectionMatrix()

    controls.target.set(0, 0, 0)
    controls.update()
  }

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf6f6f6)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 1000)
    camera.position.set(0, 1.4, 2.5)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(el.clientWidth, el.clientHeight)
    if ('outputColorSpace' in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace
    } else {
      ;(renderer as any).outputEncoding = THREE.sRGBEncoding
    }
    rendererRef.current = renderer
    el.appendChild(renderer.domElement)

    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0)
    hemi.position.set(0, 2, 0)
    scene.add(hemi)

    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(5, 10, 7.5)
    scene.add(dir)

    const loader = new GLTFLoader()
    loader.register(parser => new GLTFMaterialsPBRSpecularGlossinessExtension(parser))
    loaderRef.current = loader

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.0
    controls.enablePan = false
    controls.minDistance = 0.5
    controls.maxDistance = 10
    controlsRef.current = controls

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    if (defaultModel) {
      loader.load(
        defaultModel,
        gltf => {
          if (gltfRef.current && gltfRef.current.scene) {
            scene.remove(gltfRef.current.scene)
          }
          gltfRef.current = gltf
          originalMaterials.current.clear()
          gltf.scene.traverse((node: any) => {
            if (node.isMesh && node.material) {
              originalMaterials.current.set(node.uuid, node.material.clone())
            }
          })
          scene.add(gltf.scene)
          fitModelToView(gltf)
        },
        undefined,
        err => {
          setModelError('Error cargando el modelo por defecto. Revisa la ruta.')
          console.error('GLTFLoader error:', err)
        }
      )
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === el) {
        el.removeChild(renderer.domElement)
      }
      sceneRef.current = null
      cameraRef.current = null
      rendererRef.current = null
      controlsRef.current = null
      loaderRef.current = null
    }
  }, [defaultModel])

  const requestCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      setCameraError(null)
      setCameraActive(true)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
    } catch (err: any) {
      setCameraError(err?.message || 'No se pudo acceder a la cámara.')
      setCameraActive(false)
    }
  }

  const loadModel = (url: string) => {
    if (!loaderRef.current || !sceneRef.current) return
    setModelError(null)
    loaderRef.current.load(
      url,
      gltf => {
        if (gltfRef.current && gltfRef.current.scene) {
          sceneRef.current!.remove(gltfRef.current.scene)
        }
        gltfRef.current = gltf
        originalMaterials.current.clear()
        gltf.scene.traverse((node: any) => {
          if (node.isMesh && node.material) {
            originalMaterials.current.set(node.uuid, node.material.clone())
          }
        })
        sceneRef.current!.add(gltf.scene)
        fitModelToView(gltf)
      },
      undefined,
      err => {
        setModelError('Error cargando el modelo. Verifica el archivo o la ruta.')
        console.error('GLTFLoader error:', err)
      }
    )
  }

  const loadLocalModel = (file: File) => {
    const url = URL.createObjectURL(file)
    if (!loaderRef.current || !sceneRef.current) {
      URL.revokeObjectURL(url)
      return
    }
    setModelError(null)
    loaderRef.current.load(
      url,
      gltf => {
        if (gltfRef.current && gltfRef.current.scene) {
          sceneRef.current!.remove(gltfRef.current.scene)
        }
        gltfRef.current = gltf
        originalMaterials.current.clear()
        gltf.scene.traverse((node: any) => {
          if (node.isMesh && node.material) {
            originalMaterials.current.set(node.uuid, node.material.clone())
          }
        })
        sceneRef.current!.add(gltf.scene)
        fitModelToView(gltf)
        URL.revokeObjectURL(url)
      },
      undefined,
      err => {
        setModelError('Error al cargar el archivo local.')
        console.error('GLTFLoader local error:', err)
        URL.revokeObjectURL(url)
      }
    )
  }

  const applyColor = async (hex: string) => {
    if (!gltfRef.current) return
    const tasks: Promise<void>[] = []
    gltfRef.current.scene.traverse((node: any) => {
      if (node.isMesh && node.material) {
        const mat = node.material
        if (!mat.map) {
          if (mat.color) mat.color = new THREE.Color(hex)
        } else {
          tasks.push(
            new Promise<void>(resolve => {
              const img = mat.map.image
              const canvas = document.createElement('canvas')
              canvas.width = img?.width || 1024
              canvas.height = img?.height || 1024
              const ctx = canvas.getContext('2d')!
              if (img instanceof ImageBitmap || img instanceof HTMLImageElement) {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
              } else {
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, canvas.width, canvas.height)
              }
              ctx.globalCompositeOperation = 'source-atop'
              ctx.fillStyle = hex
              ctx.fillRect(0, 0, canvas.width, canvas.height)
              const tex = new THREE.CanvasTexture(canvas)
              tex.encoding = THREE.sRGBEncoding
              mat.map = tex
              mat.needsUpdate = true
              resolve()
            })
          )
        }
      }
    })
    await Promise.all(tasks)
  }

  const reset = () => {
    if (!gltfRef.current) return
    gltfRef.current.scene.traverse((node: any) => {
      if (node.isMesh) {
        const original = originalMaterials.current.get(node.uuid)
        if (original) {
          node.material = original.clone()
        }
      }
    })
  }

  return (
    <div>
      <div style={{ marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <label>
          Modelo 3D:
          <input
            type="file"
            accept=".glb,.gltf"
            style={{ marginLeft: 8 }}
            onChange={e => {
              const file = e.target.files?.[0]
              if (file) loadLocalModel(file)
            }}
          />
        </label>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          Color:
          <input id="color" type="color" defaultValue="#ff0000" style={{ marginLeft: 8 }} />
        </label>
        <button onClick={() => applyColor((document.getElementById('color') as HTMLInputElement).value)}>Aplicar color</button>
        <button onClick={reset}>Reset</button>
        <button onClick={requestCamera}>{cameraActive ? 'Cámara activa' : 'Activar cámara'}</button>
      </div>
      {cameraError ? <div style={{ color: 'red', marginBottom: 8 }}>{cameraError}</div> : null}
      {modelError ? <div style={{ color: 'red', marginBottom: 8 }}>{modelError}</div> : null}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <div ref={mountRef} style={{ flex: 1, minHeight: 480, minWidth: 300, border: '1px solid #ddd' }} />
        <div style={{ width: 260, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div>
            <strong>Vista previa de cámara</strong>
            <video ref={videoRef} style={{ width: '100%', height: 240, background: '#000' }} autoPlay muted playsInline />
          </div>
          <div style={{ padding: 8, background: '#fafafa', border: '1px solid #ececec', borderRadius: 4 }}>
            <strong>Indicaciones</strong>
            <p style={{ margin: 4, fontSize: 12 }}>
              Pulsa el botón de cámara para pedir permiso. Si hay un modelo por defecto, se cargará desde <code>/Assets/baseball_cap.glb</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
