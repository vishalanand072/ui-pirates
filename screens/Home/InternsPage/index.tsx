"use client";

import React from "react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import { Button } from "@nextui-org/button";
import InnovativeProgram from "./InnovativeProgram";
const InternPage = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl md:text-4xl font-bold text-purple-600 font-Nohemi">
          INTERN AS A COURSE
        </h1>
        <p className="mt-4 text-6xl font-semibold font-Nohemi">
          Join Our Innovative Program
        </p>
        <br></br>
      </div>
      <div className="container mx-auto px-12">
      <div className=" text-center">
        <video  controls className="mx-auto w-full rounded-lg ">
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-8 ">
            <InnovativeProgram></InnovativeProgram>
        
        </div>
        </div>

      
      

    </>
  );
};

export default InternPage;
