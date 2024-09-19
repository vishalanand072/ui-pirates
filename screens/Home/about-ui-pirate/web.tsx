import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutCard from "./aboutCard";

const data = [
  {
    title: "We Excel with Minimal Client Involvement",
    subTitle:
      "Our efficient workflows ensure minimal client interaction, allowing you to focus on your business while we deliver outstanding results.",
    cardColor: "#F6F4F4",
  },
  {
    title: "We Craft Unique Digital Experiences",
    subTitle:
      "We bring innovative ideas to life through meticulous design processes, crafting unique and engaging digital experiences.",
    cardColor: "#EFFBF9",
  },
  {
    title: "Our Designs Are Backed by Research",
    subTitle:
      "Our team conducts comprehensive research to ensure our designs are strategically sound and user-centric.",
    cardColor: "#F2EDF4",
  },
  {
    title: "We Bring Together a Diverse Team",
    subTitle:
      "Our diverse team enhances creativity, tackling a wide range of projects with unique perspectives and innovative solutions.",
    cardColor: "#EEEAE6",
  },
];

function Web() {
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
        translateX: "-360vw",
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

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section w-[10%] -mr-[15%] max-md:-mr-[10%]">
              <div className="flex flex-row items-center justify-items-start ml-24 max-md:ml-12">
                <p className="text-5xl max-md:text-3xl font-semibold">
                  Why Hire <br /> UI Pirates
                </p>
              </div>
            </div>
            {data.map((item, index) => {
              return (
                <div className="scroll-section" key={index}>
                  <AboutCard
                    title={item.title}
                    subTitle={item.subTitle}
                    cardColor={item.cardColor}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Web;
