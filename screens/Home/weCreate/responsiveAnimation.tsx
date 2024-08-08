import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ResponsiveAnimation: React.FC = () => {
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
        width: "50%",
        objectFit: "fill",
      },
      { width: "100%" }
    );
  }, []);

  return (
    <>
      <div className={styles.homeHeader}>
        <div className={styles.intro}>
          {/* <div className="align-middle justify-center p-2 pt-0">
            <div className="p-2 flex flex-row align-middle justify-center gap-2"></div>
          </div> */}
        </div>
        <div className={styles.backgroundImage} ref={background}>
          <video className={styles.video} muted loop>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default ResponsiveAnimation;
