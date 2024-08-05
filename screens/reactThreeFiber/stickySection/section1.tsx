import { useEffect, useRef } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const avatarGroupRef = useRef(null);

  useEffect(() => {
    if (avatarGroupRef.current) {
      gsap.fromTo(
        avatarGroupRef.current,
        { width: "0px", opacity: 0 },
        {
          width: "auto",
          opacity: 1,
          duration: 40000, // Increase duration to slow down the animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: avatarGroupRef.current,
            start: "top center",
            end: "200px",
            scrub: 1, // Adjust scrub to control animation speed with scroll
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="text-center">
        <p className="text-8xl">EACH OF OUR 1</p>
        <p className="text-8xl">DESIGNERS AND DEVELOPERS</p>
        <p className="text-8xl text-white">WAS THE BEST AMONG</p>
        <div className="flex flex-row items-center justify-center">
          <span className="text-8xl" id="left">
            SEVERAL
          </span>
          <span ref={avatarGroupRef}>
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
      </div>
    </>
  );
};

export default Section1;
