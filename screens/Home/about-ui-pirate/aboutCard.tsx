import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
/*
import Meteor

export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  );
}
*/

const AboutCard: React.FC = () => {
  return (
    <div className="flex flex-row items-end justify-end">
      <Card
        className="shadow-lg w-full md:w-3/4 content-end mt-12 p-12 max-md:p-8"
        style={{
          borderRadius: "56px",
          backgroundColor: "#EEEEEE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader className="flex flex-col">
          <div className="flex-shrink-0" style={{ alignSelf: "flex-start" }}>
            <video
              // width="600px"
              // height="320px"
              controls
              preload="none"
              style={{ borderRadius: "999px" }}
            >
              <source
                src="https://s3-figma-videos-production-sig.figma.com/video/1375060596090973966/TEAM/a0b7/a77a/-8cc0-4e65-a98d-5ff8db4e56a8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WWzVz8mZF2Db3dS26By2hfv-ji70PiaszmTXYTadiRS-L33ycqpAa9oiHIKdu-53uxd3BMWslpjgkfjbwOrSgU3O~d~b7AuTQ~F80nEiQTaOKneue-6Fisf9sQJo-Uf2eIqshZdNY3HqExCyK7G6aG0cNkPd70hh1L6H2euB8GF5ga2Sc -WOyKdiNqwxfidYNUwSLOd07XjEEowVKbHa3~~Kc~xu8wqf0VqrQv1I5kEV4yu4MAeBQ6BwdreKKjoGlkMzBqSuqyDeGl9vUhpFe0EZZJXMoc3pBwjQeg88G51v0CuRuBdYCVz2LYcjmouYubXt9luOudgGwuayVSxUQw__"
                type="video/mp4"
              />
              <video loop />
            </video>
          </div>
        </CardHeader>
        <CardBody
          className="flex flex-col gap-4"
          style={{ paddingTop: "40px" }}
        >
          <div className="flex flex-col" style={{ marginTop: "40px" }}>
            <p
              className="text-default-500"
              style={{
                fontFamily: "Nohemi",
                fontWeight: 500,
                fontSize: "50px",
                lineHeight: "50px",
                color: "#3C1E1E",
                textAlign: "left",
              }}
            >
              We Excel with Minimal Client Involvement
            </p>
          </div>
          <div
            className="flex flex-col"
            style={{ marginTop: "auto", paddingBottom: "40px" }}
          >
            <p
              className="text-sm"
              style={{
                fontFamily: "Nohemi",
                fontWeight: 400,
                fontSize: "26px",
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
