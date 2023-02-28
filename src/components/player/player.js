import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useRef, useEffect } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "./useKeyboard"

const jump_force = 3
const speed = 4

export const Player = () => {

    const actions = useKeyboard()
    
    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0,2,10],
        args: [2]
    }))

    const velocityPlayer = useRef([0, 0, 0])
    useEffect(() => {
            api.velocity.subscribe((v) => velocityPlayer.current = v )
    }, [api.velocity])


    const positionPlayer = useRef([0,0,0])
    useEffect(() => {
            api.position.subscribe((p) => positionPlayer.current = p )
    }, [api.position])


    useFrame(() => {
        camera.position.copy(new Vector3(
            positionPlayer.current[0],
            positionPlayer.current[1],
            positionPlayer.current[2],
             ))
        
        const direction = new Vector3()

        const frontVector = new Vector3(
            0,
            0,
            (actions.moveBackward ? 1 : 0 ) - (actions.moveForward ? 1 : 0)
        )

        const sideVector = new Vector3(
            (actions.moveLeft ? 1 : 0 ) - (actions.moveRight ? 1 : 0),
            0,
            0
        )

        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed).applyEuler(camera.rotation)
        
        api.velocity.set(direction.x, velocityPlayer.current[1], direction.z)

        if (actions.jump && Math.abs(velocityPlayer.current[1]) < 0.05) {
            api.velocity.set(velocityPlayer.current[0], jump_force, velocityPlayer.current[2])
        }

    })

    return (
        <mesh ref={ref}>

        </mesh>
    )

}