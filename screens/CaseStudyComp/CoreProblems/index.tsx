import Image from "next/image";
import Pic1 from "@/public/images/coreProblem_img1.png";
import Pic2 from "@/public/images/coreProblem_img2.png";
import Pic3 from "@/public/images/coreProblem_img3.png";
import Problems from "./Problems";
import SolutionCard from "./Solutions";

const CoreProblems = (props: any) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
        <div className="flex justify-between items-center">
          <h1 className="heading">Core Problem & Business Analysis</h1>
          <span className="text-gray-300 text-4xl lg:text-6xl font-light">
            03
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-16">
          <div className="space-y-8">
            <Image
              src={Pic1}
              alt="Solution 1"
              width={250}
              height={400}
              className="w-full h-[400px] rounded-3xl object-cover"
            />
          </div>
          <Problems problems={props.CoreProblems.problems} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="order-1 max-lg:order-2">
            <SolutionCard solutions={props.CoreProblems.solutions} />
          </div>
          <div className="space-y-8 order-2 max-lg:order-1">
            <Image
              src={Pic3}
              alt="Solution 1"
              width={500}
              height={500}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreProblems;
