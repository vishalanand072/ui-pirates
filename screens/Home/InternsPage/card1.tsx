"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

export default function Card1() {
  return (
    <Card className="max-w-full p-3">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
            <p className="text-lg font-bold">Screening</p>
            <div className="flex items-center justify-between">
            <p className="text-sm">
                Initial assessment to identify<br /> passionate and dedicated<br /> individuals
            </p>
            <Button color="secondary" className="absolute top-8 right-4 rounded-full">Month 1</Button>  
            </div>
        </div>
        </CardHeader>
      <Divider/>
      <CardBody className="flex gap-3">
      <div className="flex flex-col">
            <p className="text-lg font-bold">Second Round Screening</p>
            <div className="flex items-center justify-between">
            <p className="text-sm">
                Initial assessment to identify<br /> passionate and dedicated<br /> individuals
            </p>
            <Button color="secondary" className="rounded-full absolute top-8 right-1">Month 2</Button>  
            </div>
        </div>
      </CardBody>
     
      
    </Card>
  );
}
