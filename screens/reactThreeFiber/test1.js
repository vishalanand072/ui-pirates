import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Text,
  Environment,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  useGLTF,
  useTexture,
  OrbitControls,
} from "@react-three/drei";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";
import { suspend } from "suspend-react";

const suzi = import("@pmndrs/assets/models/suzi.glb");
const bridge = import("@pmndrs/assets/hdri/bridge.exr");
const inter = import("@pmndrs/assets/fonts/inter_regular.woff");
const matcap = import("@pmndrs/assets/matcaps/0228.webp");
const normal = import("@pmndrs/assets/normals/0004.webp");

export default function Test1() {
  return (
    <Canvas
      gl={{ antialias: false }}
      shadows
      className="w-screen bg-red-500"
      style={{ width: "100vw", height: "100vh" }}
    >
      <group position={[0, -2, 0]}>
        <Center top position={[0, 0, -3]}>
          <Model scale={3} />
        </Center>
        <AccumulativeShadows frames={100} temporal color="indianred">
          <RandomizedLight radius={8} position={[2, 6, -5]} />
        </AccumulativeShadows>
        <Label position={[-2, 3, 0]}>{`CSS\nis\nawesome`}</Label>
        <Center top position={[-1, 0, 0.75]}>
          <Sphere />
        </Center>
      </group>
      <Env />
      <OrbitControls />
      <EffectComposer disableNormalPass>
        <TiltShift2 blur={0.4} />
      </EffectComposer>
    </Canvas>
  );
}

function Env() {
  return <Environment files={suspend(bridge).default} background blur={1} />;
}

function Model(props) {
  const { nodes } = useGLTF(suspend(suzi).default);
  const cap = useTexture(suspend(matcap).default);
  return (
    <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} {...props}>
      <meshMatcapMaterial matcap={cap} />
    </mesh>
  );
}

function Sphere(props) {
  const [cap, nor] = useTexture([
    suspend(matcap).default,
    suspend(normal).default,
  ]);
  nor.wrapS = nor.wrapT = THREE.RepeatWrapping;
  return (
    <mesh castShadow receiveShadow {...props}>
      <sphereGeometry args={[0.85, 32]} />
      <meshMatcapMaterial matcap={cap} normalMap={nor} />
    </mesh>
  );
}

function Label({ children, ...props }) {
  return (
    <Text
      anchorX="left"
      {...props}
      font={suspend(inter).default}
      letterSpacing={-0.025}
      lineHeight={0.9}
      color="black"
    >
      {children}
      <mesh
        material-color="black"
        scale={2.5}
        position={[1.35, 0, 0]}
        rotation={[0, 0, Math.PI / 4]}
      >
        <ringGeometry args={[0.95, 1, 4]} />
      </mesh>
    </Text>
  );
}
