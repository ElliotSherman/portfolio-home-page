import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { DoubleSide } from "three"
export function PlanetRing() {
  const planetRing = useRef(null)
  useFrame(() => {
    planetRing.current.rotation.z += 0.003
  })
  const colorMap = useTexture("textures/small_ring_tex.png")
  return (
    <mesh
      ref={planetRing}
      scale={[2, 2, 2]}
      position={[2, 0, 0]}
      rotation={[Math.PI / 1.97, 0, 0]}
      receiveShadow
      castShadow
    >
      <ringBufferGeometry args={[1.3, 1.8, 128, 12]} />
      <meshStandardMaterial map={colorMap} side={DoubleSide} />
    </mesh>
  )
}
