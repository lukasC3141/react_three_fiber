import React, {useState} from 'react';
import { useBox, } from '@react-three/cannon';
import * as THREE from "three"

export function Cube2(props) {
  
    const [ref] = useBox(() => ({
      mass: props.mass,
      position: props.position,
      args: props.size,
      material: {
        friction: 10,
        restitution: 0
      }
    }))
  
    return (
      <mesh ref={ref} scale={props.scale} castShadow recieveShadow>
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    )
}