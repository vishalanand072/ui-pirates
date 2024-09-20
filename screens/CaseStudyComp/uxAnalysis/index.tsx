import UXMedia from "./media";
const UXAnalysis = (props: any) => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4">
        <div className="flex justify-between items-center my-12">
          <h1 className="text-black heading ">UX Analysis</h1>
          <span className="text-gray-300 text-6xl font-light">08</span>
        </div>
        <UXMedia uxAnalysis={props.uxAnalysis} />
      </div>
    </>
  );
};

export default UXAnalysis;
