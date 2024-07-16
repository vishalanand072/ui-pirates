"use client";

import { MagicCardDemo } from "./magic_ui";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import React from "react";
import { MarqueeDemo } from "./marquee_magic";
const ReviewPage = () => {
  return (        
    <>
    
<div className="relative flex h-screen items-center justify-center overflow-hidden bg-background p-0 m-0 md:shadow-xl">
    <div className="flex flex-col items-center justify-center">
        <p className="z-9 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p>
        <div className="layer relative">
            <div className="absolute text-center z-20 w-full h-2/6" style={{ top: '44.5%', left: '50%', transform: 'translate(-50%, -50%)',         background: 'linear-gradient(to bottom, white 50%, rgba(255, 255, 0, 0) 100%)' }}>
                <h1 className="text-6xl md:text-5xl sm:text-4xl  font-bold text-white-900 p-6">What People Are Saying</h1>
                <p className="mt-4 text-xl font-semibold text-gray-600">
                    Don't just take our word for it. <br />
                    Here's what <span className="font-semibold">real people</span> are saying about <span className="font-semibold">UI Pirates</span>
                </p>
            </div>
            <div>
                <br className="h-8" />
                <DotPattern className={cn("[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]")} />
                <br />
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


  


