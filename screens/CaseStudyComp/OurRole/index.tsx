import UIDesignCard from "./IUDesignCard";

const OurRole = (props: any) => {
  return (
    <>
      <div className=" bg-secondary-900 py-12">
        <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-white heading">Our Role</h1>
            <span className="text-gray-300 text-6xl font-light max-md:text-3xl">
              02
            </span>
          </div>
          <div className="">
            <UIDesignCard card={props.ourRole} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRole;
