import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useTexture } from "@react-three/drei"
export function SpinningPlanet({ scale, texture, size, rotationSpeed }) {
  const planet = useRef(null)
  useFrame(() => {
    planet.current.rotation.y += rotationSpeed
  })
  //   const colorMap = useTexture("textures/2k_saturn.jpg")
  //   const colorMap = useTexture("textures/2k_saturn.jpg")
  const colorMap = useTexture(texture)
  return (
    <mesh
      ref={planet}
      scale={scale}
      position={[2, 0, 0]}
      rotation={[0.3, 0, 0]}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
