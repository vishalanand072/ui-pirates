"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoContainerRef.current;
    const textElement = textContainerRef.current;

    if (videoElement && textElement) {
      gsap.fromTo(
        videoElement,
        { width: "70%" },
        {
          width: "100%",
          scrollTrigger: {
            trigger: textElement,
            start: "center center",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center mb-8">
      <div ref={textContainerRef} className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          fuga itaque ut beatae alias excepturi adipisci at explicabo
          voluptates, consectetur maxime enim vitae id obcaecati ex, eius eos ad
          corrupti!
        </p>
      </div>
      <div ref={videoContainerRef} className="transition-all duration-500">
        <video className="w-full h-full object-cover rounded-md" muted loop>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
