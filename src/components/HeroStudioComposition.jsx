import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

export default function HeroStudioComposition() {
  const mountRef = useRef(null)
  const [hasWebGL] = useState(checkWebGLSupport)
  const [activeMetric, setActiveMetric] = useState('architecture')

  useEffect(() => {
    if (!hasWebGL) return
    const currentMount = mountRef.current
    if (!currentMount) return

    const width = currentMount.clientWidth || 440
    const height = currentMount.clientHeight || 340

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.1
    } catch {
      return
    }

    currentMount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 0, 4.5)

    // Studio Lighting (Clean, warm, editorial reflections)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.4)
    mainKeyLight.position.set(5, 6, 4)
    scene.add(mainKeyLight)

    const cobaltFillLight = new THREE.DirectionalLight(0x3458d4, 1.8)
    cobaltFillLight.position.set(-5, -3, -2)
    scene.add(cobaltFillLight)

    const topRimLight = new THREE.DirectionalLight(0xfcfbf9, 1.4)
    topRimLight.position.set(0, 6, -3)
    scene.add(topRimLight)

    // Centerpiece Group
    const group = new THREE.Group()
    group.position.set(0, 0, 0)
    scene.add(group)

    // 1. Refined Titanium / Liquid Chrome Core
    const sphereGeometry = new THREE.IcosahedronGeometry(1.15, 16)
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f232b,
      metalness: 0.94,
      roughness: 0.12,
      wireframe: false
    })
    const sphere = new THREE.Mesh(sphereGeometry, chromeMaterial)
    group.add(sphere)

    // 2. Cobalt Precision Latitude Ring
    const ringGeometry = new THREE.TorusGeometry(1.6, 0.016, 16, 120)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x3458d4,
      metalness: 0.88,
      roughness: 0.18
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 3.2
    ring.rotation.y = Math.PI / 6
    group.add(ring)

    // 3. Secondary Neutral Precision Orbit
    const ring2Geometry = new THREE.TorusGeometry(1.85, 0.007, 16, 120)
    const ring2Material = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.9,
      roughness: 0.25
    })
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material)
    ring2.rotation.x = -Math.PI / 3.8
    ring2.rotation.z = Math.PI / 4.2
    group.add(ring2)

    // Mouse Interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      targetX = x * 0.35
      targetY = y * 0.35
    }

    currentMount.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth tracking
      mouseX += (targetX - mouseX) * 0.06
      mouseY += (targetY - mouseY) * 0.06

      sphere.rotation.y = elapsedTime * 0.18 + mouseX
      sphere.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 + mouseY

      ring.rotation.z = elapsedTime * 0.12
      ring.rotation.x = Math.PI / 3.2 + mouseY * 0.25

      ring2.rotation.y = -elapsedTime * 0.08
      ring2.rotation.z = Math.PI / 4.2 + mouseX * 0.25

      renderer.render(scene, camera)
    }

    animate()

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return
      const newWidth = currentMount.clientWidth
      const newHeight = currentMount.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (currentMount) {
        currentMount.removeEventListener('mousemove', handleMouseMove)
        if (renderer.domElement && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement)
        }
      }
      renderer.dispose()
      sphereGeometry.dispose()
      chromeMaterial.dispose()
      ringGeometry.dispose()
      ringMaterial.dispose()
      ring2Geometry.dispose()
      ring2Material.dispose()
    }
  }, [hasWebGL])

  return (
    <div className="w-full max-w-[460px] mx-auto rounded-2xl bg-[#FFFFFF] border border-[#E6E4DE] shadow-xs overflow-hidden flex flex-col justify-between">
      {/* Top Coordinate Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-[#E6E4DE] text-[11px] sm:text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3458D4]" />
          <span className="font-semibold text-[#171717] tracking-wider">
            FIG. 01 — ARCHITECTURAL CORE
          </span>
        </div>
        <span className="text-[#777777] text-[10px] sm:text-[11px] uppercase tracking-wider">
          MSU Baroda CSE &bull; 2026
        </span>
      </div>

      {/* Dedicated 3D Viewport - Perfectly Centered, Responsive */}
      <div className="w-full h-[270px] xs:h-[300px] sm:h-[340px] relative flex items-center justify-center bg-radial from-[#F7F6F2] to-transparent">
        {hasWebGL ? (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto rounded-full border border-[#E6E4DE] flex items-center justify-center mb-3">
              <span className="font-display font-bold text-xl text-[#171717]">PG</span>
            </div>
            <span className="text-xs font-mono text-[#777777]">Interactive Studio Engine</span>
          </div>
        )}
      </div>

      {/* Bottom Spec Callouts - Responsive Buttons */}
      <div className="p-4 sm:p-5 border-t border-[#E6E4DE] bg-[#FFFFFF]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            <button
              onClick={() => setActiveMetric('architecture')}
              className={`px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-colors cursor-pointer ${
                activeMetric === 'architecture'
                  ? 'bg-[#171717] text-white font-medium'
                  : 'text-[#666666] hover:text-[#171717] bg-[#F7F6F2]'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => setActiveMetric('dsa')}
              className={`px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-colors cursor-pointer ${
                activeMetric === 'dsa'
                  ? 'bg-[#171717] text-white font-medium'
                  : 'text-[#666666] hover:text-[#171717] bg-[#F7F6F2]'
              }`}
            >
              Algorithms
            </button>
            <button
              onClick={() => setActiveMetric('focus')}
              className={`px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-colors cursor-pointer ${
                activeMetric === 'focus'
                  ? 'bg-[#171717] text-white font-medium'
                  : 'text-[#666666] hover:text-[#171717] bg-[#F7F6F2]'
              }`}
            >
              Applied AI
            </button>
          </div>
          <span className="text-[10px] font-mono text-[#3458D4] font-medium flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3458D4] animate-pulse" />
            Synchronized
          </span>
        </div>

        {/* Dynamic Detail Text */}
        {activeMetric === 'architecture' && (
          <div className="text-xs text-[#555555] leading-relaxed pt-1">
            <p className="font-semibold text-[#171717]">Full-Stack Systems &amp; Schemas</p>
            <p className="text-[11px] text-[#777777] mt-0.5">
              React 19, TypeScript, Node.js, FastAPI, PostgreSQL RLS, and MongoDB 2dsphere.
            </p>
          </div>
        )}

        {activeMetric === 'dsa' && (
          <div className="text-xs text-[#555555] leading-relaxed pt-1">
            <p className="font-semibold text-[#171717]">200+ LeetCode Solutions</p>
            <p className="text-[11px] text-[#777777] mt-0.5">
              Continuous algorithmic practice in Java &amp; Python across Trees, Graphs, DP &amp; Arrays.
            </p>
          </div>
        )}

        {activeMetric === 'focus' && (
          <div className="text-xs text-[#555555] leading-relaxed pt-1">
            <p className="font-semibold text-[#171717]">Retrieval-Augmented Generation</p>
            <p className="text-[11px] text-[#777777] mt-0.5">
              FAISS &amp; Supabase pgvector HNSW indexing with sub-second semantic retrieval.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
