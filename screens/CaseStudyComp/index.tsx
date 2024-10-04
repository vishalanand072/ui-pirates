"use client";
import React, { useState, useEffect } from "react";
import CoreProblems from "./CoreProblems";
import OurRole from "./OurRole";
import Overview from "./Overview";
import UserGroups from "./UserGroups";
import UserPersonas from "./userPersonas";
import FeaturesProduct from "./featuresProduct";
import ClientRequirements from "./ClientRequirements";
import ValuesUiElement from "./visualUiElement";
import UXAnalysis from "./uxAnalysis";
import ProductShowcase from "./productShowcase";
import StickyTabs from "./tabs";
import { Spinner } from "@nextui-org/react";

const Casestudy = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-[200vh] bg-white absolute top-0 w-screen">
        {/* Replace with your loader component or animation */}
        <div className="loader w-screen h-[100vh] flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </div>
    );
  }

  return (
    <div>
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
        {props.data[5].userGroup.length != 0 && (
          <div id="user-groups-stories">
            <UserGroups userGroup={props.data[5].userGroup} />
          </div>
        )}
        {props.data[6].userPersonas.length != 0 && (
          <div id="user-persona">
            <UserPersonas userPersonas={props.data[6].userPersonas} />
          </div>
        )}
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
        {/* <div id="learning-improvements">
          <ProductShowcase />
        </div> */}
      </div>
    </div>
  );
};

export default Casestudy;
