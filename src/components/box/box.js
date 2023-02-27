import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"


const Box = ({position, color}) => {
    const box = useRef()
    const [xRotSpeed] = useState(() => Math.random())
    const [yRotSpeed] = useState(() => Math.random())
    const [scale] = useState(() => Math.random() * (0.5 - 0.02) + 0.02)
    

    useFrame((state, delta) => {
        box.current.rotation.x += xRotSpeed * delta
        box.current.rotation.y += yRotSpeed * delta
    }, [xRotSpeed, yRotSpeed])

    return (
    <mesh ref={box} scale={scale} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color}/>
    </mesh>)
  }



export const Boxes = ({count}) => {

    const [positions] = useState(() => {
        const newPositions = []
        while (newPositions.length < count) {
          const position = new THREE.Vector3(
            (Math.random() * 2 - 1) * 3,
            Math.random() * (3 - 0.6) + 0.6,
            (Math.random() * 2 -1) * 15
          )
          if (!newPositions.some((p) => p.distanceTo(position) < 1)) {
            newPositions.push(position)
          }
        }
        return newPositions
      })
  
    // const positions = Array.from({ length: count }, () => (
    //     new Vector3(
    //     (Math.random() * 2 - 1) * 3,
    //     Math.random() * (3 - 0.6) + 0.6,
    //     (Math.random() * 2 -1) * 15))
    // )

    // const checkOverlap = (position) => {
    //     for (let i = 0; i < positions.length; i++) {
    //       const distance = position.distanceTo(positions[i])
    //       if (distance < 1) {
    //         return true // Overlap detected
    //       }
    //     }
    //     return false // No overlap detected
    //   }
    
    //   const addPosition = () => {
    //     let position
    //     do {
    //       position = new THREE.Vector3(...generatePosition())
    //     } while (checkOverlap(position))
    //     setPositions([...positions, position])
    //   } 
    
      return (
        <>
            {positions.map((position, index) => {
            if (position.x < 0) position.x -= 1.75
            if (position.x > 0) position.x += 1.75
            return (<Box key={index} position={position} color={index % 2 === 0 ? 0x35CAFA : 0xFF75BA} />)
            })}
        </>
      )
}