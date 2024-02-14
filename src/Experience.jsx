import {
    Box,
    Stage,
    Environment,
    OrbitControls,
    useHelper,
    Plane,
    Center,
} from "@react-three/drei";
import Model from "./KeyboardInstances";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from "three";

const Experience = (props) => {
    return (
        <>
            <OrbitControls />
            <Perf position="top-left" />
            <Environment preset="sunset" />
            <directionalLight position-y={20} intensity={2} color="white" />

            <Center>
                <Model />
            </Center>
        </>
    );
};

export default Experience;
