import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function PlanetRing() {
  const planetRing = useRef(null)
  useFrame(() => {
    planetRing.current.rotation.z += 0.003
  })
  return (
    <mesh
      ref={planetRing}
      scale={[2, 2, 2]}
      position={[2, 0, 0]}
      rotation={[Math.PI / 1.97, 0, 0]}
    >
      <ringGeometry args={[1.3, 1.8, 16, 12]} />
      <meshStandardMaterial color={"yellow"} wireframe />
    </mesh>
  )
}
