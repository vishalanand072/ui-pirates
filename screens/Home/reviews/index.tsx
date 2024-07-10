"use client";

import { MagicCardDemo } from "./magic_ui";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import React from "react";

const ReviewPage = () => {
  return (        
    <>
    <div className="relative flex h-screen  items-center justify-center overflow-hidden bg-background p-0 m-0 md:shadow-xl ">
        <div className="flex flex-col items-center justify-center">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p>
            <div className="text-center">
                <h1 className="text-6xl md:text-5xl font-bold text-white-900">What People Are Saying</h1>
                <p className="mt-4 text-xl font-semibold text-gray-600">Don't just take our word for it. <br></br>Here's what <span className="font-semibold ">real people</span> are saying about <span className="font-semibold ">UI Pirates</span></p>
            </div>
            <br className="h-8"></br>
            <DotPattern
            className={cn("[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]")}
            />
            <MagicCardDemo />
            
        </div>
    </div>

    <br />   
    </>
  );
};

export default ReviewPage;


  


