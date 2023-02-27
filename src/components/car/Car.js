import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import React, {useEffect} from "react";
import { Mesh } from "three";


const Car = () => {

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/chevrolet_corvette_c7/scene.gltf" 
    )

    useEffect(() => {
        gltf.scene.scale.set(0.005, 0.005, 0.005)
        gltf.scene.position.set(0, -0.035, 0)
        gltf.scene.traverse((object) => 
            {if (object instanceof Mesh) {
                object.castShadow = true
                object.recieveShadow = true
                object.material.envMapIntensity = 20
            }
        })
    },[gltf])

    return (
        <primitive object={gltf.scene} />
    )
}

export default Car