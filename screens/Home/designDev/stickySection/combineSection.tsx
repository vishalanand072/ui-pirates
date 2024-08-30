import { useEffect, useRef } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CombinedSections: React.FC = () => {
  const avatarGroupRef1 = useRef<HTMLDivElement | null>(null);
  const avatarGroupRef2 = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLParagraphElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // useEffect(() => {
  //   // Ensure initial visibility
  //   gsap.set("#firstSection", { autoAlpha: 1 });
  //   gsap.set("#secondSection", { autoAlpha: 0 });

  //   // First animation
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: avatarGroupRef1.current,
  //         start: "top center",
  //         end: "bottom 200px",
  //         scrub: 1,
  //         onEnter: () => {
  //           gsap.to("#firstSection", { autoAlpha: 1 });
  //           gsap.to("#secondSection", { autoAlpha: 0 });
  //         },
  //         onLeave: () => {
  //           gsap.to("#firstSection", { autoAlpha: 0 });
  //         },
  //         onEnterBack: () => {
  //           gsap.to("#firstSection", { autoAlpha: 1 });
  //           gsap.to("#secondSection", { autoAlpha: 0 });
  //         },
  //         onLeaveBack: () => {
  //           gsap.to("#firstSection", { autoAlpha: 0 });
  //         },
  //       },
  //     })
  //     .fromTo(
  //       avatarGroupRef1.current,
  //       { width: "0px", opacity: 0 },
  //       {
  //         width: "auto",
  //         opacity: 1,
  //         duration: 5,
  //         ease: "power2.out",
  //       }
  //     );

  //   // Second animation
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: avatarGroupRef2.current,
  //         start: "top center",
  //         end: "bottom 200px",
  //         scrub: 1,
  //         onEnter: () => {
  //           gsap.to("#secondSection", { autoAlpha: 1 });
  //           gsap.to("#firstSection", { autoAlpha: 0 });
  //         },
  //         onLeaveBack: () => {
  //           gsap.to("#secondSection", { autoAlpha: 0 });
  //         },
  //       },
  //     })
  //     .set(centerRef.current, { autoAlpha: 0, y: 50 })
  //     .to(centerRef.current, {
  //       autoAlpha: 1,
  //       y: 0,
  //       duration: 5,
  //       ease: "power3.out",
  //     })
  //     .to(
  //       avatarGroupRef2.current,
  //       {
  //         y: -50,
  //         duration: 5,
  //         ease: "power3.out",
  //       },
  //       "<"
  //     )
  //     .add(() => {
  //       imageRefs.current.forEach((img, index) => {
  //         if (img) {
  //           gsap.fromTo(
  //             img,
  //             { y: 100, autoAlpha: 0 },
  //             {
  //               y: -400,
  //               autoAlpha: 1,
  //               duration: 10,
  //               ease: "power3.out",
  //               scrollTrigger: {
  //                 trigger: avatarGroupRef2.current,
  //                 start: "top center",
  //                 end: "bottom 200px",
  //                 scrub: 1,
  //               },
  //             }
  //           );
  //         }
  //       });
  //     });
  // }, []);

  useEffect(() => {
    // Ensure initial visibility
    gsap.set("#firstSection", { autoAlpha: 1 });
    gsap.set("#secondSection", { autoAlpha: 0 });

    // First animation with increased scroll timing and smoother animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: avatarGroupRef1.current,
          start: "top center",
          end: "bottom 200px",
          scrub: 2, // Increased scrub to slow down the animation
          onEnter: () => {
            gsap.to("#firstSection", { autoAlpha: 1 });
            gsap.to("#secondSection", { autoAlpha: 0 });
          },
          onLeave: () => {
            gsap.to("#firstSection", { autoAlpha: 0 });
          },
          onEnterBack: () => {
            gsap.to("#firstSection", { autoAlpha: 1 });
            gsap.to("#secondSection", { autoAlpha: 0 });
          },
          onLeaveBack: () => {
            gsap.to("#firstSection", { autoAlpha: 0 });
          },
        },
      })
      .fromTo(
        avatarGroupRef1.current,
        { width: "0px", opacity: 0 },
        {
          width: "auto",
          opacity: 1,
          duration: 70, // Increased duration for a slower animation
          ease: "power3.out", // Smoother easing function
        }
      );

    // Second animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: avatarGroupRef2.current,
          start: "top center",
          end: "bottom 200px",
          scrub: 1,
          onEnter: () => {
            gsap.to("#secondSection", { autoAlpha: 1 });
            gsap.to("#firstSection", { autoAlpha: 0 });
          },
          onLeaveBack: () => {
            gsap.to("#secondSection", { autoAlpha: 0 });
          },
        },
      })
      .set(centerRef.current, { autoAlpha: 0, y: 50 })
      .to(centerRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 5,
        ease: "power3.out",
      })
      .to(
        avatarGroupRef2.current,
        {
          y: -50,
          duration: 5,
          ease: "power3.out",
        },
        "<"
      )
      .add(() => {
        imageRefs.current.forEach((img, index) => {
          if (img) {
            gsap.fromTo(
              img,
              { y: 100, autoAlpha: 0 },
              {
                y: -400,
                autoAlpha: 1,
                duration: 10,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: avatarGroupRef2.current,
                  start: "top center",
                  end: "bottom 200px",
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
      <p className="text-8xl">EACH OF OUR</p>
      <p className="text-8xl">DESIGNERS AND DEVELOPERS</p>
      <p className="text-8xl text-white">WAS THE BEST AMONG</p>

      <div
        className="flex flex-row items-center justify-center"
        id="firstSection"
      >
        <span className="text-8xl" id="left">
          SEVERAL
        </span>
        <span ref={avatarGroupRef1}>
          <AvatarGroup isBordered className="overline">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>
        </span>
        <span className="text-8xl" id="right">
          OTHERS
        </span>
      </div>

      <div
        className="flex flex-row items-center justify-center mt-20"
        id="secondSection"
      >
        <span className="text-8xl" id="left">
          SEVERAL
        </span>
        <div className="flex flex-col items-center">
          <AvatarGroup isBordered className="overline" ref={avatarGroupRef2}>
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

export default CombinedSections;
