import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { RetroGridDemo } from "./retroTest";

const HeroComp = () => {
  const background = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: "top",
        end: "+=500px",
      },
    });

    timeline.fromTo(
      background.current,
      {
        width: "70%",
        display: "flex",
        justifyContent: "center",
        objectFit: "fill",
      },
      { width: "100%" }
    );
  }, []);

  //Spliting de heading (hero_heading) into two parts ==> this was too much work for a simple task please just have API return the heading in two parts

  return (
    <>
      <div className={styles.homeHeader}>
        <div className={styles.intro}>
          <div className="align-middle justify-center p-2 pt-40">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 max-md:mb-1 text-center tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 mb-8 text-center text-lg">
              Join our internship program and gain hands-on experience in
              product design and development.
            </p>

            <div className="flex justify-center items-center flex-row gap-4 w-full mt-8">
              <div className="button-container-1-rev animate__animated animate__fadeInUp-rev animate__slow animate__delay-4s">
                <span className="mas-rev">Join Now!</span>
                <button id="work" type="button" name="Hover">
                  Join Now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundImage} ref={background}>
          <video className={styles.video} autoPlay muted loop>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroComp;
