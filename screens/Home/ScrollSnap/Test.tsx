import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageScrollAnimation = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center", // Adjust as necessary
          end: "bottom center", // Adjust as necessary
          scrub: true,
        },
        width: "100%", // Desired final width
        height: "100%", // Desired final height
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <img
        ref={imageRef}
        src="https://cdn.prod.website-files.com/6515a6d5f30daec433d0abe2/65d9182014321d2d0301e521_footer-section-update.webp"
        alt="Image"
        className="w-full h-auto max-w-[300px] max-h-[300px]" // Initial size
      />
    </div>
  );
};

export default ImageScrollAnimation;
