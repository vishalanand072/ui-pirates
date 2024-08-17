import Image from "next/image";
import * as PhosphorIcons from "@phosphor-icons/react";
import { Card, CardBody } from "@nextui-org/react";
import {
  DiamondsFour,
  UserFocus,
  PenNib,
  Cube,
  Code,
} from "@phosphor-icons/react";

const data = [
  {
    title: "User Research",
    icon: <UserFocus size={34} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "User Research",
    icon: <PenNib size={34} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "User Research",
    icon: <Cube size={34} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "User Research",
    icon: <Code size={34} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
];

const UIDesignCard = (props: any) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {props.card &&
          props.card.map((item: any, index: any) => {
            const IconComponent = PhosphorIcons[
              item.icon as keyof typeof PhosphorIcons
            ] as any;
            return (
              <Card className="bg-transparent border-1 border-[#323232] shadow-none text-white p-4">
                <CardBody>
                  <div className="flex flex-row items-center justify-between mb-3">
                    <p className="text-lg font-semibold">{item.heading}</p>
                    {/* {item.icon} */}
                    {IconComponent && <IconComponent size={34} weight="fill" />}
                  </div>
                  <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {item.list.map((items: any, indexs: any) => {
                      return (
                        <div className="flex flex-row items-center gap-3">
                          <DiamondsFour
                            size={22}
                            weight="fill"
                            color="#323232"
                          />
                          <p className="text-lg">{items}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default UIDesignCard;
