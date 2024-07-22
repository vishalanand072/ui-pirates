import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const AboutCard = (props: any) => {
  return (
    <div className="flex flex-row items-end justify-end w-full">
      <Card
        className="shadow-lg w-[95%] md:w-[95%] content-end mt-12 p-12  max-md:p-8"
        style={{
          borderRadius: "56px",
          backgroundColor: `${props.cardColor}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader className="flex flex-col">
          <div className="" style={{ alignSelf: "flex-start" }}>
            <video
              // width="600px"
              // height="120px"
              // controls
              // autoPlay
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
              className="text-default-500 text-[50px] max-md:text-[32px] line-clamp-[0px]"
              style={{
                // fontFamily: "Nohemi",
                fontWeight: 500,
                // lineHeight: "50px",
                color: "#3C1E1E",
                textAlign: "left",
              }}
            >
              We Excel with Minimal Client Involvement
            </p>
          </div>
          <div className="flex flex-col" style={{ marginTop: "auto" }}>
            <p
              className="text-sm text-[26px] max-md:text-[22px]"
              style={{
                // fontFamily: "Nohemi",
                fontWeight: 400,
                lineHeight: "28px",
                color: "#6F6F6F",
                textAlign: "left",
              }}
            >
              Our efficient workflows ensure minimal client interaction,
              allowing you to focus on your business while we deliver
              outstanding results.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutCard;
