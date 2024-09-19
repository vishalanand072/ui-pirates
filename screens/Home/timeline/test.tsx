// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// // import { WorkProcessData } from "../../../types";
// // // Register ScrollTrigger plugin with GSAP
// // gsap.registerPlugin(ScrollTrigger);

// // // Card component
// // interface CardProps {
// //   content: string;
// //   isLeft: boolean;
// //   cardIndex: any;
// // }

// // const Cards: React.FC<CardProps> = ({ content, isLeft, cardIndex }) => {
// //   return (
// //     <div
// //       className={`relative w-[95vw] md:w-1/2 pl-4 md:pl-10 pr-8 py-4 mb-32${
// //         isLeft ? "self-start" : "self-end"
// //       }`}
// //     >
// //       <div className={`${cardIndex % 2 == 0 ? "md:-mb-60" : "md:mt-16"}`}>
// //         <div className="shadow-md rounded-lg p-0">
// //           <Card className="p-3 pt-1 pr-2 pb-1 pl-2  shadow-lg bg-[#262626]">
// //             <CardHeader className="relative flex gap-3">
// //               <div className="flex flex-col">
// //                 <p className="text-[20px] font-[600] font-nahomi text-[#666666]">
// //                   Eden Hazani
// //                 </p>
// //                 <p className="text-[28px] font-[500] text-white">
// //                   Xperiti | VP Research and Development
// //                 </p>
// //               </div>
// //               <div className="absolute top-0 right-0 m-2 text-[32px] text-primary">
// //                 {cardIndex - 1}
// //               </div>
// //             </CardHeader>
// //             <CardBody>
// //               <p className="text-[16px]  text-[#666666]">
// //                 Wonderful to work with, very experienced with UI/UX design. Was
// //                 very open to work in the flow we requested that required actual
// //                 Angular coding from his team as well, and stood up to the
// //                 challenge of working with a remot...
// //               </p>
// //             </CardBody>
// //           </Card>

// //           {/* const Cards: React.FC<CardProps> = ({ content, isLeft, cardIndex }) => { */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // HomePage component
// // const cardsContent = [
// //   "Card 1",
// //   "Card 2",
// //   "Card 3",
// //   "Card 4",
// //   "Card 5",
// //   "Card 6",
// //   // "Card 7",
// //   // "Card 8",
// //   // "Card 9",
// //   // "Card 10",
// //   // "Card 10",

// //   // Add more cards as needed
// // ];

// // const HomePageTest: React.FC = () => {
// //   useEffect(() => {
// //     const progressBarOverlay = document.querySelector(
// //       ".progress-bar"
// //     ) as HTMLElement;
// //     if (progressBarOverlay) {
// //       gsap.to(progressBarOverlay, {
// //         scrollTrigger: {
// //           trigger: ".container",
// //           start: "top top",
// //           end: "bottom 100px",
// //           scrub: true,
// //           onUpdate: (self) => {
// //             const progress = self.progress;
// //             const color = `hsl(${progress * 360}, 100%, 50%)`;
// //             progressBarOverlay.style.height = `${progress * 100}%`;
// //             progressBarOverlay.style.backgroundColor = "#7828C8";
// //           },
// //         },
// //         ease: "none",
// //       });
// //     }

// //     // Set up ScrollTrigger for each card
// //     workProcess.forEach((_, index) => {
// //       const cardBorder = document.querySelector(
// //         `#card-border-${index + 1}`
// //       ) as HTMLElement;

// //       if (cardBorder) {
// //         gsap.to(cardBorder, {
// //           scrollTrigger: {
// //             trigger: `#card-${index + 1}`,
// //             start: "top center",
// //             end: "center 200px",
// //             toggleActions: "play reverse play reverse",
// //             onEnter: () => (cardBorder.style.borderColor = "#7828C8"), // Change to your desired color
// //             onLeave: () => (cardBorder.style.borderColor = "transparent"),
// //             onEnterBack: () => (cardBorder.style.borderColor = "#7828C8"), // Change to your desired color
// //             onLeaveBack: () => (cardBorder.style.borderColor = "transparent"),
// //           },
// //         });
// //       }
// //     });
// //     return () => {
// //       // Clean up ScrollTrigger instances on component unmount
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, [workProcess]);
// //   return (
// //     <div className="container mx-auto px-4">
// //       <div className="text-center">
// //         <p className="text-primary text-[40px] leading-10">Scope of work</p>
// //         <p className="text-white text-[50px] mb-8">Process</p>
// //       </div>
// //       <div className="relative flex flex-wrap">
// //         {/* Vertical Line */}
// //         <div className="progress-bar-container absolute right-0 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full">
// //           <div className=" fixed top-0 right-0 md:left-1/2 h-full w-2 bg-[#262626] rounded">
// //             <div className="progress-bar w-full rounded"></div>
// //           </div>
// //         </div>
// //         {cardsContent.map((content, index) => (
// //           <Cards
// //             key={index}
// //             content={content}
// //             isLeft={index % 2 === 0}
// //             cardIndex={index + 1}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default HomePageTest;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

// // Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

// // Card component
// interface CardProps {
//   content: string;
//   isLeft: boolean;
//   cardIndex: number;
// }

// const Cards: React.FC<CardProps> = ({ content, isLeft, cardIndex }) => {
//   return (
//     <div
//       className={`relative w-[95vw] md:w-1/2 pl-4 md:pl-10 pr-8 py-4 mb-32 ${
//         isLeft ? "self-start" : "self-end"
//       }`}
//     >
//       <div className={`${cardIndex % 2 === 0 ? "md:-mb-60" : "md:mt-16"}`}>
//         <div className="shadow-md rounded-lg p-0" id={`card-${cardIndex}`}>
//           <Card className="p-3 pt-1 pr-2 pb-1 pl-2 shadow-lg bg-[#262626]">
//             <CardHeader className="relative flex gap-3">
//               <div className="flex flex-col">
//                 <p className="text-[20px] font-[600] font-nahomi text-[#666666]">
//                   Eden Hazani
//                 </p>
//                 <p className="text-[28px] font-[500] text-white">
//                   Xperiti | VP Research and Development
//                 </p>
//               </div>
//               <div className="absolute top-0 right-0 m-2 text-[32px] text-primary">
//                 {cardIndex}
//               </div>
//             </CardHeader>
//             <CardBody>
//               <p className="text-[16px] text-[#666666]">
//                 Wonderful to work with, very experienced with UI/UX design. Was
//                 very open to work in the flow we requested that required actual
//                 Angular coding from his team as well, and stood up to the
//                 challenge of working with a remote team...
//               </p>
//             </CardBody>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Array of content for the cards
// const cardsContent = [
//   "Card 1",
//   "Card 2",
//   "Card 3",
//   "Card 4",
//   "Card 5",
//   "Card 6",
//   // Add more cards as needed
// ];

// // Main component
// const HomePageTest: React.FC = () => {
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

//     // Set up ScrollTrigger for each card
//     cardsContent.forEach((_, index) => {
//       const cardBorder = document.querySelector(
//         `#card-${index + 1}`
//       ) as HTMLElement;

//       if (cardBorder) {
//         gsap.to(cardBorder, {
//           scrollTrigger: {
//             trigger: `#card-${index + 1}`,
//             start: "top center",
//             end: "center 200px",
//             toggleActions: "play reverse play reverse",
//             onEnter: () => (cardBorder.style.borderColor = "#7828C8"), // Change to your desired color
//             onLeave: () => (cardBorder.style.borderColor = "transparent"),
//             onEnterBack: () => (cardBorder.style.borderColor = "#7828C8"), // Change to your desired color
//             onLeaveBack: () => (cardBorder.style.borderColor = "transparent"),
//           },
//         });
//       }
//     });

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
//           <div className="fixed top-0 right-0 md:left-1/2 h-full w-2 bg-[#262626] rounded">
//             <div className="progress-bar w-full rounded"></div>
//           </div>
//         </div>
//         {cardsContent.map((content, index) => (
//           <Cards
//             key={index}
//             content={content}
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

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Card component
interface CardProps {
  content: string;
  isLeft: boolean;
  cardIndex: number;
}

const Cards: React.FC<CardProps> = ({ content, isLeft, cardIndex }) => {
  return (
    <div
      className={`relative w-[95vw] md:w-1/2 pl-4 md:pl-10 pr-8 py-4 mb-40 max-md:mb-4 ${
        isLeft ? "self-start" : "self-end"
      }`}
      id={`card-${cardIndex}`}
    >
      <div className={`${cardIndex % 2 === 0 ? "md:-mb-60" : "md:mt-16"}`}>
        <div
          className="shadow-md rounded-2xl p-0 border-3 border-transparent transition-colors duration-300 ease-in-out"
          id={`card-border-${cardIndex}`}
        >
          <Card className="p-3 pt-1 pr-2 pb-1 pl-2 shadow-lg bg-[#262626]">
            <CardHeader className="relative flex gap-3">
              <div className="flex flex-col">
                <p className="text-[20px] font-[600] font-nahomi text-[#666666]">
                  Eden Hazani
                </p>
                <p className="text-[28px] font-[500] text-white">
                  Xperiti | VP Research and Development
                </p>
              </div>
              <div className="absolute top-0 right-0 m-2 text-[32px] text-primary">
                {cardIndex}
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-[16px] text-[#666666]">
                Wonderful to work with, very experienced with UI/UX design. Was
                very open to work in the flow we requested that required actual
                Angular coding from his team as well, and stood up to the
                challenge of working with a remote team...
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Array of content for the cards
const cardsContent = [
  "Card 1",
  "Card 2",
  "Card 3",
  "Card 4",
  "Card 5",
  "Card 6",
  // Add more cards as needed
];

// Main component
const HomePageTest: React.FC = () => {
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

    // Set up ScrollTrigger for each card to animate border and fade out
    cardsContent.forEach((_, index) => {
      const card = document.querySelector(`#card-${index + 1}`) as HTMLElement;
      const cardBorder = document.querySelector(
        `#card-border-${index + 1}`
      ) as HTMLElement;

      if (card) {
        gsap.to(card, {
          scrollTrigger: {
            trigger: `#card-${index + 1}`,
            start: "top center",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              card.style.opacity = `${1 - self.progress}`;
            },
            toggleActions: "play reverse play reverse",
          },
        });
      }

      if (cardBorder) {
        gsap.to(cardBorder, {
          scrollTrigger: {
            trigger: `#card-${index + 1}`,
            start: "top center",
            end: "center 200px",
            toggleActions: "play reverse play reverse",
            onEnter: () => (cardBorder.style.borderColor = "#7828C8"), // Change border color when in view
            onLeave: () => (cardBorder.style.borderColor = "transparent"),
            onEnterBack: () => (cardBorder.style.borderColor = "#7828C8"), // Change border color when scrolling back
            onLeaveBack: () => (cardBorder.style.borderColor = "transparent"),
          },
        });
      }
    });

    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto px-0">
      <div
        className="text-center bg-[#1A1A1A] sticky top-0"
        style={{ zIndex: 99 }}
      >
        <p className="text-primary text-[40px] leading-10">Scope of work</p>
        <p className="text-white text-[50px] mb-8">Process</p>
      </div>
      {/* <div className="h-[60%] overflow-scroll"> */}
      <div className="relative flex flex-wrap" id="div2">
        {/* Vertical Line */}
        <div className="progress-bar-container absolute right-0 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          <div className="fixed top-0 right-0 md:left-1/2 h-full w-2 bg-[#262626] rounded">
            <div className="progress-bar w-full rounded"></div>
          </div>
        </div>
        {cardsContent.map((content, index) => (
          <Cards
            key={index}
            content={content}
            isLeft={index % 2 === 0}
            cardIndex={index + 1}
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default HomePageTest;
