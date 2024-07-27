import React from "react";
import Web from "./web";
import Mobile from "./mobile";
import { AboutUIpiratesData } from "../../../types";

interface AboutUIpiratesProps {
  about: AboutUIpiratesData[];
}

const AboutUIpirates: React.FC<AboutUIpiratesProps> = ({ about }) => {
  return (
    <div className="">
      <Web about={about} />
      <Mobile about={about} />
    </div>
  );
};

export default AboutUIpirates;
