"use client";
import { Logo } from "@/components/icons";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
  LinkedinLogo,
  InstagramLogo,
  BehanceLogo,
} from "@phosphor-icons/react";

import Image from "next/image";

const data = [
  {
    icon: (
      <Image src="/assets/in-bg-none.svg" alt={""} width={30} height={30} />
    ),
  },
  {
    icon: <InstagramLogo size={30} weight="bold" />,
  },
  {
    icon: <Image src="/assets/upwork.svg" alt={""} width={30} height={30} />,
  },
  {
    icon: <BehanceLogo size={30} weight="bold" />,
  },
  {
    icon: <Image src="/assets/c.svg" alt={""} width={30} height={30} />,
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
            Copyright © 2024 UI Pirates | All Rights Reserved |
            <span className="text-purple-800 cursor-pointer">
              Terms and Conditions
            </span>
            |{" "}
            <span className="text-purple-800 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Content;
