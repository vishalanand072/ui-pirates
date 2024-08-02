"use client";

"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });
  }, []);

  return (
    <div>
      <div className="spacer h-16"></div>

      <div className="w-screen h-screen overflow-hidden">
        <div className="gallery flex relative h-full">
          <div className="left w-1/2 relative z-50 h-full overflow-visible">
            <div className="detailsWrapper m-auto w-4/5 h-full">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="details h-full flex flex-col justify-center outline outline-green-500"
                >
                  <div className="headline bg-blue-900 rounded-md h-16 w-full"></div>
                  {[...Array(4)].map((_, idx) => (
                    <div
                      key={idx}
                      className="text my-2 bg-blue-900 rounded-md h-4 w-full"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="right w-1/2 h-full flex flex-col justify-center outline outline-purple-500 fixed right-0 top-0 z-40">
            <div className="photos w-full h-4/5 bg-maroon m-auto">
              <h1>Heeelo</h1>
              <h1>Hee</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer h-16"></div>
    </div>
  );
};

export default Gallery;
