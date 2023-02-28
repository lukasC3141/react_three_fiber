import { MeshReflectorMaterial} from '@react-three/drei';
import {useBox} from "@react-three/cannon"
import { DoubleSide, FrontSide } from 'three';

const Plane = () => {

    const [ref] = useBox(() => ({ 
        rotation: [-Math.PI / 2, 0, 0],
        args: [90, 90, 0.1]

    }))

    return (
      <mesh ref={ref} rotation-x={-Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[90, 90]}  />
        <meshStandardMaterial  side={DoubleSide} />
      </mesh>
    )
}

export default Plane