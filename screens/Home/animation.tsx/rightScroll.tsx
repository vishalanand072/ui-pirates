"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutCard from "../about-ui-pirate/aboutCard";

const data = [
  { title: "title 1" },
  { title: "title 2" },
  { title: "title 3" },
  { title: "title 4" },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

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
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-[10%] -mr-[15%] max-md:-mr-[5%]">
            <div className="flex flex-row items-center justify-items-start ml-24 max-md:ml-12">
              <p className="text-5xl">
                What about <br /> UI Pirates
              </p>
            </div>
          </div>
          {data.map(() => {
            return (
              <div className="scroll-section">
                <AboutCard />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
