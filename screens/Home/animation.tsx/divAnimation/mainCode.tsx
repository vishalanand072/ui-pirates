// // pages/index.js
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "tailwindcss/tailwind.css";

// const MainCode = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animations for first container's text and avatar
//     gsap.fromTo(
//       "#first-container .left-text",
//       { x: -100, opacity: 1 },
//       {
//         scrollTrigger: {
//           trigger: "#first-container",
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         },
//         x: 0,
//         opacity: 1,
//       }
//     );

//     gsap.fromTo(
//       "#first-container .right-text",
//       { x: 100, opacity: 1 },
//       {
//         scrollTrigger: {
//           trigger: "#first-container",
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         },
//         x: 0,
//         opacity: 1,
//       }
//     );

//     gsap.fromTo(
//       "#first-container .avatar",
//       { opacity: 1 },
//       {
//         scrollTrigger: {
//           trigger: "#first-container",
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         },
//         opacity: 1,
//       }
//     );

//     // Pin the first container in place
//     ScrollTrigger.create({
//       trigger: "#first-container",
//       start: "top top",
//       endTrigger: "#second-container",
//       end: "bottom top",
//       pin: true,
//       pinSpacing: false,
//     });

//     // Reveal the second container after scrolling past the first container
//     gsap.fromTo(
//       "#second-container",
//       { opacity: 0 },
//       {
//         scrollTrigger: {
//           trigger: "#second-container",
//           start: "top bottom", // Starts the animation when the bottom of the viewport reaches the top of the second container
//           toggleActions: "play none none none",
//         },
//         opacity: 1,
//         duration: 1,
//       }
//     );
//   }, []);

//   return (
//     <div className="main-container flex flex-col items-center">
//       <div
//         id="first-container"
//         className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-gray-200"
//       >
//         <div className="flex items-center">
//           <span className="left-text mr-2">Left Text</span>
//           <span className="avatar mx-2">👤</span>
//           <span className="right-text ml-2">Right Text</span>
//         </div>
//       </div>
//       <div
//         id="second-container"
//         className="w-full h-screen flex items-center justify-center bg-gray-300"
//       >
//         <p>Second Container</p>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const MainCode: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initially hide the second and third components
    gsap.set(secondRef.current, { autoAlpha: 0, opacity: 0, display: "none" });
    gsap.set(thirdRef.current, { autoAlpha: 0 });

    // Reveal the second component when the first component is scrolled through
    ScrollTrigger.create({
      trigger: secondRef.current,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(secondRef.current, {
          autoAlpha: 1,
          display: "flex",
          duration: 1,
        });
      },
    });

    // Reveal the third component when the second component is scrolled through
    ScrollTrigger.create({
      trigger: thirdRef.current,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(thirdRef.current, { autoAlpha: 1 });
      },
    });

    // Add scroll animation to the container
    gsap.to(scrollContainerRef.current, {
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top top",
        end: "+=3000", // Adjust the end value to control the duration of the scroll animation
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      y: () =>
        -(
          scrollContainerRef.current!.scrollHeight -
          scrollContainerRef.current!.clientHeight
        ),
      ease: "none",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={scrollContainerRef} className="h-screen overflow-scroll">
        {/* First Component */}
        <div className="h-screen flex items-center justify-center bg-blue-500">
          <h1 className="text-white text-4xl">First Component</h1>
        </div>

        {/* Second Component */}
        <div
          ref={secondRef}
          className="h-screen flex items-center justify-center bg-green-500"
        >
          <h1 className="text-white text-4xl">Second Component</h1>
        </div>

        {/* Third Component */}
        <div
          ref={thirdRef}
          className="h-screen flex items-center justify-center bg-red-500"
        >
          <h1 className="text-white text-4xl">Third Component</h1>
        </div>
      </div>
    </div>
  );
};

export default MainCode;
