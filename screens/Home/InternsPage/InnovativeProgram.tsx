"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { Gift, SealCheck, Sparkle } from "@phosphor-icons/react";

export default function InnovativeProgram() {
  return (
    <>
      <p className="medium-heading text-white text-center px-12">
        Join our internship program and gain hands-on experience in product
        design and development.
      </p>
      <div className="flex justify-center items-center flex-row gap-4 w-full mt-8">
        <Button
          color="primary"
          size="md"
          radius="sm"
          className="  font-bold py-2 px-4 w-auto"
        >
          Join Now!
        </Button>
        <Button size="md" radius="sm" className="font-bold py-2 px-4 w-auto ">
          Learn More
        </Button>
      </div>
    </>
  );
}
