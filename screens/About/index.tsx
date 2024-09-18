"use client";
import Hero from "./hero";
import OurServices from "./ourServices";
import CoreValues from "./coreValues";
import MeetTeam from "./meetTeam";
const AboutUs = () => {
  return (
    <>
      <div>
        <Hero />
        <OurServices />
        <div className=" container mx-auto px-20 max-md:px-10">
          <CoreValues />
          <MeetTeam />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
