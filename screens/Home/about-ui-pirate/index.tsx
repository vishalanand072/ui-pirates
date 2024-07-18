import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AboutCard from "./aboutCard";

const AboutUIpirates: React.FC = () => {
  return (
    <NextUIProvider>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <AboutCard />
      </div>
    </NextUIProvider>
  );
};
export default AboutUIpirates;