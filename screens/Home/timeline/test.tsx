// // pages/index.tsx
// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Card component
// interface CardProps {
//   content: string;
//   isLeft: boolean;
// }

// const Card: React.FC<CardProps> = ({ content, isLeft }) => {
//   return (
//     <div
//       className={`relative w-full md:w-1/2 p-4 ${
//         isLeft ? "self-start" : "self-end"
//       }`}
//     >
//       <div className="bg-white shadow-md rounded-lg p-6">{content}</div>
//     </div>
//   );
// };

// // HomePage component
// const cardsContent = [
//   "Card 1",
//   "Card 2",
//   "Card 3",
//   "Card 4",
//   "Card 5",
//   "Card 6",
//   "Card 7",
//   "Card 8",
//   "Card 9",
//   "Card 10",
//   // Add more cards as needed
// ];

// const HomePageTest: React.FC = () => {
//   //   useEffect(() => {
//   //     const progressBar = document.querySelector(".progress-bar") as HTMLElement;
//   //     if (progressBar) {
//   //       gsap.from(progressBar, {
//   //         scrollTrigger: {
//   //           trigger: ".container",
//   //           start: "top top",
//   //           end: "bottom bottom",
//   //           scrub: true,
//   //         },
//   //         height: "100%",
//   //         backgroundColor: "transparent",
//   //         ease: "none",
//   //         onUpdate: function () {
//   //           const progress = this.progress();
//   //           const color = `hsl(${progress * 360}, 100%, 50%)`;
//   //           progressBar.style.backgroundColor = color;
//   //         },
//   //       });
//   //     }

//   //     return () => {
//   //       // Clean up ScrollTrigger instances on component unmount
//   //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   //     };
//   //   }, []);

//   useEffect(() => {
//     const progressBar = document.querySelector(".progress-bar") as HTMLElement;
//     if (progressBar) {
//       gsap.to(progressBar, {
//         scrollTrigger: {
//           trigger: ".card-left-container",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         height: "100%",
//         backgroundColor: "transparent",
//         ease: "none",
//         onUpdate: function () {
//           const progress = this.progress();
//           const color = `hsl(${progress * 360}, 100%, 50%)`;
//           progressBar.style.backgroundColor = color;
//         },
//       });
//     }

//     return () => {
//       // Clean up ScrollTrigger instances on component unmount
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8 bg-red-400">
//       <div className="relative flex flex-wrap">
//         {/* Vertical Line */}
//         <div className="progress-bar absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>
//         {cardsContent.map((content, index) => (
//           <Card key={index} content={content} isLeft={index % 2 === 0} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePageTest;

// // pages/index.tsx
// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

// // Card component
// interface CardProps {
//   content: string;
//   isLeft: boolean;
// }

// const Card: React.FC<CardProps> = ({ content, isLeft }) => {
//   return (
//     <div
//       className={`relative w-full md:w-1/2 p-4 ${
//         isLeft ? "self-start" : "self-end"
//       }`}
//     >
//       <div className="bg-white shadow-md rounded-lg p-6 h-[300px]">
//         {content}
//       </div>
//     </div>
//   );
// };

// // HomePage component
// const cardsContent = [
//   "Card 1",
//   "Card 2",
//   "Card 3",
//   "Card 4",
//   "Card 5",
//   "Card 6",
//   "Card 7",
//   "Card 8",
//   "Card 9",
//   "Card 10",
//   // Add more cards as needed
// ];

// const HomePageTest: React.FC = () => {
//   useEffect(() => {
//     const progressBar = document.querySelector(
//       ".progress-bar-overlay"
//     ) as HTMLElement;

//     if (progressBar) {
//       gsap.to(progressBar, {
//         scrollTrigger: {
//           trigger: ".container",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         height: "100%",
//         ease: "none",
//         onUpdate: function () {
//           const progress = this.progress();
//           const color = `hsl(${progress * 360}, 100%, 50%)`;
//           progressBar.style.backgroundColor = color;
//           progressBar.style.height = `${progress * 100}%`;
//         },
//       });
//     }

//     return () => {
//       // Clean up ScrollTrigger instances on component unmount
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="relative flex flex-wrap">
//         {/* Vertical Line */}
//         <div className="progress-bar-container absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full">
//           <div className="progress-bar-overlay absolute top-0 left-0 w-full h-0 bg-transparent"></div>
//         </div>
//         {cardsContent.map((content, index) => (
//           <Card key={index} content={content} isLeft={index % 2 === 0} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePageTest;

// pages/index.tsx

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// import { WorkProcessData } from "../../../types";

// // Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

// // Card component
// interface CardProps {
//   work: WorkProcessData;
//   isLeft: boolean;
//   cardIndex: number;
// }

// const Cards: React.FC<CardProps> = ({ work, isLeft, cardIndex }) => {
//   return (
//     <div
//       className={`relative w-[95vw] md:w-1/2 pl-4 md:pl-10 pr-8 py-4 mb-32 ${
//         isLeft ? "self-start " : "self-end"
//       }`}
//     >
//       <div className={`${cardIndex % 2 == 0 ? "md:-mb-60" : "md:mt-16"}`}>
//         {/* <div
//           className={`${
//             cardIndex % 2 == 1 && cardIndex != 1 && cardIndex != 2
//               ? "md:-mt-20"
//               : " md:-mb-40]="
//           }`}
//         > */}
//         <div className="shadow-md rounded-lg p-0">
//           <Card className="p-3 pt-1 pr-2 pb-1 pl-2  shadow-lg bg-[#262626] border-2 border-primary">
//             <CardHeader className="relative flex gap-3">
//               <div className="flex flex-col">
//                 <p className="text-[20px] font-[600] font-nahomi text-[#666666]">
//                   {work.title}
//                 </p>
//                 <p className="text-[28px] font-[500] text-white">
//                   {work.subHeading}
//                 </p>
//               </div>
//               <div className="absolute top-0 right-0 m-2 text-[32px] text-primary">
//                 {cardIndex}
//               </div>
//             </CardHeader>
//             <CardBody>
//               <p className="text-[16px] text-[#666666]">
//                 {work.subTitle[0]?.subTitle}
//               </p>
//             </CardBody>
//           </Card>
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// interface HomePageTestProps {
//   workProcess: WorkProcessData[];
// }

// const HomePageTest: React.FC<HomePageTestProps> = ({ workProcess }) => {
//   useEffect(() => {
//     const progressBarOverlay = document.querySelector(
//       ".progress-bar"
//     ) as HTMLElement;

//     if (progressBarOverlay) {
//       gsap.to(progressBarOverlay, {
//         scrollTrigger: {
//           trigger: ".container",
//           start: "top top",
//           end: "bottom 100px",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             const color = `hsl(${progress * 360}, 100%, 50%)`;
//             progressBarOverlay.style.height = `${progress * 100}%`;
//             progressBarOverlay.style.backgroundColor = "#7828C8";
//           },
//         },
//         ease: "none",
//       });
//     }

//     return () => {
//       // Clean up ScrollTrigger instances on component unmount
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4">
//       <div className="text-center">
//         <p className="text-primary text-[40px] leading-10">Scope of work</p>
//         <p className="text-white text-[50px] mb-8">Process</p>
//       </div>
//       <div className="relative flex flex-wrap">
//         {/* Vertical Line */}
//         <div className="progress-bar-container absolute right-0 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full">
//           <div className=" fixed top-0 right-0 md:left-1/2 h-full w-2 bg-[#262626] rounded">
//             <div className="progress-bar w-full rounded"></div>
//           </div>
//         </div>
//         {workProcess.map((work, index) => (
//           <Cards
//             key={index}
//             work={work}
//             isLeft={index % 2 === 0}
//             cardIndex={index + 1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePageTest;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { WorkProcessData } from "../../../types";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Card component
interface CardProps {
  work: WorkProcessData;
  isLeft: boolean;
  cardIndex: number;
}

const Cards: React.FC<CardProps> = ({ work, isLeft, cardIndex }) => {
  return (
    <div
      className={`relative w-[95vw] md:w-1/2 pl-4 md:pl-10 pr-8 py-4 md:mb-32 ${
        isLeft ? "self-start " : "self-end"
      }`}
      id={`card-${cardIndex}`}
    >
      <div className={`${cardIndex % 2 === 0 ? "md:-mb-60" : "md:mt-16"}`}>
        <div className="shadow-md rounded-lg p-0">
          <Card
            className="p-3 pt-1 pr-2 pb-1 pl-2 shadow-lg bg-[#262626] border-2 border-transparent"
            id={`card-border-${cardIndex}`}
          >
            <CardHeader className="relative flex gap-3">
              <div className="flex flex-col">
                <p className="text-[20px] font-[600] font-nahomi text-[#666666]">
                  {work.title}
                </p>
                <p className="text-[28px] font-[500] text-white">
                  {work.subHeading}
                </p>
              </div>
              <div className="absolute top-0 right-0 m-2 text-[32px] text-primary">
                {cardIndex}
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-[16px] text-[#666666]">
                {work.subTitle[0]?.subTitle}
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface HomePageTestProps {
  workProcess: WorkProcessData[];
}

const HomePageTest: React.FC<HomePageTestProps> = ({ workProcess }) => {
  useEffect(() => {
    const progressBarOverlay = document.querySelector(
      ".progress-bar"
    ) as HTMLElement;

    if (progressBarOverlay) {
      gsap.to(progressBarOverlay, {
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom 100px",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            progressBarOverlay.style.height = `${progress * 100}%`;
            progressBarOverlay.style.backgroundColor = "#7828C8";
          },
        },
        ease: "none",
      });
    }

    // Set up ScrollTrigger for each card
    workProcess.forEach((_, index) => {
      const cardBorder = document.querySelector(
        `#card-border-${index + 1}`
      ) as HTMLElement;

      if (cardBorder) {
        gsap.to(cardBorder, {
          scrollTrigger: {
            trigger: `#card-${index + 1}`,
            start: "top center",
            end: "center 200px",
            toggleActions: "play reverse play reverse",
            onEnter: () => (cardBorder.style.borderColor = "#7828C8"), // Change to your desired color
            onLeave: () => (cardBorder.style.borderColor = "transparent"),
            onEnterBack: () => (cardBorder.style.borderColor = "#7828C8"), // Change to your desired color
            onLeaveBack: () => (cardBorder.style.borderColor = "transparent"),
          },
        });
      }
    });

    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [workProcess]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <p className="text-primary text-[40px] leading-10">Scope of work</p>
        <p className="text-white text-[50px] mb-8">Process</p>
      </div>
      <div className="relative flex flex-wrap">
        {/* Vertical Line */}
        <div className="progress-bar-container absolute right-0 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          <div className="fixed top-0 right-0 md:left-1/2 h-full w-2 bg-[#262626] rounded">
            <div className="progress-bar w-full rounded"></div>
          </div>
        </div>
        {workProcess.map((work, index) => (
          <Cards
            key={index}
            work={work}
            isLeft={index % 2 === 0}
            cardIndex={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageTest;
