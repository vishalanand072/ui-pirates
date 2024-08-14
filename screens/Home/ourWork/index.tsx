import React from "react";
import ImageGrid from "./imageSection";
import { OurWorkData } from "../../../types";
// import { AnimationWork } from "./animation";

interface OurWorkProps {
  ourWorks: OurWorkData[];
}

const OurWork: React.FC = () => {
  return (
    <div className="container mx-auto py-0">
      <ImageGrid />
      {/* <AnimationWork /> */}
    </div>
  );
};

export default OurWork;
