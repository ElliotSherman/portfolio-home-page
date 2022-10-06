export default function Sphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
      <meshNormalMaterial />
    </mesh>
  )
}
