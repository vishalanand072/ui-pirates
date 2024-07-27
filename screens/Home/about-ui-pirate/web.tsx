import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutCard from "./aboutCard";
import { AboutUIpiratesData } from "../../../types";

interface WebProps {
  about: AboutUIpiratesData[];
}

const Web: React.FC<WebProps> = ({ about }) => {
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
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer hidden md:block">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-[10%] -mr-[15%] max-md:-mr-[5%]">
            <div className="flex flex-row items-center justify-items-start ml-24 max-md:ml-12">
              <p className="text-5xl max-md:text-3xl">
                What about <br /> UI Pirates
              </p>
            </div>
          </div>
          {about.map((item, index) => {
            return (
              <div className="scroll-section" key={index}>
                <AboutCard
                  title={item.title}
                  subTitle={item.subTitle[0]?.subTitle}
                  cardColor="#EDEEE6"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Web;
