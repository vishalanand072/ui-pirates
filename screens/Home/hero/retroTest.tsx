"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import HeroComp from "./heroComp";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start overflow-hidden  bg-background -mt-16">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-clip-text text-center leading-none tracking-tighter">
        <HeroComp hero_heading={""} hero_subHeading={""} />
      </span>

      <RetroGrid />
    </div>
  );
}
