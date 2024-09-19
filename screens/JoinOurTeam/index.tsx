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
        <div className=" container mx-auto px-20 max-md:px-10">
          <HowItWorks />
          <WhatYouGet />
          <JoinUs />
        </div>
      </div>
    </>
  );
};

export default JoinOurTeam;
