// components/ScrollSnap.tsx
import React, { useEffect, useRef } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSnap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".snap-section");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current?.offsetWidth}`,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        overflowX: "hidden",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card
        className="snap-section"
        style={{
          scrollSnapAlign: "center",
          minWidth: "100%",
          background: "red",
        }}
      >
        <CardBody>
          <h1>Section 1</h1>
        </CardBody>
      </Card>
      <Card
        className="snap-section"
        style={{ scrollSnapAlign: "start", minWidth: "100%" }}
      >
        <CardBody>
          <h1>Section 2</h1>
        </CardBody>
      </Card>
      <Card
        className="snap-section"
        style={{ scrollSnapAlign: "start", minWidth: "100%" }}
      >
        <CardBody>
          <h1>Section 3</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default ScrollSnap;
