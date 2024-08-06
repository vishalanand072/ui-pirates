import React from "react";
import ImageGrid from "./imageSection";
import { OurWorkData } from "../../../types";
// import { AnimationWork } from "./animation";

interface OurWorkProps {
  ourWorks: OurWorkData[];
}

const OurWork: React.FC<OurWorkProps> = ({ ourWorks }) => {
  const images = ourWorks.map(
    (work) =>
      `https://ui-pirates-backend.onrender.com${work.attributes.formats.medium.url}`
  );

  return (
    <div className="container mx-auto py-0">
      <ImageGrid images={images} />
      {/* <AnimationWork /> */}
    </div>
  );
};

export default OurWork;
