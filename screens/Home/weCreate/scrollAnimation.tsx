// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { IconCloudDemo } from "./iconCloudComp";
// import { AboutUIpiratesData } from "../../../types";
// import ResponsiveAnimation from "./responsiveAnimation";

// const ScrollAnimation: React.FC = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );
//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <section className="scroll-section-outer">
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className="scroll-section-inner">
//           {[...Array(1)].map((item, index) => {
//             return (
//               <div className="scroll-section" key={index}>
//                 <IconCloudDemo />
//               </div>
//             );
//           })}

//           <div className="scroll-section w-[10%] -mr-[15%] max-md:-mr-[5%]">
//             <div className="flex flex-row items-center justify-items-start ml-24 max-md:ml-12">
//               <p className="text-8xl max-md:text-3xl font-semibold">
//                 We Create
//               </p>
//             </div>
//           </div>

//           <div className="scroll-section w-[100%]">
//             <ResponsiveAnimation />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollAnimation;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IconCloudDemo } from "./iconCloudComp";
import ResponsiveAnimation from "./responsiveAnimation";
import ImageZoomScroll from "./imageZoomScroll";

const ScrollAnimation: React.FC = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const responsiveAnimationRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    // ResponsiveAnimation ScrollTrigger
    const responsiveAnimationTrigger = ScrollTrigger.create({
      trigger: responsiveAnimationRef.current,
      start: "top center", // Adjust the start point as needed
      onEnter: () => {
        // Trigger animation for the ResponsiveAnimation component
        gsap.to(responsiveAnimationRef.current, { opacity: 1, duration: 1 });
      },
      onLeaveBack: () => {
        // Optional: Reset animation when scrolling back up
        gsap.to(responsiveAnimationRef.current, { opacity: 0, duration: 1 });
      },
    });

    return () => {
      pin.kill();
      responsiveAnimationTrigger.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section  flex flex-row items-center justify-center">
            <div className="bg-green-700 w-full">
              <ImageZoomScroll />
            </div>
            {/* <ResponsiveAnimation /> */}
          </div>

          {[...Array(1)].map((item, index) => {
            return (
              <div className="scroll-section" key={index}>
                <IconCloudDemo />
              </div>
            );
          })}

          <div className="scroll-section w-[10%] -mr-[15%] max-md:-mr-[5%]">
            <div className="flex flex-row items-center justify-items-start ml-24 max-md:ml-12">
              <p className="text-8xl max-md:text-3xl font-semibold">
                We Create
              </p>
            </div>
          </div>

          <div
            ref={responsiveAnimationRef}
            className="scroll-section w-[100%] opacity-0"
          >
            <ResponsiveAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;
