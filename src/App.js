import "./App.css"
import { Canvas} from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, useHelper } from '@react-three/drei';
import Plane from "./components/mainPlane/mainPlane";
import Chorus from "./components/chorus/chorus";
import { Physics } from "@react-three/cannon";
import { Player } from "./components/player/player";
import { useRef } from "react";
import { SpotLightHelper } from "three";
import { TV } from "./components/box/TV";
import * as THREE from "three"
import { FPV } from "./components/FPV/FPV";

const MainSettings = () => {
  const lightRef = useRef()
  
  
  return (
    <>
      <color args={[0, 0, 0]} attach="background" />
      <FPV/>
      <spotLight ref={lightRef}
      position={[10, 30, 10]}
          angle={0.5}
          color={0xF0F0F0}
          castShadow
          penumbra={0.2} />
      <ambientLight 
          intensity={0.4}/>
      <gridHelper args={[90, 90]} />
    </>
  )
}


function App() {
  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <MainSettings />
        <Physics>
          <Plane />
          <TV/>
          <Player />
        </Physics>
      </Canvas>
      <div className="cursor">+</div>
    </div>
  );
}

export default App;
