import { Card, CardBody } from "@nextui-org/react";
import { PhosphorLogo } from "@phosphor-icons/react";
import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";

const Assets = () => {
  return (
    <>
      <p className="text-subtitle text-3xl font-semibold mb-3">Assets</p>
      <Card className="bg-none shadow-none border-1">
        <CardBody>
          <p className="text-subtitle text-2xl font-semibold mb-3">Assets</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            <div>
              <Card className="bg-[#C4E456] shadow-none border-1">
                <CardBody className="items-center">
                  <PhosphorLogo size={70} weight="fill" />
                  <p className="text-2xl font-semibold mb-3">Phosphor Icons</p>
                </CardBody>
              </Card>
              <p className="text-xl font-semibold my-4">
                We chose Phosphor Icons for Xperiti because:
              </p>
              {[...Array(3)].map((_, i) => (
                <div className="flex flex-row items-center gap-2 my-2">
                  <PhosphorLogo size={27} weight="fill" />
                  <div>
                    <p className="text-lg text-subtitle">
                      {" "}
                      <span className="text-black font-semibold">
                        Versatility:
                      </span>{" "}
                      Wide range of icons fitting various design needs.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Card className="bg-[#F2F2F2] shadow-none border-0">
                <CardBody>
                  <p className="text-subtitle text-xl font-semibold mb-3">
                    Assets
                  </p>
                  <div className="grid grid-cols-8 max-md:grid-cols-4 max-lg:grid-cols-6 gap-y-4">
                    {[...Array(16)].map((_, i) => (
                      <PhosphorLogo
                        size={54}
                        className="bg-white p-1 rounded-lg"
                      />
                    ))}
                  </div>

                  <p className="text-subtitle text-xl font-semibold my-3">
                    Assets
                  </p>
                  <div className="grid grid-cols-8 max-md:grid-cols-4 max-lg:grid-cols-6 gap-y-4">
                    {[...Array(16)].map((_, i) => (
                      <PhosphorLogo
                        size={54}
                        weight="fill"
                        className="bg-white p-1 rounded-lg"
                      />
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="bg-none shadow-none border-1">
        <CardBody>
          <p className="text-subtitle text-xl font-semibold mb-3 uppercase">
            Illustrations
          </p>
          <div className="flex flex-row items-center justify-between gap-4">
            <Image
              src={img1}
              alt="Client"
              width={100}
              height={100}
              className="w-[20%]"
            />
            <Image src={img2} alt="Client" className="w-[75%] h-[50%]" />
          </div>

          <Card className="bg-none shadow-none border-1 mt-3">
            <CardBody className=" items-center">
              <Image src={img3} alt="Client" className="w-[15%] h-[50%]" />
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </>
  );
};

export default Assets;
