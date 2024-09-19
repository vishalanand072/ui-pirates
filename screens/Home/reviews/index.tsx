"use client";

import { MagicCardDemo } from "./magic_ui";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import React from "react";
import { MarqueeDemo } from "./marquee_magic";
const ReviewPage = () => {
  return (
    <>
      <div className="relative flex h-screen overflow-hidden bg-background p-0 m-0">
        <div className="flex flex-col">
          {/* <p className="z-9 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p> */}
          <div className="layer relative">
            <div
              className="absolute text-center z-20 w-screen h-2/6"
              style={{
                top: "16%",
                left: "50vw",
                transform: "translate(-50%, -50%)",
                background:
                  "linear-gradient(to bottom, white 50%, rgba(255, 255, 0, 0) 100%)",
                width: "100vw",
              }}
            >
              <p className="text-3xl md:text-5xl text-primary mt-12">
                Testimonials
              </p>
              <h1 className="text-4xl md:text-6xl sm:text-4xl font-bold text-white-900 mt-3 ">
                What People Are Saying
              </h1>
            </div>
            <div className="flex flex-row justify-center">
              <br className="h-8" />
              {/* <DotPattern
                className={cn(
                  "[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]"
                )}
              />
              <br /> */}
              <MarqueeDemo />
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default ReviewPage;
