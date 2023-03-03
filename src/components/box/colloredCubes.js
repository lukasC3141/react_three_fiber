import { Cube2 } from "./boxesWithGravity"
import Plane from "../mainPlane/mainPlane"
import { useContactMaterial } from "@react-three/cannon"
import { Sphere } from "../sphere/sphere"

export const TV = () => {

  useContactMaterial("plane", "cube1", {restitution: 0.7, friction: 100, contactEquationStiffness: 1000})
  const bigCube = [20, 20, 20]

    return (
      <>
        {/* <Cube2 
          position={[-3, 1, 0]}
          mass={10}
          color={[Math.random(), Math.random(), Math.random()]}
          />
        <Cube2 
          position={[3, 1, 0]}
          mass={10}
          color={[Math.random(), Math.random(), Math.random()]}
          /> */}
        <Plane material={"plane"}/>
        <Cube2 
          rotation={[0,Math.PI /4, 0]}
          position={[-6, 3.5, -4]}
          mass={1}
          size={[7, 7, 7]}
          color={0x1CCCBA}
          material={"cube1"}
          />
        <Cube2 
          rotation={[0,Math.PI /4, 0]}
          position={[7, 3.5, -2]}
          mass={1}
          size={[7, 7, 7]}
          color={0x1CCCBA}
          material={"cube1"}
          />
        <Sphere 
        position={[0.4, 3, -3.2]}
        mass={1}
        size={[1.7]}
        color={0x1CCCBA}
        material={"cube1"}
        />
        <Cube2 
          rotation={[0,Math.PI /4, 0]}
          position={[1, 3.5, -11]}
          mass={1}
          size={[ 7, 7, 12]}
          color={0x1CCCBA}
          material={"cube1"}
          />
      </>
    )
  }