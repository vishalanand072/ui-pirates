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
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Card component
interface CardProps {
  content: string;
  isLeft: boolean;
}

const Cards: React.FC<CardProps> = ({ content, isLeft }) => {
  return (
    <div
      className={`relative w-full md:w-1/2 p-4 ${
        isLeft ? "self-start mt-4" : "self-end"
      }`}
    >
      <div className="shadow-md rounded-lg p-0">
        <Card className="p-3 pt-1 pr-2 pb-1 pl-2  shadow-lg ">
          <CardHeader className="relative flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="full"
              src="https://s3-alpha-sig.figma.com/img/dda1/c9db/7f754087536a4934bed9d9bc62259be9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzI6ynM54CSjqL1CCEu3Y8MV7PhJaPOnSkFPbn4X3UQvvimWpq~Wpp3vHID7BYZk7FDbYevyglInb0BzdIacTGplIq~Enbht8QwBzsL0ucvYQHb4NkB~0dM7HtVAPnDjE~66GizjM6zAeb9BI7pC0dfo6svSq7nyZ9t~4ANwbPLk7iWnb6QuW3ZEfgJvft9Y8sP8bI26hpBPGvUPwWDg7rvVsE4QTcReKw77eT-LbxLxOUhLTvRJqaB-LkcTJ3biX1Abj3gAIQyqpCmM18sPc3~8~3OtEgTpUnxt0vjj3NeyEUAW-mbYuirB1~Qds2Lt5BH8KmpO3kbnxxHJnXu-GQ__"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md font-extrabold font-nahomi">Eden Hazani</p>
              <p className="text-small text-default-500">
                Xperiti | VP Research and Development
              </p>
            </div>
            {/* <div className="absolute top-0 right-0 m-2">
              <Logo />
            </div> */}
          </CardHeader>
          <CardBody>
            <p className="text-sm font-bold">
              Wonderful to work with, very experienced with UI/UX design. Was
              very open to work in the flow we requested that required actual
              Angular coding from his team as well, and stood up to the
              challenge of working with a remot...
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

// HomePage component
const cardsContent = [
  "Card 1",
  "Card 2",
  "Card 3",
  "Card 4",
  "Card 5",
  "Card 6",
  "Card 7",
  "Card 8",
  "Card 9",
  "Card 10",
  // Add more cards as needed
];

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
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const color = `hsl(${progress * 360}, 100%, 50%)`;
            progressBarOverlay.style.height = `${progress * 100}%`;
            progressBarOverlay.style.backgroundColor = "#e7e7e7";
          },
        },
        ease: "none",
      });
    }

    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative flex flex-wrap">
        {/* Vertical Line */}
        <div className="progress-bar-container absolute right-0 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          <div className=" fixed top-0 right-0 md:left-1/2 h-full w-2 bg-[#1A1A1A] rounded">
            <div className="progress-bar w-full rounded"></div>
          </div>
        </div>
        {cardsContent.map((content, index) => (
          <Cards key={index} content={content} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default HomePageTest;
