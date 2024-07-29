// "use client";
// import * as THREE from "three";
// import { useRef, useState, useMemo, useEffect, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Billboard, Text, TrackballControls } from "@react-three/drei";
// import { generate } from "random-words";

// function Word({ children, ...props }) {
//   const color = new THREE.Color();
//   const fontProps = {
//     fontSize: 2.5,
//     letterSpacing: -0.05,
//     lineHeight: 1,
//     "material-toneMapped": false,
//   };
//   const ref = useRef();
//   const [hovered, setHovered] = useState(false);
//   const over = (e) => (e.stopPropagation(), setHovered(true));
//   const out = () => setHovered(false);

//   useEffect(() => {
//     if (hovered) document.body.style.cursor = "pointer";
//     return () => (document.body.style.cursor = "auto");
//   }, [hovered]);

//   useFrame(({ camera }) => {
//     if (ref.current) {
//       ref.current.material.color.lerp(
//         color.set(hovered ? "#fa2720" : "green"),
//         0.1
//       );
//     }
//     console.log("Frame updated");
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
//   const words = useMemo(() => {
//     const temp = [];
//     const spherical = new THREE.Spherical();
//     const phiSpan = Math.PI / (count + 1);
//     const thetaSpan = (Math.PI * 2) / count;
//     for (let i = 1; i < count + 1; i++)
//       for (let j = 0; j < count; j++) {
//         const position = new THREE.Vector3().setFromSpherical(
//           spherical.set(radius, phiSpan * i, thetaSpan * j)
//         );
//         const word = generate();
//         console.log(`Generated word: ${word} at position: `, position);
//         temp.push([position, word]);
//       }
//     return temp;
//   }, [count, radius]);
//   return words.map(([pos, word], index) => (
//     <Word key={index} position={pos} children={word} />
//   ));
// }

// export default function WordCloudComp() {
//   return (
//     <div className="bg-red-300 -ml-[25%] w-[100%]">
//       <Canvas
//         dpr={[1, 2]}
//         camera={{ position: [0, 0, 35], fov: 90 }}
//         //   className="bg-red-200 w-full h-full"
//         style={{ width: "100vw", height: "100vh" }}
//       >
//         <fog attach="fog" args={["#202025", 0, 80]} />
//         <Suspense fallback={null}>
//           <group rotation={[10, 10.5, 10]}>
//             <Cloud count={8} radius={20} />
//           </group>
//         </Suspense>
//         <TrackballControls />
//       </Canvas>
//     </div>
//   );
// }

"use client";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";
import { generate } from "random-words";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.material.color.lerp(
        color.set(hovered ? "#fa2720" : "green"),
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
        children={children}
      />
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 2); // Increased spacing
    const thetaSpan = (Math.PI * 2) / (count * 1.5); // Increased spacing
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const position = new THREE.Vector3().setFromSpherical(
          spherical.set(
            radius,
            phiSpan * i + Math.random() * 0.5, // Adding randomness
            thetaSpan * j + Math.random() * 0.5 // Adding randomness
          )
        );
        const word = generate();
        temp.push([position, word]);
      }
    }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function WordCloudComp() {
  return (
    <div className="bg-red-300 -ml-[25%] w-[100%]">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 35], fov: 90 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Suspense fallback={null}>
          <group rotation={[0, 0, 0]}>
            <Cloud count={8} radius={20} />
          </group>
        </Suspense>
        <TrackballControls />
      </Canvas>
    </div>
  );
}
