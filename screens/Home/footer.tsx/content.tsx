"use client";
import { Logo } from "@/components/icons";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
  LinkedinLogo,
  InstagramLogo,
  BehanceLogo,
} from "@phosphor-icons/react";

const data = [
  {
    icon: <LinkedinLogo size={32} />,
  },
  {
    icon: <InstagramLogo size={32} />,
  },
  {
    icon: <BehanceLogo size={32} />,
  },
  {
    icon: <BehanceLogo size={32} />,
  },
  {
    icon: <BehanceLogo size={32} />,
  },
];
const Content = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-4 px-4 py-12 sm:px-6 lg:space-y-8 lg:px-8">
          <div className="flex flex-row items-center justify-center">
            <div className="">
              <Logo />
              <p className="font-bold pt-2">UI PIRATES</p>
            </div>
          </div>
          <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-12 max-md:gap-4 max-lg:gap-8">
            {data.map((item, index) => {
              return (
                <Card className="">
                  <CardBody className="items-center">{item.icon}</CardBody>
                </Card>
              );
            })}
          </div>

          <hr></hr>
          <p className="text-sm text-gray-500 text-center ">
            Copyright © 2024 UI Pirates | All Rights Reserved | Terms and
            Conditions | Privacy Policy
          </p>
        </div>
      </footer>
    </>
  );
};

export default Content;
