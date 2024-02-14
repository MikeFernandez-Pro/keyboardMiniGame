import {
    Environment,
    OrbitControls,
    Center,
} from "@react-three/drei";
import Model from "./KeyboardInstances";
import { Perf } from "r3f-perf";

const Experience = () => {
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
