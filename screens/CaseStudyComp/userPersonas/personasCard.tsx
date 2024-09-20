import { Card, CardBody } from "@nextui-org/react";
import { useEffect } from "react";
import { DiamondsFour } from "@phosphor-icons/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonasCard = (props: any) => {
  // useEffect(() => {
  //   // Get all cards and apply the animation
  //   props.card.forEach((item: any, index: any) => {
  //     const cardId = `card-${index}`;

  //     // Animation for the card based on whether it's even or odd
  //     gsap.fromTo(
  //       `#${cardId}`,
  //       {
  //         opacity: 0,
  //         x: index % 2 === 0 ? -300 : 300,
  //       },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 2,
  //         scrollTrigger: {
  //           trigger: `#${cardId}`,
  //           start: "top center",
  //           end: "center bottom",
  //           scrub: 1,
  //         },
  //       }
  //     );
  //   });
  // }, [props.card]);

  return (
    <>
      {props.card &&
        props.card.map((item: any, index: any) => {
          const cardId = `card-${index}`;
          return (
            <Card
              className={
                index % 2 === 0
                  ? "mb-12 overflow-hidden"
                  : "my-12 overflow-hidden" // this is the => my-12 overflow-hidden mt-40 max-md:mt-80
              }
              id={cardId}
              key={cardId}
            >
              <CardBody
                className="flex flex-row max-md:flex-col overflow-hidden bg-[#323232]"
                style={{ padding: 0 }}
              >
                <div className="relative bg-orange-500 md:w-1/2 max-h-[600px] ">
                  <Image
                    src={item.image}
                    alt="Client"
                    width={360}
                    height={460}
                    className="w-full h-full max-md:min-h-[400px]"
                  />
                  <div className=" absolute bottom-8 left-8 w-full ">
                    <p className="text-white text-8xl font-semibold max-lg:text-6xl max-md:text-3xl max-md:mt-6">
                      {item.name}
                    </p>
                    <p className="text-white text-[28px]">
                      {item.smallDiscription}
                    </p>
                    <Card className="p-0 bg-transparent border-1 border-[#323232] w-[90%] max-lg:w-[85%] blurred-background">
                      <CardBody className="w-full">
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-lg text-subtitle font-semibold uppercase">
                            type
                          </p>
                          <p className="text-lg font-medium text-white">
                            {item.type}
                          </p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-lg text-subtitle font-semibold uppercase">
                            Gender
                          </p>
                          <p className="text-lg font-medium text-white">
                            {item.Gender}
                          </p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-lg text-subtitle font-semibold uppercase">
                            Occupation
                          </p>
                          <p className="text-lg font-medium text-white">
                            {item.Occupation}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                <div className="bg-secondary-900 p-8 flex flex-col md:w-1/2 max-md:p-4">
                  <Card className="p-0 bg-transparent border-1 border-[#323232]">
                    <CardBody className="">
                      <div>
                        <p className="text-2xl text-white font-semibold">Bio</p>
                        <p className="text-md font-medium text-[#A3A3A3]">
                          {item.bio}
                        </p>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="p-0 bg-transparent border-1 mt-4 border-[#323232]">
                    <CardBody className="">
                      <div>
                        <p className="text-2xl text-white font-semibold">
                          Goals
                        </p>
                        {item.goals.map((item: any, index: any) => (
                          <div className="flex flex-row items-center gap-2 my-2">
                            <DiamondsFour
                              size={21}
                              weight="fill"
                              color="#323232"
                              className=" min-h-[21px] min-w-[21px]"
                            />
                            <p className="text-md font-medium text-[#A3A3A3]">
                              {item.item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="p-0 bg-transparent border-1 mt-4 border-[#323232]">
                    <CardBody className="">
                      <div>
                        <p className="text-2xl text-white font-semibold">
                          Pain Points
                        </p>
                        {item.painPoints.map((item: any, index: any) => (
                          <div className="flex flex-row items-center gap-2 my-2">
                            <DiamondsFour
                              size={21}
                              weight="fill"
                              color="#323232"
                              className=" min-h-[21px] min-w-[21px]"
                            />
                            <p className="text-md font-medium text-[#A3A3A3]">
                              {item.item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </CardBody>
            </Card>
          );
        })}
    </>
  );
};

export default PersonasCard;
