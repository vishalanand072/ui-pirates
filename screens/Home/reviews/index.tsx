"use client";

import { MagicCardDemo } from "./magic_ui";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import React from "react";

const ReviewPage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden bg-background p-0 m-0 py-12 ">
        <div className="flex flex-col items-center justify-center">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p>
          <div className="text-center">
            <h1 className="text-6xl md:text-5xl font-bold text-white-900">
              What People Are Saying
            </h1>
            <p className="mt-4 text-xl font-semibold text-gray-600">
              Don't just take our word for it. <br></br>Here's what{" "}
              <span className="font-semibold ">real people</span> are saying
              about <span className="font-semibold ">UI Pirates</span>
            </p>
          </div>
          <br className="h-8"></br>
          <div className="container px-12 mx-auto z-11">
            <MagicCardDemo />
          </div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]"
            )}
          />
        </div>
      </div>

      <br />
    </>
  );
};

export default ReviewPage;
