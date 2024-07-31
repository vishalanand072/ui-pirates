import { User } from "@nextui-org/react";
import CoreProblems from "./CoreProblems";
import OurRole from "./OurRole";
import Overview from "./Overview";
import Xperiti from "./Xperiti";
import UserGroups from "./UserGroups";
import ClientRequirements from "./ClientRequirements";
const Casestudy = () => {
  return (
    <div>
      <Overview></Overview>
      <Xperiti></Xperiti>
      <ClientRequirements></ClientRequirements>
      <OurRole></OurRole>
      <CoreProblems></CoreProblems>
      <UserGroups></UserGroups>
    </div>
  );
};

export default Casestudy;
