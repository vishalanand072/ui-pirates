import { Card, CardBody } from "@nextui-org/react";
import Assets from "./assets";
const ValuesUiElement = () => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
        <div className="flex justify-between items-center my-12">
          <h1 className="text-black heading">Visual & UI Elements</h1>
          <span className="text-gray-300 text-6xl font-light max-lg:text-5xl max-md:text-4xl">
            07
          </span>
        </div>

        <div className="flex flex-row items-center justify-between max-md:flex-col max-md:justify-start max-md:items-start">
          <div>
            <p className="text-subtitle text-2xl font-semibold uppercase">
              Typography
            </p>
            <p className="text-8xl font-extrabold">Inter</p>
            <p className=" text-lg mt-2 md:w-[70%]">
              The Inter font is used to reflect a modern and clean aesthetic,
              enhancing readability and user experience across digital
              platforms.
            </p>
          </div>
          <div className="max-md:mt-4">
            <ol>
              <li className="text-[22px]">Regular</li>
              <li className="text-[22px] font-medium">Medium</li>
              <li className="text-[22px] font-semibold">Semi Bold</li>
              <li className="text-[22px] font-bold">Bold</li>
              <li className="text-[22px] font-extrabold">Extra Bold</li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 my-8">
          <Card className="border-0 shadow-none bg-black text-white">
            <CardBody className="justify-center">
              <p className=" uppercase text-lg tracking-widest ">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-lg tracking-widest ">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className=" uppercase text-lg tracking-widest ">0123456789</p>
            </CardBody>
          </Card>

          <Card
            className="border-0 shadow-none bg-[#009D9C] text-white py-0"
            style={{ padding: 0 }}
          >
            <CardBody style={{ padding: 0 }}>
              <p className="text-[200px] text-center font-bold p-0 leading-none overflow-hidden pb-5 ">
                Aa
              </p>
            </CardBody>
          </Card>
        </div>

        <Assets />
      </div>
    </>
  );
};

export default ValuesUiElement;
