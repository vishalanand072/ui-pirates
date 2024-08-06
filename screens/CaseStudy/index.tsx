// "use client";
// import { User } from "@nextui-org/react";
// import CaseStudyHero from "./hero";
// import CoreProblems from "./CoreProblems";
// import OurRole from "./OurRole";
// import Overview from "./Overview";
// import Xperiti from "./Xperiti";
// import UserGroups from "./UserGroups";
// import UserPersonas from "./userPersonas";
// import FeaturesProduct from "./featuresProduct";
// import ClientRequirements from "./ClientRequirements";
// import StickyTop from "../Home/designDev/stickyTop";
// import ValuesUiElement from "./valuesUiElement";
// import UXAnalysis from "./uxAnalysis";
// import ProductShowcase from "./productShowcase";

// import StickyTabs from "./tabs";
// const Casestudy = () => {
//   return (
//     <div>
//       {/* <StickyTop /> */}
//       <CaseStudyHero />
//       <Overview></Overview>
//       <div>
//         <div className="sticky top-0">
//           <StickyTabs />
//         </div>
//         <ClientRequirements id="hii" />
//         <OurRole></OurRole>
//         <CoreProblems></CoreProblems>
//         <UserGroups></UserGroups>
//         <UserPersonas />
//         <FeaturesProduct />
//         <ValuesUiElement />
//         <UXAnalysis />
//         <ProductShowcase />
//       </div>
//     </div>
//   );
// };

// export default Casestudy;

// Casestudy.js
"use client";
import CaseStudyHero from "./hero";
import CoreProblems from "./CoreProblems";
import OurRole from "./OurRole";
import Overview from "./Overview";
import Xperiti from "./Xperiti";
import UserGroups from "./UserGroups";
import UserPersonas from "./userPersonas";
import FeaturesProduct from "./featuresProduct";
import ClientRequirements from "./ClientRequirements";
import StickyTop from "../Home/designDev/stickyTop";
import ValuesUiElement from "./valuesUiElement";
import UXAnalysis from "./uxAnalysis";
import ProductShowcase from "./productShowcase";

import StickyTabs from "./tabs";

const Casestudy = () => {
  return (
    <div>
      <CaseStudyHero />
      <Overview />
      <div>
        <div className="sticky top-0">
          <StickyTabs />
        </div>
        <div id="client-requirements">
          <ClientRequirements />
        </div>
        <div id="our-role">
          <OurRole />
        </div>
        <div id="core-problem">
          <CoreProblems />
        </div>
        <div id="user-groups-stories">
          <UserGroups />
        </div>
        <div id="user-persona">
          <UserPersonas />
        </div>
        <div id="features-product">
          <FeaturesProduct />
        </div>
        <div id="visual-ui-elements">
          <ValuesUiElement />
        </div>
        <div id="ux-analysis">
          <UXAnalysis />
        </div>
        <div id="learning-improvements">
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
