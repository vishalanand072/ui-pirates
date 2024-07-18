import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Logo } from "@/components/icons";

const AboutCard: React.FC = () => {
  return (
    <Card className="shadow-lg" style={{
      width: "1338px",
      height: "264px",
      borderRadius: "56px",
      padding: "56px",
      gap: "40px",
      backgroundColor: "#EEEEEE"
    }}>
      <CardHeader className="relative flex gap-3">
        <video width="600" height="320" controls preload="none">
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1375060596090973966/TEAM/a0b7/a77a/-8cc0-4e65-a98d-5ff8db4e56a8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WWzVz8mZF2Db3dS26By2hfv-ji70PiaszmTXYTadiRS-L33ycqpAa9oiHIKdu-53uxd3BMWslpjgkfjbwOrSgU3O~d~b7AuTQ~F80nEiQTaOKneue-6Fisf9sQJo-Uf2eIqshZdNY3HqExCyK7G6aG0cNkPd70hh1L6H2euB8GF5ga2Sc-WOyKdiNqwxfidYNUwSLOd07XjEEowVKbHa3~~Kc~xu8wqf0VqrQv1I5kEV4yu4MAeBQ6BwdreKKjoGlkMzBqSuqyDeGl9vUhpFe0EZZJXMoc3pBwjQeg88G51v0CuRuBdYCVz2LYcjmouYubXt9luOudgGwuayVSxUQw__" type="video/mp4" />
          <video loop />
        </video>
        <div className="flex flex-col">
          <p className="text-default-500" style={{ 
            fontFamily: 'Nohemi', 
            fontWeight: 500, 
            fontSize: '108px', 
            lineHeight: '132px', 
            color: '#3C1E1E' 
          }}>
            We Excel with Minimal Client Involvement
          </p>
        </div>
        <div className="absolute top-0 right-0 m-2">
          <Logo />
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm font-bold" style={{
          fontFamily: 'Nohemi',
          fontWeight: '400',
          fontSize: '32',
          lineHeight: '48',
          color: '#6F6F6F',
        }}>
          Our efficient workflows ensure minimal client interaction, allowing you to focus on your business while we deliver outstanding results.
        </p>
      </CardBody>
    </Card>
  );
}

export default AboutCard;
