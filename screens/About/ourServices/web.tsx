import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutCard from "./aboutCard";

const data = [
  {
    title: "Product Design",
    subTitle:
      "Product design is the process of creating visually appealing, functional, and user-centric products through research, concept development, prototyping, and visual design.",
    cardColor: "#F6F4F4",
  },
  {
    title: "UI Development",
    subTitle:
      "UI development transforms design mockups into interactive, functional interfaces, ensuring responsiveness and user-friendliness.",
    cardColor: "#EFFBF9",
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

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section w-[10%] -mr-[15%] max-md:-mr-[5%]">
              <div className="flex flex-row items-center justify-items-start ml-24 max-md:ml-12">
                <p className="text-4xl max-md:text-3xl font-semibold">
                  Our <br /> Services
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
