// import { useEffect, useRef } from "react";
// import { Avatar, AvatarGroup } from "@nextui-org/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Section2 = () => {
//   const centerRef = useRef(null);
//   const avatarGroupRef = useRef(null);

//   useEffect(() => {
//     // Hide the center element initially
//     gsap.set(centerRef.current, { autoAlpha: 0, y: 50 });

//     // Animate the center element
//     gsap.to(centerRef.current, {
//       autoAlpha: 1,
//       y: 0,
//       ease: "power3.out", // Smoother easing
//       scrollTrigger: {
//         trigger: avatarGroupRef.current,
//         start: "top center", // Adjust the start point as needed
//         end: "200px", // Adjust the end point as needed
//         scrub: 1, // Smooth scrubbing
//       },
//     });

//     // Scroll up the AvatarGroup
//     gsap.to(avatarGroupRef.current, {
//       y: -50, // Adjust the amount of scrolling as needed
//       ease: "power3.out", // Smoother easing
//       scrollTrigger: {
//         trigger: avatarGroupRef.current,
//         start: "top center", // Adjust the start point as needed
//         end: "200px", // Adjust the end point as needed
//         scrub: 1, // Smooth scrubbing
//       },
//     });
//   }, []);

//   return (
//     <div className="text-center">
//       <p className="text-8xl">EACH OF OUR 2</p>
//       <p className="text-8xl">DESIGNERS AND DEVELOPERS</p>
//       <p className="text-8xl text-white">WAS THE BEST AMONG</p>
//       <div className="flex flex-row items-center justify-center">
//         <span className="text-8xl" id="left">
//           SEVERAL
//         </span>
//         <span>
//           <AvatarGroup isBordered className="overline" ref={avatarGroupRef}>
//             <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
//             <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
//             <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
//             <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
//             <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
//             <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
//           </AvatarGroup>
//           <p className="text-8xl" id="center" ref={centerRef}>
//             THOUSAND
//           </p>
//         </span>
//         <span className="text-8xl" id="right">
//           OTHERS
//         </span>
//       </div>
//     </div>
//   );
// };

import { useEffect, useRef } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const centerRef = useRef<HTMLParagraphElement | null>(null);
  const avatarGroupRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Hide the center element initially
    gsap.set(centerRef.current, { autoAlpha: 0, y: 50 });

    // Create a timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: avatarGroupRef.current,
        start: "top center",
        end: "bottom 200px",
        scrub: 1,
      },
    });

    // Animate the center element
    tl.to(centerRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 5, // Increased duration for very slow animation
      ease: "power3.out",
    })
      // Scroll up the AvatarGroup
      .to(
        avatarGroupRef.current,
        {
          y: -50, // Adjust the amount of scrolling as needed
          duration: 5, // Increased duration for very slow animation
          ease: "power3.out",
        },
        "<"
      ) // "<" means to start this animation at the same time as the previous one ends
      // Animate images coming from the bottom to the top
      .add(() => {
        imageRefs.current.forEach((img, index) => {
          if (img) {
            gsap.fromTo(
              img,
              { y: 100, autoAlpha: 0 },
              {
                y: -400,
                autoAlpha: 1,
                duration: 10000, // Increased duration for very slow animation
                ease: "power3.out",
                scrollTrigger: {
                  trigger: avatarGroupRef.current,
                  start: "top center", // Start the animation at the center
                  end: "bottom 200px", // End the animation when the bottom of the trigger hits the top of the viewport
                  scrub: 1,
                },
              }
            );
          }
        });
      });
  }, []);

  return (
    <div className="text-center">
      <p className="text-8xl">EACH OF OUR 2</p>
      <p className="text-8xl">DESIGNERS AND DEVELOPERS</p>
      <p className="text-8xl text-white">WAS THE BEST AMONG</p>

      <div className="flex flex-row items-center justify-center">
        <span className="text-8xl" id="left">
          SEVERAL
        </span>
        <div className="flex flex-col items-center">
          <AvatarGroup isBordered className="overline" ref={avatarGroupRef}>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>
          <p className="text-8xl" id="center" ref={centerRef}>
            THOUSAND
          </p>
        </div>
        <span className="text-8xl" id="right">
          OTHERS
        </span>
      </div>
      <div className="flex justify-center mt-10">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={`https://i.pravatar.cc/150?img=${i + 10}`}
            alt={`Avatar ${i + 10}`}
            className="w-20 h-20 m-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
