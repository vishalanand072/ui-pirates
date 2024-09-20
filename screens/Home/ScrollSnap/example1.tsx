// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { ScrollBasedVelocityDemo } from "./startScreen";

// const HorizontalScroll: React.FC = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const pinWrap = document.querySelector<HTMLElement>(".bcontainer");

//     if (pinWrap) {
//       const pinWrapWidth = pinWrap.offsetWidth;
//       const horizontalScrollLength = pinWrapWidth - window.innerWidth;

//       gsap.to(".bcontainer", {
//         scrollTrigger: {
//           scrub: true,
//           trigger: "#sectionPin",
//           pin: true,
//           start: "top top",
//           end: pinWrapWidth,
//           snap: 0.33,
//         },
//         x: -horizontalScrollLength,
//         ease: "none",
//       });
//     }
//   }, []);

//   return (
//     <div className="scrollContainer" data-scroll-container>
//       <div className="a h-screen w-full bg-black">
//         <ScrollBasedVelocityDemo />
//       </div>
//       <div
//         id="sectionPin"
//         className="b h-screen bg-yellow-500 overflow-hidden flex"
//       >
//         <div className="bcontainer flex h-screen items-center">
//           <div className="b1  p-[0_5vw] h-screen w-screen bg-white"></div>
//           <div className="b2  p-[0_5vw] h-screen w-screen bg-black"></div>
//           <div className="b3  p-[0_5vw] h-screen w-screen bg-red-500"></div>
//           <div className="b4  p-[0_5vw] h-screen w-screen bg-brown-500"></div>
//         </div>
//       </div>
//       <div className="c h-screen w-full bg-green-500"></div>
//     </div>
//   );
// };

// export default HorizontalScroll;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollBasedVelocityDemo } from "./startScreen";
import { IconCloudDemo } from "../weCreate/iconCloudComp";
import ImageZoomAnimation from "../weCreate/imageZoomScroll";
const ScrollingAnimation: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal Scroll Animation
    const pinWrap = document.querySelector<HTMLElement>(".bcontainer");
    const pinWrapb3 = document.querySelector<HTMLElement>(".b3");

    if (pinWrap) {
      const pinWrapWidth = pinWrap.offsetWidth;
      const horizontalScrollLength = pinWrapWidth - window.innerWidth;

      gsap.to(".bcontainer", {
        scrollTrigger: {
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          start: "top top",
          end: pinWrapWidth,
          //   markers: true, // For debugging
        },
        x: -horizontalScrollLength,
        ease: "none",
      });
    }

    // Image Animation on Horizontal Scroll
    if (imageRef) {
      gsap.fromTo(
        pinWrapb3,
        {
          scaleX: 0.3, // Initial scale
          scaleY: 0.3, // Initial scale
          transformOrigin: "left center", // Scale from left
          x: 0, // Initial position
          y: "50%", // Center vertically
        },
        {
          scaleX: 1, // Final scale
          scaleY: 1, // Final scale
          x: 0, // Final position
          y: "0%", // Cover full height
          scrollTrigger: {
            trigger: "#imageAnim", // Use #imageAnim as the trigger
            start: "top center", // Start when the top of #imageAnim reaches the center of the viewport
            end: "bottom center", // End when the bottom of #imageAnim reaches the center of the viewport
            scrub: true,
            // markers: true, // For debugging
          },
        }
      );
    }
  }, []);

  return (
    <div className="scrollContainer" data-scroll-container>
      <div className="a h-screen w-full bg-black container mx-auto overflow-hidden">
        <ScrollBasedVelocityDemo />
      </div>
      <div id="sectionPin" className="b h-screen overflow-hidden flex">
        <div className="bcontainer flex h-screen items-center">
          <div className="b1 p-[0_5vw] h-screen w-screen bg-white text-center text-8xl max-md:text-4xl font-semibold flex flex-row justify-center items-center">
            We Create
          </div>
          <div className="b2 p-[0_5vw] h-screen w-screen text-8xl font-semibold flex flex-row justify-center items-center">
            <IconCloudDemo />
          </div>
          {/* <div
            className="b3 p-[0_5vw] h-screen w-screen bg-red-500 relative"
            id="imageAnim"
          >
            <ImageZoomAnimation />
          </div> */}
          {/* <div className="b4 p-[0_5vw] h-screen w-screen bg-green-500"></div> */}
        </div>
      </div>
      <div className="c h-screen w-full bg-black"></div>
    </div>
  );
};

export default ScrollingAnimation;
