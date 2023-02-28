import { Cube2 } from "./boxesWithGravity"


export const Cubes = (props) => {

    // array som we dont have the same pos for more 
    const [positions] = useState(() => {
        const newPositions = []
        while (newPositions.length < props.count) {
          const position = new THREE.Vector3(
            Math.random() * (2 + 2) - 2,
            Math.random() * (80 - 1.5) + 1.5,
            Math.random() * (2 + 2) - 2
          )
          if (!newPositions.some((p) => p.distanceTo(position) < 1)) {
            newPositions.push(position)
          }
        }
        return newPositions
    })

    return (
        <>
          {positions.map((position, index) => (
            <Cube2 key={index}
             position={[position.x, position.y, position.z]}
             scale={1}
             mass={1}
             color={[Math.random(), Math.random(), Math.random()]} />
          ))}
        </>
    )

    // return (
    //     <>
    //     {(Array.from({ length: 200 }, (value, index) => value)).map((index) => {
    //         return (<Cube2 key={index} position={
    //             [Math.random() * (2 + 2) - 2,
    //              Math.random() * (30 - 1.5) + 1.5,
    //              Math.random() * (2 + 2) - 2]} 
    //              size={[1, 1, 1]}
    //              mass={1}
    //              color={[Math.random(), Math.random(), Math.random()]} />)
    //       })}
    //     </>
    // )
}