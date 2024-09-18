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
    icon: <ShieldCheck size={70} weight="fill" className="fill-primary" />,
    title: "True",
  },
  {
    icon: <SealCheck size={70} weight="fill" className="fill-primary" />,
    title: "Reliability",
  },
  {
    icon: <CalendarCheck size={70} weight="fill" className="fill-primary" />,
    title: "On-time delivery",
  },
  {
    icon: <ClipboardText size={70} weight="fill" className="fill-primary" />,
    title: "Result Oriented",
  },
  {
    icon: <CubeTransparent size={70} weight="fill" className="fill-primary" />,
    title: "Transparency",
  },
  {
    icon: <ListChecks size={70} weight="fill" className="fill-primary" />,
    title: "Quality",
  },
];

const data1 = [
  {
    name: "Rohit Jha",
    dezignation: "Ex-PM Tower Research Capital, 8+ years experience",
    discription:
      "Andy loves a good adventure — like traveling to Italy and Spain or starting new companies like Mindtrip. A serial entrepreneur, Andy has more than 20 years of expertise in launching and running successful online commerce companies. Prior to starting Mindtrip, Andy founded Roadster, an automotive retailing platform; FabKids, an online children’s apparel company; ShopStyle, the leading fashion search engine; and Cairo, an online service for retail discounts. He also held executive positions in business development at DemandTec and Ariba. Andy holds a Bachelor of Science degree from the University of Manchester, England.",
    media: "/assets/rohitjha.svg",
    exp: "/assets/rohitjhaexp.svg",
  },
  {
    name: "Rohit Beri",
    dezignation: "Ex-CEO of Beacon, 20+ years experience",
    discription:
      "Andy loves a good adventure — like traveling to Italy and Spain or starting new companies like Mindtrip. A serial entrepreneur, Andy has more than 20 years of expertise in launching and running successful online commerce companies. Prior to starting Mindtrip, Andy founded Roadster, an automotive retailing platform; FabKids, an online children’s apparel company; ShopStyle, the leading fashion search engine; and Cairo, an online service for retail discounts. He also held executive positions in business development at DemandTec and Ariba. Andy holds a Bachelor of Science degree from the University of Manchester, England.",
    media: "/assets/rohitberi.svg",
    exp: "/assets/rohitberiexp.svg",
  },
  {
    name: "Bonnie Green",
    dezignation: "Co-founder",
    discription:
      "Andy loves a good adventure — like traveling to Italy and Spain or starting new companies like Mindtrip. A serial entrepreneur, Andy has more than 20 years of expertise in launching and running successful online commerce companies. Prior to starting Mindtrip, Andy founded Roadster, an automotive retailing platform; FabKids, an online children’s apparel company; ShopStyle, the leading fashion search engine; and Cairo, an online service for retail discounts. He also held executive positions in business development at DemandTec and Ariba. Andy holds a Bachelor of Science degree from the University of Manchester, England.",
    media: "/assets/rohitberi.svg",
    exp: "/assets/rohitberiexp.svg",
  },
];
const CoreValues = () => {
  return (
    <>
      <div>
        <p className="text-4xl max-md:text-3xl font-semibold mb-8">
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
                      <p className="text-2xl font-semibold">{item.title}</p>
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
              <p>
                Founded with a passion for design, UI Pirates has been
                delivering top-notch digital experiences. We believe in the
                power of creativity and the impact of thoughtful design.
              </p>
            </CardBody>
          </Card>
          <Card className="shadow-none border-1 rounded-[30px]">
            <CardBody className="p-6">
              <p className="medium-heading  text-[#3C1E1E] mb-2">Our Story</p>
              <p>
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
