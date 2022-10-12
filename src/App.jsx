import AppFooterLanding from "./cmps/app-footer"
import AppHeaderLanding from "./cmps/app_header"
import Hero from "./cmps/hero"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { TwoPiecePlanet } from "./three-cmps/two-piece-planet"
import { Stars, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
function App() {
  const ref = useRef()

  return (
    <div className="main-container">
      <AppHeaderLanding />
      <div
        id="canvas-container"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          position: "absolute",
        }}
      >
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0.5, 5] }}
        >
          <OrbitControls />
          <axesHelper visible={true} args={[3]} />
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
          <ambientLight intensity={0.5} />
          <directionalLight
            ref={ref}
            intensity={0.6}
            position={[0, 2, 2]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            castShadow
            color={"#fff"}
          />
          <TwoPiecePlanet />
        </Canvas>
      </div>
      <Hero />
      <AppFooterLanding />
    </div>
  )
}

export default App
