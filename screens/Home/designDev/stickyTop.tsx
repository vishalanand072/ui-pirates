import Section2 from "./stickySection/stickySection2";
import Section1 from "./stickySection/stickySection1";
const StickyTop = () => {
  return (
    <>
      <div>
        <div className="h-[1800px] bg-[#E4D4F4] w-screen">
          <div className="h-[20px] w-full " id="div1">
            {" "}
            <Section1 />
            {/* <p>div1</p> */}
          </div>
        </div>

        <div className="h-[4000px] bg-green-300">
          <div className="h-[20px] w-full " id="div2">
            {" "}
            <Section2 />
          </div>
        </div>

        <div className="h-[800px] bg-pink-300">
          <div className="h-[20px] w-full " id="div3">
            {" "}
            <p className="text-2xl">div3</p>
          </div>
        </div>
      </div>
      {/* <div className="h-[800px] bg-orange-300">
        <div className="h-[20px] w-full bg-white" id="div4">
          {" "}
          <p className="text-2xl">div4</p>
        </div>
      </div> */}
    </>
  );
};

export default StickyTop;
