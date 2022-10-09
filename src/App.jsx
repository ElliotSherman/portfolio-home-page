import AppFooterLanding from "./cmps/app-footer"
import AppHeaderLanding from "./cmps/app_header"
import Hero from "./cmps/hero"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { Sphere } from "./three-cmps/sphere"
import { CamOrbitController } from "./three-cmps/cam-orbit-controls"
import { Stars } from "@react-three/drei"

function App() {
  const ref = useRef()

  return (
    <div className="main-container">
      <AppHeaderLanding />
      <div
        id="canvas-container"
        style={{
          height: "100vh",
          backgroundColor: "black",
          position: "absolute",
          width: "100%",
        }}
      >
        <Canvas
          // shadowMap
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
        >
          <axesHelper visible={true} args={[3]} />
          <CamOrbitController />
          <ambientLight intensity={0.1} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1.1}
          />
          {/* <ambientLight intensity={0.5} /> */}
          <directionalLight
            ref={ref}
            intensity={0.6}
            position={[0, 2, 2]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            castShadow
            color={"#fff"}
          />
          <Sphere />
        </Canvas>
        {/* <gridHelper /> */}
      </div>
      <Hero />
      <AppFooterLanding />
    </div>
  )
}

export default App
