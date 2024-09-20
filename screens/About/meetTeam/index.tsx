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

const data1 = [
  {
    name: "Vishal Anand",
    dezignation: "Ex-PM Tower Research Capital, 8+ years experience",
    discription:
      "Andy loves a good adventure — like traveling to Italy and Spain or starting new companies like Mindtrip. A serial entrepreneur, Andy has more than 20 years of expertise in launching and running successful online commerce companies. Prior to starting Mindtrip, Andy founded Roadster, an automotive retailing platform; FabKids, an online children’s apparel company; ShopStyle, the leading fashion search engine; and Cairo, an online service for retail discounts. He also held executive positions in business development at DemandTec and Ariba. Andy holds a Bachelor of Science degree from the University of Manchester, England.",
    media: "/assets/rohitjha.svg",
    exp: "/assets/rohitjhaexp.svg",
  },
  {
    name: "Syed Musuddiq",
    dezignation: "Ex-CEO of Beacon, 20+ years experience",
    discription:
      "Andy loves a good adventure — like traveling to Italy and Spain or starting new companies like Mindtrip. A serial entrepreneur, Andy has more than 20 years of expertise in launching and running successful online commerce companies. Prior to starting Mindtrip, Andy founded Roadster, an automotive retailing platform; FabKids, an online children’s apparel company; ShopStyle, the leading fashion search engine; and Cairo, an online service for retail discounts. He also held executive positions in business development at DemandTec and Ariba. Andy holds a Bachelor of Science degree from the University of Manchester, England.",
    media: "/assets/rohitberi.svg",
  },
  {
    name: "Danish Ansari",
    dezignation: "Co-founder",
    discription:
      "Andy loves a good adventure — like traveling to Italy and Spain or starting new companies like Mindtrip. A serial entrepreneur, Andy has more than 20 years of expertise in launching and running successful online commerce companies. Prior to starting Mindtrip, Andy founded Roadster, an automotive retailing platform; FabKids, an online children’s apparel company; ShopStyle, the leading fashion search engine; and Cairo, an online service for retail discounts. He also held executive positions in business development at DemandTec and Ariba. Andy holds a Bachelor of Science degree from the University of Manchester, England.",
    media: "/assets/rohitberi.svg",
  },
];
const MeetTeam = () => {
  return (
    <>
      <div>
        <p className="text-4xl max-md:text-3xl font-semibold mt-16 max-md:text-center">
          Meet The Team
        </p>
        <div className="mt-4">
          {data1.map((item, index) => {
            return (
              <Card className=" shadow-none my-12">
                <CardBody className="grid grid-cols-5 max-md:grid-cols-1  border-none">
                  <div className="flex items-start justify-start max-md:mt-12">
                    <Image
                      src={item.media}
                      alt={""}
                      width={360}
                      height={360}
                      className="w-[80%]"
                    />
                  </div>
                  <div className="md:col-span-4">
                    <p className="medium-heading ">{item.name}</p>
                    <p className="text-xl my-2 text-[#B6B6B6] max-md:text-lg">
                      {item.dezignation}
                    </p>
                    <p className="text-md text-[#6B7280] max-md:text-sm ">
                      {item.discription}
                    </p>
                    <LinkedinLogo
                      size={30}
                      weight="fill"
                      className="mt-2 fill-[#6B7280]"
                    />
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MeetTeam;
