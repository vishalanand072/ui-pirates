import Image from "next/image";
import PenNib from "@/public/images/PenNib.svg";
import { Card, CardBody } from "@nextui-org/react";
import { DiamondsFour } from "@phosphor-icons/react";

const data = [
  {
    title: "User Research",
    icon: <DiamondsFour size={18} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "User Research",
    icon: <DiamondsFour size={18} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "User Research",
    icon: <DiamondsFour size={18} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "User Research",
    icon: <DiamondsFour size={18} weight="fill" />,
    item: [
      "Interviews & Surveys",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
];

const UIDesignCard = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {data.map((item, index) => {
          return (
            <Card className="bg-transparent border-1 border-[#e7e7e7] shadow-none text-white p-4">
              <CardBody>
                <div className="flex flex-row items-center justify-between mb-3">
                  <p>{item.title}</p>
                  {item.icon}
                </div>
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                  {item.item.map((items, indexs) => {
                    return (
                      <div className="flex flex-row items-center gap-3">
                        <DiamondsFour size={18} weight="fill" />
                        <p>{items}</p>
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
