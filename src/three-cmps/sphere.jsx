export function Sphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color={"blue"} />
    </mesh>
  )
}
