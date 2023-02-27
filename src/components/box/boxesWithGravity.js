import React, {useState} from 'react';
import { useBox, } from '@react-three/cannon';
import * as THREE from "three"

 function Cube2(props) {
  
    const [ref] = useBox(() => ({
      mass: props.mass,
      position: props.position,
      args: props.size
    }))
  
    return (
      <mesh ref={ref}>
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    )
}

export const Cubes = (props) => {

    // array som we dont have the same pos for more 
    const [positions] = useState(() => {
        const newPositions = []
        while (newPositions.length < props.count) {
          const position = new THREE.Vector3(
            Math.random() * (2 + 2) - 2,
            Math.random() * (30 - 1.5) + 1.5,
            Math.random() * (2 + 2) - 2
          )
          if (!newPositions.some((p) => p.distanceTo(position) < 1)) {
            newPositions.push(position)
          }
        }
        return newPositions
    })
    console.log(positions)

    return (
        <>
          {positions.map((position, index) => (
            <Cube2 key={index}
             position={[position.x, position.y, position.z]}
             mass={1}
             color={[Math.random(), Math.random(), Math.random()]} />
          ))}
        </>
    )

    // return (
    //     <>
    //     {(Array.from({ length: 200 }, (value, index) => value)).map((index) => {
    //         return (<Cube2 key={index} position={
    //             [Math.random() * (2 + 2) - 2,
    //              Math.random() * (30 - 1.5) + 1.5,
    //              Math.random() * (2 + 2) - 2]} 
    //              size={[1, 1, 1]}
    //              mass={1}
    //              color={[Math.random(), Math.random(), Math.random()]} />)
    //       })}
    //     </>
    // )
}