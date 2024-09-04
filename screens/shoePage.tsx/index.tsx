import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import * as THREE from 'three'

type ShoePartName = "laces" | "mesh" | "caps" | "inner" | "sole" | "stripes" | "band" | "patch";

interface State {
  current: ShoePartName | null;
  items: Record<ShoePartName, string>;
}

// State management
const state = proxy<State>({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff"
  },
})

const primaryColors = {
  red: "#ff0000",
  blue: "#0000ff",
  green: "#00ff00",
  yellow: "#ffff00",
  purple: "#800080",
  orange: "#ffa500",
  black: "#000000",
  white: "#ffffff",
}

// Main component
export default function ShoeNike() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Shoe />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
          <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <ColorButtons />
    </div>
  )
}

// Shoe component
function Shoe() {
  const ref = useRef<THREE.Group>(null)
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("shoe-draco.glb")
  const [hovered, set] = useState<ShoePartName | null>(null)

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
  })

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${hovered ? snap.items[hovered] : ''}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered ?? ''}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => {
        document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`
      }
    }
  }, [hovered, snap.items])

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation()
        const material = (e.object as THREE.Mesh).material as THREE.Material & { name?: string }
        if (material.name && Object.keys(state.items).includes(material.name)) {
          set(material.name as ShoePartName)
        }
      }}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => {
        e.stopPropagation()
        const material = (e.object as THREE.Mesh).material as THREE.Material & { name?: string }
        if (material.name && Object.keys(state.items).includes(material.name)) {
          state.current = material.name as ShoePartName
        }
      }}>
      <mesh receiveShadow castShadow geometry={(nodes.shoe as THREE.Mesh).geometry} material={materials.laces} material-color={snap.items.laces} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_1 as THREE.Mesh).geometry} material={materials.mesh} material-color={snap.items.mesh} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_2 as THREE.Mesh).geometry} material={materials.caps} material-color={snap.items.caps} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_3 as THREE.Mesh).geometry} material={materials.inner} material-color={snap.items.inner} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_4 as THREE.Mesh).geometry} material={materials.sole} material-color={snap.items.sole} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_5 as THREE.Mesh).geometry} material={materials.stripes} material-color={snap.items.stripes} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_6 as THREE.Mesh).geometry} material={materials.band} material-color={snap.items.band} />
      <mesh receiveShadow castShadow geometry={(nodes.shoe_7 as THREE.Mesh).geometry} material={materials.patch} material-color={snap.items.patch} />
    </group>
  )
}

// ColorButtons component
function ColorButtons() {
  const snap = useSnapshot(state)
  
  const handleColorChange = (part: ShoePartName, color: string) => {
    state.items[part] = color
    state.current = part
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      {(Object.keys(state.items) as ShoePartName[]).map((part) => (
        <div key={part} style={{ margin: '0 10px' }}>
          <label htmlFor={part} style={{ display: 'block', marginBottom: '5px', textAlign: 'center' }}>{part}</label>
          <select
            id={part}
            value={snap.items[part]}
            onChange={(e) => handleColorChange(part, e.target.value)}
            style={{ 
              width: '100px',
              padding: '5px',
              backgroundColor: snap.items[part],
              color: getContrastColor(snap.items[part])
            }}
          >
            {Object.entries(primaryColors).map(([colorName, colorValue]) => (
              <option key={colorName} value={colorValue} style={{ backgroundColor: colorValue, color: getContrastColor(colorValue) }}>
                {colorName}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

// Helper function to determine contrasting text color
function getContrastColor(hexColor: string): 'black' | 'white' {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}