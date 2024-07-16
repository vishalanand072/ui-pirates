"use client";

import React from "react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import { Button } from "@nextui-org/button";
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
      <br className="h-8"></br>
      <div className="text-center">
        <video  controls className="mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-9/10 rounded-lg">
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2  max-w-4xl mx-auto">
            <div className="p-4">
            <Card1 />
            </div>
            <div className="p-4">
            <Card2 />
            </div>
            <div className="md:col-span-2 p-4">
            <Card3></Card3>
            </div>
        </div>
        </div>

      <br></br>
      <br />
      <div className="flex justify-center gap-4">
        <Button color="secondary" className="  font-bold py-2 px-4 w-auto">
            Join Now!
        </Button>
        <Button className="  font-bold py-2 px-4 w-auto ">
            Learn More
        </Button>
        </div>

    </>
  );
};

export default InternPage;
