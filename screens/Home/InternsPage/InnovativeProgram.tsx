"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import { Gift, SealCheck, Sparkle } from "@phosphor-icons/react";

export default function InnovativeProgram() {
  return (
    <>
    <div className="grid cols-2 gap-6 max-md:grid-cols-1 w-full">
    <Card className=" p-3 ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
            <p className="text-lg font-bold">Screening</p>
            <div className="flex items-center justify-between">
            <p className="text-sm ">
                Initial assessment to identify<br /> passionate and dedicated<br /> individuals
            </p>
            <Button color="secondary" className="absolute top-10 right-4 rounded-full p-2">Month 1</Button>  
            </div>
        </div>
        </CardHeader>
      <Divider/>
      <CardBody >
      <div >
            <p className="text-lg font-bold">Second Round Screening</p>
            <div className="flex items-center justify-between">
            <p className="text-sm">
                Initial assessment to identify<br /> passionate and dedicated<br /> individuals
            </p>
            <Button color="secondary" className="rounded-full absolute top-10 right-1 p-2">Month 2</Button>  
            </div>
        </div>
      </CardBody>
     
      
    </Card>

    <Card className=" p-3">
      <CardHeader className=" gap-3 w-full">
        <div >
        <div className="flex flex-row bg-red-400 items-center justify-between w-full">
        <p className="text-lg font-bold ">Perks</p>
        
        <Gift size={32} />

        
        </div>

            
        <div className="flex items-center text-md p-2  font-bold justify-between">
           
            

            <ul className="space-y-5 list-none">
        <li className="flex items-center">
            <Sparkle size={22} />


            <span>Internship Certificate</span>
        </li>
        <li className="flex items-center ">
            <Sparkle size={22} />

            <span>Letter of Recommendation</span>
        </li>
        <li className="flex items-center space-x-2">
            <Sparkle size={22} />

            <span>Remote Work Opportunities</span>
        </li>
        <li className="flex items-center space-x-2">
        <Sparkle size={22} />
        <span>Flexible Timings</span>
        </li>
        </ul>

            
            
            </div>
        </div>
        </CardHeader>
      
      
    </Card>
    <Card className="max-w-full bg-gray-600 md:col-span-2">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col p-1" >
        <div className="flex items-center">
            <p className="text-xl font-bold">Continuous Guidance and Collaboration</p>
            <SealCheck size={64} weight="fill" color="#7828C8" className="absolute top-5 right-5 p-2" />

            </div>

            <div className="flex items-center justify-between">
            <p className="text-md pt-3">
            Ongoing support, guidance, and real-life project collaboration.
            </p>
            
            </div>
        </div>
        </CardHeader>
      
     
      
    </Card>
      
    </div>
    <div className="flex justify-center items-center flex-row gap-4 w-full mt-8">
        <Button color="secondary" className="  font-bold py-2 px-4 w-auto">
            Join Now!
        </Button>
        <Button className="  font-bold py-2 px-4 w-auto ">
            Learn More
        </Button>
    </div>
    

    </>

    

    
  );
}
