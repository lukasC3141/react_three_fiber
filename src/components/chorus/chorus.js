import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


const Chorus = () => {
    
    const itemsRef = useRef([])

    useFrame((state) => {
        for (let i = 0; i < itemsRef.current.length; i++) {
            let mesh = itemsRef.current[i]
            let z = (i - 5) * 3
            mesh.position.set(0, 0, -z)
        }
    })
    
    return (
        <>
        {[0,0,0,0,0,0, 0, 0, 0, 0].map((v,i) => (
            <mesh 
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                >
                <torusGeometry args={[3, 0.08]} />
                <meshStandardMaterial
                    color={0xff0000}
                    emissive={[1, 1, 1]} 
                    emissiveIntensity={20}/>
            </mesh>))}
        </>
    )
}

export default Chorus