import { MeshReflectorMaterial} from '@react-three/drei';
import {useBox} from "@react-three/cannon"

const Plane = () => {

    const [ref] = useBox(() => ({ 
        rotation: [-Math.PI / 2, 0, 0],
        args: [90, 90, 0.1]

    }))

    return (
      <mesh ref={ref} rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
        <planeGeometry args={[90, 90]} />
        <MeshReflectorMaterial roughness={0.7} />
      </mesh>
    )
}

export default Plane