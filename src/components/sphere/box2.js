import { useBox } from "@react-three/cannon"

export function Cube() {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0]}))
    return (
      <mesh ref={ref}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    )
  }