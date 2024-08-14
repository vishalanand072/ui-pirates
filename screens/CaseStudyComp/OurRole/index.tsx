import UIDesignCard from "./IUDesignCard";
import UserReasearchCard from "./UserResearchCard";
import UIDevCard from "./UIDevCard";
import AssetCreationCard from "./AssetCreationCard";

const OurRole = () => {
  return (
    <>
      <div className=" bg-secondary-900 py-12">
        <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-white heading">Our Role</h1>
            <span className="text-gray-300 text-6xl font-light">02</span>
          </div>
          <div className="">
            <UIDesignCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRole;
