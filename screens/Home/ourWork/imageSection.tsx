import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

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
    title: "SimpleO",
    rought: "/caseStudy/simpleO",
  },
  {
    image: "url",
    title: "ION",
    rought: "/caseStudy/Ion",
  },
  {
    image: "url",
    title: "Brahmastra",
    rought: "/caseStudy/brahmastra",
  },
  {
    image: "url",
    title: "Rings & I",
    rought: "/caseStudy/rings&i",
  },
  {
    image: "url",
    title: "Stay Realtor",
    rought: "/caseStudy/stayRealtor",
  },
  {
    image: "url",
    title: "Olso",
    rought: "/caseStudy/olso",
  },
  {
    image: "url",
    title: "StayPe",
    rought: "/caseStudy/stayPe",
  },

  {
    image: "url",
    title: "cloud Shift",
    rought: "/caseStudy/cloudShift",
  },
  {
    image: "url",
    title: "Test Dynamiz",
    rought: "/caseStudy/testDynamiz",
  },
  {
    image: "url",
    title: "Infinity Aqua Sol",
    rought: "/caseStudy/infinityAquaSol",
  },
];

const ImageGrid = () => {
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
            className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-white text-black  px-12 py-3 rounded-3xl max-md:px-8 max-md:py-1 max-md:rounded-2xl"
            style={{ zIndex: 9 }}
          >
            <p className="text-xl font-semibold max-md:text-lg">Our work in</p>
            <p className="text-4xl  font-bold text-primary max-md:text-2xl">
              SAAS
            </p>
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
                <div>
                  <div className="relative h-[400px]">
                    <img
                      src="https://cdn.prod.website-files.com/6515a6d5f30daec433d0abe2/65d9182014321d2d0301e521_footer-section-update.webp"
                      alt={`Image ${index}`}
                      className="w-full h-[400px] object-cover bg-transparent absolute top-0 left-0"
                    />

                    <span className="relative h-[400px]">
                      <span className="bg-white rounded-xl px-6 py-3 flex flex-col w-[250px] left-4 ml-10 top-10 max-md:ml-0 max-md:left-0">
                        <p className="text-lg max-sm:text-base">
                          SaaS Redesign for
                        </p>
                        <p
                          className="text-primary text-4xl font-bold max-md:text-2xl"
                          style={{ zIndex: 99999999 }}
                        >
                          {item.title}
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
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
