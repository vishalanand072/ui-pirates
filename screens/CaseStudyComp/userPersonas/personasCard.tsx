import { Card, CardBody } from "@nextui-org/react";
import { DiamondsFour } from "@phosphor-icons/react";
import Image from "next/image";
import user from "@/public/userPersonal.jpeg";

const PersonasCard = (props: any) => {
  return (
    <>
      {props.card &&
        props.card.map((item: any, index: any) => {
          return (
            <Card className="mb-12">
              <CardBody
                className="grid grid-cols-2 max-md:grid-cols-1 overflow-hidden"
                style={{ padding: 0 }}
              >
                <div className="relative bg-orange-500 h-full">
                  <Image
                    src={item.image}
                    alt="Client"
                    width={360}
                    height={460}
                    className="w-full h-full"
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

                <div className="bg-secondary-900 p-8">
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

                  <Card className="p-0 bg-transparent border-1 mt-3 border-[#323232]">
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

                  <Card className="p-0 bg-transparent border-1 mt-3 border-[#323232]">
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
