import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import Experience from "./Experience";

function App() {
    return (
        <>
            <Canvas
                shadows
                performance={{ min: 0.5 }}
                camera={{
                    position: [0, 30, 30],
                    fov: 40,
                    near: 0.5,  
                    far: 100,
                }}
                gl={{
                    powerPreference: "high-performance",
                    antialias: true,
                    toneMapping: THREE.LinearToneMapping,
                }}
            >
                <EffectComposer disableNormalPass multisampling={0}>
                    <Bloom
                        mipmapBlur
                        luminanceThreshold={1}
                        luminanceSmoothing={1}
                        intensity={2}
                    />
                </EffectComposer>
                <Experience />
            </Canvas>
        </>
    );
}

export default App;
