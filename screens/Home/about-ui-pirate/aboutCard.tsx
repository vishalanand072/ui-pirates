import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Meteors from "@/components/magicui/meteors";

interface AboutCardProps {
  // title: string;
  // subTitle: string;
  cardColor: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ cardColor }) => {
  return (
    <div className="flex flex-row items-end justify-end w-full">
      <Card
        className="shadow-none w-[95%] md:w-[95%] content-end mt-12 p-12  max-md:p-8"
        style={{
          borderRadius: "56px",
          backgroundColor: cardColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Meteors />

        <CardHeader className="flex flex-col">
          <div className="" style={{ alignSelf: "flex-start" }}>
            <video
              autoPlay
              muted
              loop
              style={{ borderRadius: "999px" }}
              className="max-md:h-[100px] h-[150px]"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-col mt-2 md:mt-8">
            <p
              className="text-default-500 text-[80px] max-md:text-[32px] leading-none"
              style={{
                fontWeight: 500,
                // lineHeight: "40px",
                color: "#3C1E1E",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className="flex flex-col" style={{ marginTop: "auto" }}>
            <p
              className="text-lg text-[36px] max-md:text-[22px]"
              style={{
                fontWeight: 400,
                lineHeight: "40px",
                color: "#6F6F6F",
                textAlign: "left",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              voluptatem sequi impedit labore, vero error consectetur
              exercitationem ratione laudantium deserunt.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutCard;

// import React, { useRef, useEffect } from "react";
// import { Card, CardHeader, CardBody } from "@nextui-org/react";
// import Meteors from "@/components/magicui/meteors";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// interface AboutCardProps {
//   title: string;
//   subTitle: string;
//   cardColor: string;
//   id: number;
// }

// const AboutCard: React.FC<AboutCardProps> = ({
//   title,
//   subTitle,
//   cardColor,
//   id,
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (videoRef.current && cardRef.current) {
//       gsap.registerPlugin(ScrollTrigger);

//       gsap.fromTo(
//         videoRef.current,
//         { x: 0 },
//         {
//           x: cardRef.current.offsetWidth - videoRef.current.offsetWidth,
//           ease: "none",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "left center",
//             end: "right center",
//             scrub: 1,
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div className="flex flex-row items-end justify-end w-full">
//       <Card
//         ref={cardRef}
//         className="shadow-lg w-[95%] md:w-[95%] content-end mt-12 p-12  max-md:p-8"
//         style={{
//           borderRadius: "56px",
//           backgroundColor: cardColor,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Meteors />

//         <CardHeader className="flex flex-col">
//           <div className="" style={{ alignSelf: "flex-start" }}>
//             <video
//               ref={videoRef}
//               autoPlay
//               muted
//               loop
//               style={{ borderRadius: "999px" }}
//               className="max-md:h-[100px] h-[150px]"
//             >
//               <source
//                 src="https://www.w3schools.com/html/mov_bbb.mp4"
//                 type="video/mp4"
//               />
//             </video>
//           </div>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4">
//           <div className="flex flex-col mt-2 md:mt-8">
//             <p
//               className="text-default-500 text-[80px] max-md:text-[32px] line-clamp-[0px]"
//               style={{
//                 fontWeight: 500,
//                 color: "#3C1E1E",
//                 textAlign: "left",
//               }}
//             >
//               {title}
//               {id}
//             </p>
//           </div>
//           <div className="flex flex-col" style={{ marginTop: "auto" }}>
//             <p
//               className="text-sm text-[36px] max-md:text-[22px]"
//               style={{
//                 fontWeight: 400,
//                 lineHeight: "40px",
//                 color: "#6F6F6F",
//                 textAlign: "left",
//               }}
//             >
//               {subTitle}
//             </p>
//           </div>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default AboutCard;
