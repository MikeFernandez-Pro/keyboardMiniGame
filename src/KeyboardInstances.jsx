import React, {
    useRef,
    useMemo,
    useContext,
    createContext,
    useEffect,
    useCallback,
} from "react";
import { useGLTF, Merged, Instance, Instances } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

const DEFAULT_KEY = new THREE.Color(0xffffff);
const ACTIVE_KEY = new THREE.Color(5, 5, 15);
const WRONG_KEY = new THREE.Color(20, 1, 1);
const CORRECT_KEY = new THREE.Color(1, 10, 1);

const generateARandomKeyStroke = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

let randomKeyStroke = generateARandomKeyStroke();

export default function Model() {
    const keyboardRef = useRef();

    const { defaultColor } = useControls({ defaultColor: "#5b6e89" });

    const { nodes } = useGLTF("/keyboardInstances.glb");

    const keyDownEventHandler = useCallback((e) => {
        keyboardRef.current
            .getObjectByName(e.key)
            .color.set(e.key === randomKeyStroke ? CORRECT_KEY : WRONG_KEY);
    }, []);

    const keyUpEventHandler = useCallback((e) => {
        // Reset the color of the key
        keyboardRef.current.getObjectByName(e.key).color.set(DEFAULT_KEY);

        // Generate a new random key stroke on correct key press
        if (e.key === randomKeyStroke) {
            randomKeyStroke = generateARandomKeyStroke();
            keyboardRef.current.getObjectByName(randomKeyStroke).color.set(ACTIVE_KEY);
        }
    }, []);

    useEffect(() => {
        // Activate the first random key stroke
        keyboardRef.current.getObjectByName(randomKeyStroke).color.set(ACTIVE_KEY);

        // Event listeners
        window.addEventListener("keydown", keyDownEventHandler);
        window.addEventListener("keyup", keyUpEventHandler);

        // Clean up
        return () => {
            window.removeEventListener("keydown", keyDownEventHandler);
            window.removeEventListener("keyup", keyUpEventHandler);
        };
    }, [defaultColor]);

    return (
        <Instances ref={keyboardRef} geometry={nodes.Cube.geometry} scale={0.5} position-x={7}>
            <meshStandardMaterial color={defaultColor} roughness={0.5} toneMapped={false} />
            <Instance position={[0, 0, 0]} name="<" />
            <Instance position={[3.1, 0, 0]} name="w" />
            <Instance position={[6.2, 0, 0]} name="x" />
            <Instance position={[9.3, 0, 0]} name="c" />
            <Instance position={[12.4, 0, 0]} name="v" />
            <Instance position={[15.5, 0, 0]} name="b" />
            <Instance position={[18.6, 0, 0]} name="n" />
            <Instance position={[21.7, 0, 0]} name="," />
            <Instance position={[24.8, 0, 0]} name=";" />
            <Instance position={[27.9, 0, 0]} name=":" />
            <Instance position={[31, 0, 0]} name="!" />
            <Instance position={[-1.5, 0, -3.1]} name="q" />
            <Instance position={[1.6, 0, -3.1]} name="s" />
            <Instance position={[4.7, 0, -3.1]} name="d" />
            <Instance position={[7.8, 0, -3.1]} name="f" />
            <Instance position={[10.9, 0, -3.1]} name="g" />
            <Instance position={[14, 0, -3.1]} name="h" />
            <Instance position={[17.1, 0, -3.1]} name="j" />
            <Instance position={[20.2, 0, -3.1]} name="k" />
            <Instance position={[23.3, 0, -3.1]} name="l" />
            <Instance position={[26.4, 0, -3.1]} name="m" />
            <Instance position={[29.5, 0, -3.1]} name="ù" />
            <Instance position={[32.6, 0, -3.1]} name="*" />
            <Instance position={[-2.5, 0, -6.2]} name="a" />
            <Instance position={[0.6, 0, -6.2]} name="z" />
            <Instance position={[3.7, 0, -6.2]} name="e" />
            <Instance position={[6.8, 0, -6.2]} name="r" />
            <Instance position={[9.9, 0, -6.2]} name="t" />
            <Instance position={[13, 0, -6.2]} name="y" />
            <Instance position={[16.1, 0, -6.2]} name="u" />
            <Instance position={[19.2, 0, -6.2]} name="i" />
            <Instance position={[22.3, 0, -6.2]} name="o" />
            <Instance position={[25.4, 0, -6.2]} name="p" />
            <Instance position={[28.5, 0, -6.2]} name="Dead" />
            <Instance position={[31.6, 0, -6.2]} name="$" />
            <Instance position={[-4, 0, -9.3]} name="²" />
            <Instance position={[-0.9, 0, -9.3]} name="&" />
            <Instance position={[2.2, 0, -9.3]} name="é" />
            <Instance position={[5.3, 0, -9.3]} name='"' />
            <Instance position={[8.4, 0, -9.3]} name="'" />
            <Instance position={[11.5, 0, -9.3]} name="'" />
            <Instance position={[14.6, 0, -9.3]} name="(" />
            <Instance position={[17.7, 0, -9.3]} name="-" />
            <Instance position={[20.8, 0, -9.3]} name="è" />
            <Instance position={[23.9, 0, -9.3]} name="_" />
            <Instance position={[27, 0, -9.3]} name="ç" />
            <Instance position={[30.1, 0, -9.3]} name="à" />
        </Instances>
    );
}

useGLTF.preload("/keyboardInstances.glb");
