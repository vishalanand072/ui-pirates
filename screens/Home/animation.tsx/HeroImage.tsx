"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);

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
    // .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.intro}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Hero Section Heading
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          This is a paragraph that describes the content of the hero section.
          Scroll down to see the effect on the video.
        </p>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          fuga itaque ut beatae alias excepturi adipisci at explicabo
          voluptates, consectetur maxime enim vitae id obcaecati ex, eius eos ad
          corrupti!
        </p>
        <p className="text-lg md:text-xl max-w-xl mx-auto test-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          fuga itaque ut beatae alias excepturi adipisci at explicabo
          voluptates, consectetur maxime enim vitae id obcaecati ex, eius eos ad
          corrupti!
        </p>
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
  );
}
