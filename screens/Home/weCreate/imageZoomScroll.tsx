import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageZoomAnimation = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center", // Start animation when the top of the image reaches the center of the viewport
        end: "+=500", // Animation duration
        scrub: true, // Smooth animation based on scroll
        pin: true, // Pin the image in place
      },
    });

    tl.fromTo(
      imageRef.current,
      { scale: 6.2 }, // Initial zoomed-in state
      { scale: 1 } // Zoom out as scrolling occurs
    );
  }, []);

  return (
    <div className="relative h-screen bg-red-500">
      <div className="flex justify-center items-center h-screen sticky left-px top-0">
        <img
          ref={imageRef}
          src="https://ui-pirates.vercel.app/_next/static/media/hero.fefc86c3.svg"
          alt="Zooming Image"
          className="w-full max-w-lg h-auto" // Adjust size and alignment
        />
      </div>
    </div>
  );
};

export default ImageZoomAnimation;
