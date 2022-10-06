import AppFooterLanding from "./cmps/app-footer"
import AppHeaderLanding from "./cmps/app_header"
import Hero from "./cmps/hero"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import Sphere from "./three-cmps/sphere"

function App() {
  const ref = useRef()
  return (
    <div className="main-container">
      <AppHeaderLanding />
      <div
        id="canvas-container"
        style={{
          zIndex: "-1",
          height: "100vh",
          backgroundColor: "black",
          position: "absolute",
          width: "100%",
        }}
      >
        <Canvas
          shadowMap
          camera={{
            position: [5, 5, 5],
          }}
        >
          <Sphere />
          <ambientLight color={"rgb(120,120,200)"} intensity={0.5} />
          <directionalLight
            ref={ref}
            intensity={0.6}
            position={[0, 2, 2]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            castShadow
          />
        </Canvas>
        <gridHelper />
      </div>
      <Hero />
      <AppFooterLanding />
    </div>
  )
}

export default App
