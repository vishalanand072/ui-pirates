import { Card, CardBody } from "@nextui-org/react";
import { DiamondsFour } from "@phosphor-icons/react";
import Image from "next/image";
import user from "@/public/userPersonal.jpeg";

const PersonasCard = () => {
  return (
    <>
      <Card className="p-0">
        <CardBody
          className="grid grid-cols-2 max-md:grid-cols-1"
          style={{ padding: 0 }}
        >
          <div className=" relative">
            <Image
              src={user}
              alt="Client"
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
            <div className=" absolute bottom-8 left-4 w-full">
              <p className="text-white text-8xl font-semibold">Rachel</p>
              <p className="text-white">32,  Client</p>
              <Card className="p-0 bg-transparent border-1 border-[#A3A3A3] w-[95%]">
                <CardBody className="w-full">
                  <div className="flex flex-row items-center gap-4">
                    <p className="text-lg text-white font-semibold">type</p>
                    <p className="text-lg font-medium text-[#A3A3A3]">
                      Corporate
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <p className="text-lg text-white font-semibold">type</p>
                    <p className="text-lg font-medium text-[#A3A3A3]">
                      Corporate
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <p className="text-lg text-white font-semibold">type</p>
                    <p className="text-lg font-medium text-[#A3A3A3]">
                      Corporate
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="bg-black p-4">
            <Card className="p-0 bg-transparent border-1 border-[#A3A3A3]">
              <CardBody className="">
                <div>
                  <p className="text-2xl text-white font-semibold">Bio</p>
                  <p className="text-md font-medium text-[#A3A3A3]">
                    Raechel is a seasoned market researcher at a consumer goods
                    company. She needs tools that enhance productivity and
                    accuracy, allowing her to oversee numerous studies and
                    gather actionable insights.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="p-0 bg-transparent border-1 mt-3 border-[#A3A3A3]">
              <CardBody className="">
                <div>
                  <p className="text-2xl text-white font-semibold">Bio</p>
                  {[...Array(3)].map((_, i) => (
                    <div className="flex flex-row items-center gap-2 my-2">
                      <DiamondsFour size={21} weight="fill" color="#A3A3A3" />
                      <p className="text-md font-medium text-[#A3A3A3]">
                        Efficiently manage multiple studies concurrently
                      </p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="p-0 bg-transparent border-1 mt-3 border-[#A3A3A3]">
              <CardBody className="">
                <div>
                  <p className="text-2xl text-white font-semibold">Bio</p>
                  {[...Array(3)].map((_, i) => (
                    <div className="flex flex-row items-center gap-2 my-2">
                      <DiamondsFour size={21} weight="fill" color="#A3A3A3" />
                      <p className="text-md font-medium text-[#A3A3A3]">
                        Efficiently manage multiple studies concurrently
                      </p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PersonasCard;
