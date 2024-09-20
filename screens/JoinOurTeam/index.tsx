"use client";
import Hero from "./hero";
import HowItWorks from "./howItWorks";
import WhatYouGet from "./whatYouGet";
import JoinUs from "./joinUs";
const JoinOurTeam = () => {
  return (
    <>
      <div>
        <Hero />
        <div className=" container mx-auto px-20 max-lg:px-10 max-md:px-4">
          <HowItWorks />
          <WhatYouGet />
          <JoinUs />
        </div>
      </div>
    </>
  );
};

export default JoinOurTeam;
