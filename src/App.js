import "./App.css"
import { Canvas} from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Plane from "./components/mainPlane/mainPlane";
import Chorus from "./components/chorus/chorus";
import { Physics } from "@react-three/cannon";
import { Cubes } from "./components/box/boxesWithGravity";

const MainSettings = () => {
  return (
    <>
      <color args={[0, 0, 0]} attach="background" />
      <OrbitControls/>
      <PerspectiveCamera makeDefault fov={50} position={[4, 10, 30]} />
      <spotLight position={[5, 5, 0]}
          angle={0.7}
          color={[1, 0.25, 0.7]}
          castShadow
          penumbra={0.2} />
      <spotLight position={[-5, 5, 0]}
          angle={0.7}
          color={[0.14, 0.5, 1]}
          castShadow 
          penumbra={0.2}
          intensity={1} />
      <ambientLight 
          intensity={0.1}/>
      {/* <CubeCamera resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <Car />
            </>
          )}
      </CubeCamera> */}
      
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
          <Cubes count={30}/>
        </Physics>
        <Chorus />
      </Canvas>
    </div>
  );
}

export default App;
