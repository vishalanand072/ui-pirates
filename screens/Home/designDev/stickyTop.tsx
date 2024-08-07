import Section2 from "./stickySection/stickySection2";
import Section1 from "./stickySection/stickySection1";
import CombinedSections from "./stickySection/combineSection";
const StickyTop = () => {
  return (
    <>
      <div>
        <div className="h-[1800px] bg-[#E4D4F4] w-screen">
          <div className="h-[20px] w-full " id="div1">
            {" "}
            <CombinedSections />
          </div>
        </div>

        <div className="h-[100vh] bg-[#E4D4F4]">
          <div className="h-[20px] w-full " id="div3">
            {" "}
            {/* <p className="text-2xl">div3</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyTop;
