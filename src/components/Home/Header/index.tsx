import { Canvas } from "@react-three/fiber";
import Food from "../../3d/Food";
import FoodScene from "./FoodScene";

export default function Header() {
    return (
        <div className="h-full  pt-20 flex w-full px-spacing">
           <div className="w-2/4">
                <h1 className="leading-tight text-greenText text-6xl font-extrabold">
                   The Number #One<br />
                   Choice For Your Hunger 
                </h1>
                <p className="text-lg font-medium py-8">
                    The place you are looking for when your <br/>
                    hungery...or just want to cook something
                </p>
                <div>
                    <button className="w-36 h-16 rounded-3xl bg-greenText flex items-center justify-center text-center text-white font-normal text-sm">Start Cooking</button>
                </div>
            </div>
            <div className="w-2/4">
                <Canvas className="h-screen"shadows camera={{
                    fov:45,
                    near:0.1,
                    far:2000,
                }}>
                    <FoodScene />
                </Canvas>
            </div>
        </div>
    )
}