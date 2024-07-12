// components/ImageGrid.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const images =
        gridRef.current.querySelectorAll<HTMLDivElement>(".grid-item");

      gsap.fromTo(
        images,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-2 gap-4">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="grid-item h-64 bg-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-full h-full flex items-center justify-center">
            {index % 2 === 0 ? (
              <img
                src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={`https://www.w3schools.com/html/mov_bbb.mp4`}
                className="w-full h-full object-cover"
                controls
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
