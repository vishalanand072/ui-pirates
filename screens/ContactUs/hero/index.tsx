import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RetroGridDemo } from "./retroTest";

interface HeroProps {
  hero_heading: string;
  hero_subHeading: string;
}

const Hero = () => {
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
      <RetroGridDemo />
    </>
  );
};

export default Hero;
