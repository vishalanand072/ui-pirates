"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import { Logo } from "@/components/icons";

export default function Card2() {
  return (
    <Card className="max-w-full p-3">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-bold ">Perks</p>
        <div className="text-md p-3 font-bold">
            <img src="path/to/your/image.jpg" alt="Remote Work Opportunities" className="w-6 h-6 absolute top-7 right-4" />
        </div>
        </div>

            
            <div className="flex items-center text-md p-2  font-bold justify-between">
           
            

            <ul className="space-y-5 list-none">
        <li className="flex items-center space-x-2">
            <img src="path/to/your/image.jpg" alt="Internship Certificate" className="w-6 h-6" />
            <span>Internship Certificate</span>
        </li>
        <li className="flex items-center space-x-2">
            <img src="path/to/your/image.jpg" alt="Letter of Recommendation" className="w-6 h-6" />
            <span>Letter of Recommendation</span>
        </li>
        <li className="flex items-center space-x-2">
            <img src="path/to/your/image.jpg" alt="Remote Work Opportunities" className="w-6 h-6" />
            <span>Remote Work Opportunities</span>
        </li>
        <li className="flex items-center space-x-2">
            <img src="path/to/your/image.jpg" alt="Flexible Timings" className="w-6 h-6" />
            <span>Flexible Timings</span>
        </li>
        </ul>

            
            
            </div>
        </div>
        </CardHeader>
      
      
    </Card>
  );
}