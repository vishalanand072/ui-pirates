"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedSection = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    timeline
      .to(leftTextRef.current, { x: "-10vw", opacity: 1, duration: 1 })
      .to(rightTextRef.current, { x: "10vw", opacity: 1, duration: 1 }, "-=1")
      .fromTo(
        avatarRef.current,
        { scale: 0 },
        { scale: 1, duration: 1 },
        "-=1"
      );

    gsap.fromTo(
      avatarRef,
      { width: "70%" },
      {
        width: "100%",
        scrollTrigger: {
          // trigger: leftTextRef,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="scroll-trigger h-screen flex flex-col justify-center items-center max-w-screen">
      <h1 className="text-4xl mb-8">Static Text Here</h1>
      <div className="relative flex items-center justify-center">
        <div ref={leftTextRef} className="text-2xl">
          Left Word
        </div>
        <div
          ref={avatarRef}
          className="mx-4 w-16 h-16 rounded-full bg-gray-300"
        ></div>
        <div ref={rightTextRef} className="text-2xl">
          Right Word
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
