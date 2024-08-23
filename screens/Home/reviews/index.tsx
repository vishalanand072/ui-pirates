"use client";

import { MagicCardDemo } from "./magic_ui";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import React from "react";
import { MarqueeDemo } from "./marquee_magic";
import { NewMa } from "./newMa";
const ReviewPage = () => {
  return (
    <>
      <div className="relative flex h-screen overflow-hidden bg-background p-0 m-0 md:shadow-xl">
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
              <h1 className="text-4xl md:text-6xl sm:text-4xl font-bold text-white-900  mt-12">
                What People Are Saying
              </h1>
              <p className="mt-4 max-md:mt-2 max-md:text-lg text-xl font-semibold text-gray-600">
                Don't just take our word for it. <br />
                Here's what <span className="font-semibold">
                  real people
                </span>{" "}
                are saying about{" "}
                <span className="font-semibold">UI Pirates</span>
              </p>
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
