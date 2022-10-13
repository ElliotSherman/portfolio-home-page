import { PlanetRing } from "./planet-ring"
import { SpinningPlanet } from "./spinning-planet"

export function TwoPiecePlanet() {
  return (
    <group>
      {/* <PlanetRing /> */}
      <SpinningPlanet
        size={[2]}
        scale={[1, 1, 1]}
        texture={"textures/2k_earth_daymap.jpg"}
        rotationSpeed={0.0075}
      />
      {/* <SpinningPlanet
        size={[2.05]}
        scale={[1, 1, 1]}
        // texture={"textures/clouds.png"}
        rotationSpeed={0.007}
      /> */}
      {/* <PlanetRing /> */}
    </group>
  )
}
