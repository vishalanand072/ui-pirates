// import * as THREE from "three";
// import { useRef, useState, useMemo, useEffect, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Billboard, Text, TrackballControls } from "@react-three/drei";
// import { generate } from "random-words";

// function Word({ children, ...props }) {
//   const color = new THREE.Color();
//   const fontProps = {
//     font: "/Inter-Bold.woff",
//     fontSize: 2.5,
//     letterSpacing: -0.05,
//     lineHeight: 1,
//     "material-toneMapped": false,
//   };
//   const ref = useRef();
//   const [hovered, setHovered] = useState(false);
//   const over = (e) => (e.stopPropagation(), setHovered(true));
//   const out = () => setHovered(false);
//   // Change the mouse cursor on hover¨
//   useEffect(() => {
//     if (hovered) document.body.style.cursor = "pointer";
//     return () => (document.body.style.cursor = "auto");
//   }, [hovered]);
//   // Tie component to the render-loop
//   useFrame(({ camera }) => {
//     ref.current.material.color.lerp(
//       color.set(hovered ? "#fa2720" : "white"),
//       0.1
//     );
//   });
//   return (
//     <Billboard {...props}>
//       <Text
//         ref={ref}
//         onPointerOver={over}
//         onPointerOut={out}
//         onClick={() => console.log("clicked")}
//         {...fontProps}
//         children={children}
//       />
//     </Billboard>
//   );
// }

// function Cloud({ count = 4, radius = 20 }) {
//   // Create a count x count random words with spherical distribution
//   const words = useMemo(() => {
//     const temp = [];
//     const spherical = new THREE.Spherical();
//     const phiSpan = Math.PI / (count + 1);
//     const thetaSpan = (Math.PI * 2) / count;
//     for (let i = 1; i < count + 1; i++)
//       for (let j = 0; j < count; j++)
//         temp.push([
//           new THREE.Vector3().setFromSpherical(
//             spherical.set(radius, phiSpan * i, thetaSpan * j)
//           ),
//           generate(),
//         ]);
//     return temp;
//   }, [count, radius]);
//   return words.map(([pos, word], index) => (
//     <Word key={index} position={pos} children={word} />
//   ));
// }

// const WordCloudTest = () => {
//   return (
//     <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
//       <fog attach="fog" args={["#202025", 0, 80]} />
//       <Suspense fallback={null}>
//         <group rotation={[10, 10.5, 10]}>
//           <Cloud count={8} radius={20} />
//         </group>
//       </Suspense>
//       <TrackballControls />
//     </Canvas>
//   );
// };

// export default WordCloudTest;
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";
import { generate } from "random-words";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    // font: "/fonts/inter-bold.woff", // Ensure the path is correct
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  // Tie component to the render-loop
  useFrame(() => {
    if (ref.current) {
      ref.current.material.color.lerp(
        color.set(hovered ? "#fa2720" : "white"),
        0.1
      );
    }
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
        color="red" // Explicit color setting
      >
        {children}
      </Text>
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          generate(),
        ]);
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
}

const WordCloudTest = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
};

export default WordCloudTest;
