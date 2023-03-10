import React, {useRef, useState} from 'react';
import { useBox, useContactMaterial, useSphere } from '@react-three/cannon';
import * as THREE from "three"
import * as CANNON from '@react-three/cannon'

export function Cube2(props) {

  
    const [ref, boxRef] = useBox(() => ({
      rotation: props.rotation,
      mass: props.mass,
      position: props.position,
      args: props.size,
      material: props.material
    }))

    


    useContactMaterial("sphereMat", "boxMat", {restitution: 0})
  
    return (
      <>
      <mesh ref={ref} scale={props.scale} castShadow recieveShadow>
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
      </>
    )
}