// components/VerticalTimeline.tsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VerticalTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !progressRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self: ScrollTrigger) => {
          const progress =
            (self.progress.toFixed(3) as unknown as number) * 100;
          if (progressRef.current) {
            progressRef.current.style.height = `${progress}%`;
          }
        },
      },
    });

    tl.from(".timeline-item", { opacity: 0, y: 50, stagger: 0.3 });
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-1 h-full">
        <div ref={progressRef} className="w-full h-0 bg-blue-500"></div>
      </div>
      <div ref={timelineRef} className="pt-10 space-y-10">
        <div className="timeline-item p-4 shadow-md rounded-lg">Item 1</div>
        <div className="timeline-item p-4 shadow-md rounded-lg">Item 2</div>
        <div className="timeline-item p-4 shadow-md rounded-lg">Item 3</div>
        <div className="timeline-item p-4 shadow-md rounded-lg">Item 4</div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
