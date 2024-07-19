import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

gsap.registerPlugin(ScrollTrigger);

const ProgressBar: React.FC = () => {
  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    if (progressBar) {
      gsap.to(progressBar, {
        scrollTrigger: {
          trigger: ".card-left-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        height: "100%",
        backgroundColor: "transparent",
        ease: "none",
        onUpdate: function () {
          const progress = this.progress();
          const color = `hsl(${progress * 360}, 100%, 50%)`;
          progressBar.style.backgroundColor = color;
        },
      });
    }

    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Calculate the number of pairs of cards to display on each side of the progress bar
  const numPairs = 10;
  const cardPairs = [];
  for (let i = 0; i < numPairs; i++) {
    cardPairs.push(
      <div
        key={`card-pair-${i}`}
        className="flex items-end justify-end mb-4 bg-red-500"
      >
        <div className="mb-1">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </div>{" "}
        {/* Left card */}
        <div className="w-24 h-24"></div> {/* Right card */}
      </div>
    );
  }

  return (
    <>
      <div className="h-[200vh] bg-green-300"></div>{" "}
      {/* Additional content above progress-container */}
      <div className="progress-container relative">
        {/* Progress bar inside a separate div */}
        <div className=" fixed top-0 left-1/2 h-[100vh] w-2 bg-red-400 rounded">
          {/* <div className="progress-bar-container h-full w-2 bg-red-400 rounded"> */}
          <div className="progress-bar w-full bg-blue-500 rounded"></div>
        </div>
        {/* </div> */}
        {/* <div>
          <div className="progress-bar-test absolute top-0 left-1/2 bottom-0 pl-0 mt-32 bg-yellow-200 content-left"></div>
        </div> */}
        {/* Cards on the left and right sides */}
        <div className="card-left-container absolute top-0 bottom-0 pl-0 mt-32 bg-red-200 content-left">
          <div className="">
            {cardPairs.map(
              (pair, index) =>
                index % 2 === 0 && (
                  <div key={`left-card-pair-${index}`} className="mb-10">
                    {pair}
                  </div>
                )
            )}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center pr-10">
          {cardPairs.map(
            (pair, index) =>
              index % 2 !== 0 && (
                <div key={`right-card-pair-${index}`} className="mb-10">
                  {pair}
                </div>
              )
          )}
        </div>
        <div className="h-[200vh] bg-blue-300"></div>{" "}
        {/* Additional content for scrolling */}
      </div>
      <div className="h-[200vh] bg-green-300"></div>{" "}
    </>
  );
};

export default ProgressBar;
