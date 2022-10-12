import { PlanetRing } from "./planet-ring"
import { SpinningPlanet } from "./spinning-planet"

export function TwoPiecePlanet() {
  return (
    <group>
      <PlanetRing />
      <SpinningPlanet />
    </group>
  )
}
