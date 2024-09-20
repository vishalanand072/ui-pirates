import { Card, CardBody } from "@nextui-org/react";
import {
  ShieldCheck,
  SealCheck,
  CalendarCheck,
  ClipboardText,
  CubeTransparent,
  ListChecks,
} from "@phosphor-icons/react";
import Image from "next/image";
import { LinkedinLogo } from "@phosphor-icons/react";

const data = [
  {
    icon: (
      <ShieldCheck
        size={70}
        weight="fill"
        className="fill-primary max-md:w-[40px] max-md:h-[40px]"
      />
    ),
    title: "True",
  },
  {
    icon: (
      <SealCheck
        size={70}
        weight="fill"
        className="fill-primary max-md:w-[40px] max-md:h-[40px]"
      />
    ),
    title: "Reliability",
  },
  {
    icon: (
      <CalendarCheck
        size={70}
        weight="fill"
        className="fill-primary max-md:w-[40px] max-md:h-[40px]"
      />
    ),
    title: "On-time delivery",
  },
  {
    icon: (
      <ClipboardText
        size={70}
        weight="fill"
        className="fill-primary max-md:w-[40px] max-md:h-[40px]"
      />
    ),
    title: "Result Oriented",
  },
  {
    icon: (
      <CubeTransparent
        size={70}
        weight="fill"
        className="fill-primary max-md:w-[40px] max-md:h-[40px]"
      />
    ),
    title: "Transparency",
  },
  {
    icon: (
      <ListChecks
        size={70}
        weight="fill"
        className="fill-primary max-md:w-[40px] max-md:h-[40px]"
      />
    ),
    title: "Quality",
  },
];

const CoreValues = () => {
  return (
    <>
      <div>
        <p className="text-4xl max-md:text-3xl font-semibold mb-8 max-md:text-center">
          Our Core Values
        </p>
        <div>
          <Card className="shadow-none border-1 rounded-[30px]">
            <CardBody>
              <div className=" grid grid-cols-3 max-md:grid-cols-2">
                {data.map((item, index) => {
                  return (
                    <div className="flex flex-col items-center justify-center py-12">
                      {item.icon}
                      <p className="text-2xl font-semibold max-md:text-lg max-lg:text-xl">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </div>
        <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-6">
          <Card className="shadow-none border-1 rounded-[30px]">
            <CardBody className="p-6">
              <p className="medium-heading  text-[#3C1E1E] mb-2">Our Story</p>
              <p className="max-md:text-sm">
                Founded with a passion for design, UI Pirates has been
                delivering top-notch digital experiences. We believe in the
                power of creativity and the impact of thoughtful design.
              </p>
            </CardBody>
          </Card>
          <Card className="shadow-none border-1 rounded-[30px]">
            <CardBody className="p-6">
              <p className="medium-heading  text-[#3C1E1E] mb-2">Our Story</p>
              <p className="max-md:text-sm">
                Founded with a passion for design, UI Pirates has been
                delivering top-notch digital experiences. We believe in the
                power of creativity and the impact of thoughtful design.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CoreValues;
