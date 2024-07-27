// import React, { useLayoutEffect, useRef } from "react";
// import styles from "./style.module.css";
// import { Button } from "@nextui-org/button";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// interface HeroProps {
//   hero_heading: string;
//   hero_subHeading: string;
// }

// const Hero: React.FC<HeroProps> = ({ hero_heading, hero_subHeading }) => {
//   const background = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: document.documentElement,
//         scrub: 1,
//         start: "top",
//         end: "+=500px",
//       },
//     });

//     timeline.fromTo(
//       background.current,
//       {
//         width: "70%",
//         display: "flex",
//         justifyContent: "center",
//         objectFit: "fill",
//       },
//       { width: "100%" }
//     );
//   }, []);

//   return (
//     <div className={styles.homeHeader}>
//       <div className={styles.intro}>
//         <div className="align-middle justify-center p-2">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
//             {hero_heading || "Where Creativity"}
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//             meets functionality
//           </h1>
//           <p className="mb-4 text-center">
//             {hero_subHeading ||
//               "We design and develop stunning digital experiences."}
//           </p>
//           <div className="p-2 flex align-middle justify-center gap-2">
//             <Button
//               className="text-sm font-bold"
//               radius="sm"
//               size="md"
//               color="primary"
//             >
//               Let's Talk!
//             </Button>
//             <Button
//               className="text-sm font-bold"
//               radius="sm"
//               size="md"
//               variant="flat"
//             >
//               Explore Our Work
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className={styles.backgroundImage} ref={background}>
//         <video className={styles.video} autoPlay muted loop>
//           <source
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default Hero;
