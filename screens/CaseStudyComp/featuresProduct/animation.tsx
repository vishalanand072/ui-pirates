import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FeaturesProductCard from "./featureaProductCard";
const AnimationProduct = (props: any) => {
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
        translateX: "-400vw",
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
    <section className="scroll-section-outer mt-12">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {/* {[...Array(4)].map((item, index) => {
            return (
              <div
                className={
                  index == 0 ? "scroll-section ml-[2%]" : "scroll-section"
                }
                key={index}
              > */}
          <div className="scroll-section ml-20 max-md:ml-10">
            {props.card && <FeaturesProductCard card={props.card} />}
          </div>
          {/* );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default AnimationProduct;
