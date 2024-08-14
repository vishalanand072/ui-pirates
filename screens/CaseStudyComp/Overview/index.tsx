import React from "react";
import OverviewPage from "./Overview";

const Overview = (props: any) => {
  return (
    <div>
      <OverviewPage overviewdata={props.overviewdata} />
    </div>
  );
};
export default Overview;
