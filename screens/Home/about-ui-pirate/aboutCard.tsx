import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface AboutCardProps {
  title: string;
  subTitle: string;
  cardColor: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  subTitle,
  cardColor,
}) => {
  return (
    <div className="flex flex-row items-end justify-end w-full">
      <Card
        className="shadow-lg w-[95%] md:w-[95%] content-end mt-12 p-12  max-md:p-8"
        style={{
          borderRadius: "56px",
          backgroundColor: cardColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader className="flex flex-col">
          <div className="" style={{ alignSelf: "flex-start" }}>
            <video
              autoPlay
              muted
              loop
              style={{ borderRadius: "999px" }}
              className="max-md:h-[100px] h-[150px]"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-col mt-2 md:mt-8">
            <p
              className="text-default-500 text-[80px] max-md:text-[32px] line-clamp-[0px]"
              style={{
                fontWeight: 500,
                color: "#3C1E1E",
                textAlign: "left",
              }}
            >
              {title}
            </p>
          </div>
          <div className="flex flex-col" style={{ marginTop: "auto" }}>
            <p
              className="text-sm text-[36px] max-md:text-[22px]"
              style={{
                fontWeight: 400,
                lineHeight: "40px",
                color: "#6F6F6F",
                textAlign: "left",
              }}
            >
              {subTitle}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutCard;
