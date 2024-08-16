import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ImageGridProps {
  images: string[];
}

const data = [
  {
    image: "url",
    title: "Xperiti",
    rought: "/caseStudy/xperiti",
  },
  {
    image: "url",
    title: "Frytx",
    rought: "/caseStudy/frytx",
  },
  {
    image: "url",
    title: "Rings & I",
    rought: "/caseStudy/rings&i",
  },
  {
    image: "url",
    title: "Brahmastra",
    rought: "/caseStudy/brahmastra",
  },
  {
    image: "url",
    title: "StayPe",
    rought: "/caseStudy/stayPe",
  },
  {
    image: "url",
    title: "StayRealtor",
    rought: "/caseStudy/stayRealtor",
  },
];

const ImageGrid: React.FC = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    imageRefs.current.forEach((ref) => {
      gsap.set(ref, { opacity: 0.3 });

      ref?.addEventListener("mouseenter", () => {
        gsap.to(imageRefs.current, {
          opacity: 0.3,
          duration: 0.3,
          ease: "power1.inOut",
        });
        gsap.to(ref, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        });
      });

      ref?.addEventListener("mouseleave", () => {
        gsap.to(imageRefs.current, {
          opacity: 0.3,
          duration: 0.3,
          ease: "power1.inOut",
        });
      });
    });

    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        onEnter: () => setShowButton(true),
        onLeave: () => setShowButton(false),
        onEnterBack: () => setShowButton(true),
        onLeaveBack: () => setShowButton(false),
      });
    }
  }, []);

  return (
    <>
      <div className="relative" ref={containerRef}>
        {showButton && (
          <button
            className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded text-2xl font-bold"
            style={{ zIndex: 9 }}
          >
            Our Works
          </button>
        )}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 bg-black p-4">
          {data.map((item, index) => (
            // <Link href={item.rought}>
            <div
              key={index}
              className="relative overflow-hidden"
              ref={(el) => (imageRefs.current[index] = el as HTMLDivElement)}
            >
              <Link href={item.rought}>
                <img
                  src="https://cdn.prod.website-files.com/6515a6d5f30daec433d0abe2/65d9182014321d2d0301e521_footer-section-update.webp"
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            //
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
