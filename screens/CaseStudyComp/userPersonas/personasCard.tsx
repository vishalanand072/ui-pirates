import { Card, CardBody } from "@nextui-org/react";
import { DiamondsFour } from "@phosphor-icons/react";
import Image from "next/image";
import user from "@/public/userPersonal.jpeg";

const PersonasCard = () => {
  return (
    <>
      <Card className="">
        <CardBody
          className="grid grid-cols-2 max-md:grid-cols-1 overflow-hidden"
          style={{ padding: 0 }}
        >
          <div className="relative bg-orange-500">
            <Image
              src={user}
              alt="Client"
              width={360}
              height={360}
              className="w-[100%] h-[100%] max-md:h-[120%]"
            />
            <div className=" absolute bottom-8 left-8 w-full max-md:top-1 max-lg:bottom-2">
              <p className="text-white text-8xl font-semibold max-lg:text-6xl max-md:text-3xl max-md:mt-6">
                Rachel
              </p>
              <p className="text-white text-[28px]">32,  Client</p>
              <Card className="p-0 bg-transparent border-1 border-[#323232] w-[90%] max-lg:w-[85%] blurred-background">
                <CardBody className="w-full">
                  <div className="flex flex-row items-center gap-4">
                    <p className="text-lg text-subtitle font-semibold">type</p>
                    <p className="text-lg font-medium text-white">Corporate</p>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <p className="text-lg text-subtitle font-semibold">type</p>
                    <p className="text-lg font-medium text-white">Corporate</p>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <p className="text-lg text-subtitle font-semibold">type</p>
                    <p className="text-lg font-medium text-white">Corporate</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="bg-secondary-900 p-8 max-md:mt-8">
            <Card className="p-0 bg-transparent border-1 border-[#323232]">
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

            <Card className="p-0 bg-transparent border-1 mt-3 border-[#323232]">
              <CardBody className="">
                <div>
                  <p className="text-2xl text-white font-semibold">Bio</p>
                  {[...Array(3)].map((_, i) => (
                    <div className="flex flex-row items-center gap-2 my-2">
                      <DiamondsFour size={21} weight="fill" color="#323232" />
                      <p className="text-md font-medium text-[#A3A3A3]">
                        Efficiently manage multiple studies concurrently
                      </p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="p-0 bg-transparent border-1 mt-3 border-[#323232]">
              <CardBody className="">
                <div>
                  <p className="text-2xl text-white font-semibold">Bio</p>
                  {[...Array(3)].map((_, i) => (
                    <div className="flex flex-row items-center gap-2 my-2">
                      <DiamondsFour size={21} weight="fill" color="#323232" />
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
