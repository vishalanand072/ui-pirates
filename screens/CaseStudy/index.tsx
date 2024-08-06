"use client";
import { User } from "@nextui-org/react";
import CaseStudyHero from "./hero";
import CoreProblems from "./CoreProblems";
import OurRole from "./OurRole";
import Overview from "./Overview";
import Xperiti from "./Xperiti";
import UserGroups from "./UserGroups";
import ClientRequirements from "./ClientRequirements";
import StickyTop from "../Home/designDev/stickyTop";
import ValuesUiElement from "./valuesUiElement";
import UXAnalysis from "./uxAnalysis";
import ProductShowcase from "./productShowcase";
const Casestudy = () => {
  return (
    <div>
      {/* <StickyTop /> */}
      <CaseStudyHero />
      <Overview></Overview>
      <ClientRequirements></ClientRequirements>
      <OurRole></OurRole>
      <CoreProblems></CoreProblems>
      <UserGroups></UserGroups>
      <ValuesUiElement />
      <UXAnalysis />
      <ProductShowcase />
    </div>
  );
};

export default Casestudy;
