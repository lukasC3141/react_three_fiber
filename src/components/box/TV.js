import { Cube2 } from "./boxesWithGravity"

export const TV = () => {
    return (
      <>
        {/* <Cube2 
          position={[-3, 1, 0]}
          mass={10}
          color={[Math.random(), Math.random(), Math.random()]}
          />
        <Cube2 
          position={[3, 1, 0]}
          mass={10}
          color={[Math.random(), Math.random(), Math.random()]}
          /> */}
        <Cube2 
          position={[0, 8, 0]}
          mass={1}
          size={[7, 6, 6]}
          color={0x282828}
          />
      </>
    )
  }