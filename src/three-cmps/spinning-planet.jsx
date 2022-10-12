import { useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { useTexture } from "@react-three/drei"
export function SpinningPlanet() {
  const planet = useRef(null)
  useFrame(() => {
    planet.current.rotation.y += 0.005
  })
  return (
    <mesh
      ref={planet}
      scale={[1, 1, 1]}
      position={[2, 0, 0]}
      rotation={[-0.3, 0, 0]}
    >
      <sphereGeometry args={[2]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  )
}
