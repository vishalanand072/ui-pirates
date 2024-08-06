"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestDivAnim = () => {
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollableContainer = document.querySelector(
      ".scrollable-content"
    ) as HTMLElement;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          document.body.classList.add("no-scroll");
          if (scrollableContainer)
            (scrollableContainer as HTMLElement).style.position = "absolute"; // Type casting
        },
        onLeave: () => {
          document.body.classList.remove("no-scroll");
          if (scrollableContainer)
            (scrollableContainer as HTMLElement).style.position = ""; // Type casting
        },
        onEnterBack: () => {
          document.body.classList.add("no-scroll");
          if (scrollableContainer)
            (scrollableContainer as HTMLElement).style.position = "absolute"; // Type casting
        },
        onLeaveBack: () => {
          document.body.classList.remove("no-scroll");
          if (scrollableContainer)
            (scrollableContainer as HTMLElement).style.position = ""; // Type casting
        },
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
      avatarRef.current,
      { width: "70%" },
      {
        width: "100%",
        scrollTrigger: {
          trigger: ".scroll-trigger",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      }
    );

    // Cleanup function
    return () => {
      document.body.classList.remove("no-scroll");
      if (scrollableContainer)
        (scrollableContainer as HTMLElement).style.position = ""; // Type casting
    };
  }, []);

  return (
    <div className="scrollable-content h-screen flex flex-col justify-center items-center max-w-screen bg-[#E4D4F4]">
      <div className="scroll-trigger">
        <h1 className="text-4xl mb-8">Static Text Here</h1>
        <h1 className="text-4xl mb-8">Static Text Here</h1>
        <h1 className="text-4xl mb-8">Static Text Here</h1>

        <div className="relative flex items-center justify-center">
          <span ref={leftTextRef} className="text-2xl">
            Left Word
          </span>
          <div
            ref={avatarRef}
            className="mx-4 w-16 h-16 rounded-full bg-gray-300"
          ></div>
          <span ref={rightTextRef} className="text-2xl">
            Right Word
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestDivAnim;
