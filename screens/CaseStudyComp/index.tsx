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
import ValuesUiElement from "./visualUiElement";
import UXAnalysis from "./uxAnalysis";
import ProductShowcase from "./productShowcase";

import StickyTabs from "./tabs";
import WeCreate from "../Home/weCreate";

const Casestudy = (props: any) => {
  console.log(props.data[9].uxAnalysis);
  const len = props.data[9].uxAnalysis.length;
  console.log(len);

  return (
    <div>
      {/* <WeCreate /> */}
      {/* <StickyTop /> */}
      {/* <CaseStudyHero hero={props.data[0].hero} /> */}
      <Overview overviewdata={props.data[1].overview} />
      <div className="">
        <div
          className="sticky top-0 overflow-scroll bg-white your-element-class"
          style={{ zIndex: 99999 }}
        >
          <StickyTabs />
        </div>
        <div id="client-requirements">
          <ClientRequirements
            ClientRequirements={props.data[2].clientRequirements}
          />
        </div>
        <div id="our-role">
          <OurRole ourRole={props.data[3].ourRole} />
        </div>
        <div id="core-problem">
          <CoreProblems CoreProblems={props.data[4].coreProblem} />
        </div>
        <div id="user-groups-stories">
          <UserGroups userGroup={props.data[5].userGroup} />
        </div>
        <div id="user-persona">
          <UserPersonas userPersonas={props.data[6].userPersonas} />
        </div>
        <div id="features-product">
          <FeaturesProduct
            featureAndProduct={props.data[7].featureAndProduct}
          />
        </div>
        <div id="visual-ui-elements">
          <ValuesUiElement visualUIElements={props.data[8].visualUIElements} />
        </div>
        {props.data[9].uxAnalysis.length != 0 && (
          <div id="ux-analysis">
            <UXAnalysis uxAnalysis={props.data[9].uxAnalysis} />
          </div>
        )}
        <div id="learning-improvements">
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
