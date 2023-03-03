import React, {useRef, useState} from 'react';
import { useContactMaterial, useSphere } from '@react-three/cannon';
import * as THREE from "three"
import * as CANNON from '@react-three/cannon'

export function Sphere(props) {

  
    const [ref, boxRef] = useSphere(() => ({
      mass: props.mass,
      position: props.position,
      args: props.size,
      material: props.material
    }))

    
    return (
      <>
      <mesh ref={ref} scale={props.scale} castShadow recieveShadow>
        <sphereGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
      </>
    )
}