import "./App.css"
import { SpotLightHelper, CameraHelper } from "three";
import { Canvas, useFrame, useThree} from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei';
import Plane from "./components/mainPlane/mainPlane";
import Chorus from "./components/chorus/chorus";
import { Physics } from "@react-three/cannon";
import { Player } from "./components/player/player";
import { useEffect, useRef } from "react";
import { TV } from "./components/box/colloredCubes";
import { FPV } from "./components/FPV/FPV";
import { Joystick } from "./components/player/playerWithJoystick";





const MainSettings = () => {
  const lightRef = useRef()
  const camera = useRef()
  useHelper(camera, CameraHelper , 1, "pink")
  
  
  //  useFrame(() => {
  //    console.log(camera.current.position)
  //  })
  return (
    <>
      <color args={[0, 0, 0]} attach="background" />
      <spotLight ref={lightRef}
      position={[-50, 30, 10]}
          angle={0.7}
          color={0xF0F0F0}
          castShadow
          penumbra={0.2} />
      <ambientLight 
          intensity={0.4}/>
      <gridHelper args={[90, 90]} />
      <PerspectiveCamera makeDefault ref={camera}
       rotation={[ - Math.PI / 10, 0, 0]}
       position={[0, 31, 24]}
       fov={60} 
       far={3000}
       near={1}/>
    </>
  )
}


function App() {

  function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }

  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{position: [0, 10, 10]}} >
        <MainSettings />
        <Physics>
          <TV/>
        </Physics>
      </Canvas>
      <div className="cursor">+</div>
    </div>
  );
}

export default App;
