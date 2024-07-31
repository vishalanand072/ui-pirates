import UIDesignCard from "./IUDesignCard";
import UserReasearchCard from "./UserResearchCard";
import UIDevCard from "./UIDevCard";
import AssetCreationCard from "./AssetCreationCard";

const OurRole = () => {
  return (
    <>
      <div className=" bg-secondary-900">
        <div className="flex justify-between items-center py-24 lg:py-24 px-8 lg:px-48">
          <h1 className="text-white font-bold text-6xl">Our Role</h1>
          <span className="text-gray-300 text-6xl font-light">02</span>
        </div>
        <div className="flex gap-12 px-8 lg:px-48">
          <UIDesignCard />
          <UserReasearchCard />
          <UIDevCard />
          <AssetCreationCard />
        </div>
      </div>
    </>
  );
};

export default OurRole;
