import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Problems from "./Problems";
import SolutionCard from "./Solutions";

gsap.registerPlugin(ScrollTrigger);

const CoreProblems = (props: any) => {
  // useEffect(() => {
  //   // Animation for the left image
  //   gsap.fromTo(
  //     "#left",
  //     {
  //       opacity: 0,
  //       x: -100,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: "#left",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         scrub: 1,
  //       },
  //     }
  //   );

  //   // Animation for the right image
  //   gsap.fromTo(
  //     "#right",
  //     {
  //       opacity: 0,
  //       x: 100,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: "#right",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         scrub: 1,
  //       },
  //     }
  //   );

  //   // Animation for the blur sections
  //   gsap.fromTo(
  //     "#blur",
  //     {
  //       opacity: 0,
  //       scale: 0.8,
  //       rotationY: 15,
  //     },
  //     {
  //       opacity: 1,
  //       scale: 1,
  //       rotationY: 0,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: "#blur",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4">
        <div className="flex justify-between items-center">
          <h1 className="heading">Core Problem & Business Analysis</h1>
          <span className="text-gray-300 text-6xl max-md:text-3xl font-light">
            03
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-16">
          <div className="space-y-8" id="left">
            <Image
              src={props.CoreProblems.problems[0].image}
              alt="Solution 1"
              width={250}
              height={300}
              className="w-full h-[300px] rounded-3xl object-cover"
            />
          </div>
          <div id="blur">
            <Problems problems={props.CoreProblems.problems} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="order-1 max-lg:order-2" id="blur">
            <SolutionCard solutions={props.CoreProblems.solutions} />
          </div>
          <div className="space-y-8 order-2 max-lg:order-1" id="right">
            <Image
              src={props.CoreProblems.solutions[0].image}
              alt="Solution 1"
              width={250}
              height={300}
              className="w-full h-[300px] rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreProblems;
