import { PresentationControls } from "@react-three/drei";
import Food from "../../../3d/Food";

export default function FoodScene() {
    return (
        <>
            <ambientLight />
            <group scale={0.6} position={[0.5,-1.3,0]} rotation={[0,-0.3,0]}>
            <PresentationControls polar={[-0.3,0.3]} 
  azimuth={[-0.3,0.3]} >
                <Food />
                </PresentationControls>
            </group>
        </>
    )
}