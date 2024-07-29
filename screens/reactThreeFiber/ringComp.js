"use client";
// https://discourse.threejs.org/t/threejs-gltf-meshes-rendering-position-issue/59997/1

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  MeshRefractionMaterial,
  useEnvironment,
  Environment,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  N8AO,
  ToneMapping,
} from "@react-three/postprocessing";
import { useControls } from "leva";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 models/3-stone.glb --transform
Files: models/3-stone.glb [1.33MB] > models/3-stone-transformed.glb [684.72KB] (48%)
*/

const suzi = import("@pmndrs/assets/models/suzi.glb");

function Ring({ frame, diamonds, env, ...props }) {
  const { nodes, materials } = useGLTF(suzi);
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.mesh_0.geometry}>
        <meshStandardMaterial
          color={frame}
          roughness={0.15}
          metalness={1}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.mesh_9.geometry}
        material={materials.WhiteMetal}
      />
      <instancedMesh
        castShadow
        args={[nodes.mesh_4.geometry, null, 65]}
        instanceMatrix={nodes.mesh_4.instanceMatrix}
      >
        <MeshRefractionMaterial
          color={diamonds}
          side={THREE.DoubleSide}
          envMap={env}
          aberrationStrength={0.02}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

export default function RingTextComp() {
  const { shadow, frame, diamonds } = useControls({
    shadow: "#000000",
    frame: "#fff0f0",
    diamonds: "#ffffff",
  });

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [-5, 5, 14], fov: 20 }}
        className="bg-red-300 bg-transparent"
      >
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr">
          {(env) => (
            <>
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <group position={[0, -0.25, 0]}>
                <Center
                  top
                  position={[0, -0.12, 0]}
                  rotation={[-0.1, 0, 0.085]}
                >
                  <Ring
                    frame={frame}
                    diamonds={diamonds}
                    env={env}
                    scale={0.1}
                  />
                </Center>
                <AccumulativeShadows
                  temporal
                  frames={100}
                  color={shadow}
                  opacity={1.05}
                >
                  <RandomizedLight radius={5} position={[10, 5, -5]} />
                </AccumulativeShadows>
              </group>
              <OrbitControls
                enablePan={false}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2.25}
              />
              <EffectComposer>
                <N8AO aoRadius={0.15} intensity={4} distanceFalloff={2} />
                <Bloom
                  luminanceThreshold={3.5}
                  intensity={0.85}
                  levels={9}
                  mipmapBlur
                />
                <ToneMapping />
              </EffectComposer>
            </>
          )}
        </Environment>
      </Canvas>
    </>
  );
}
