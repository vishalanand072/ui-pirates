"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

export default function Card3() {
  return (
    <Card className="max-w-full bg-gray-600">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col p-1" >
        <div className="flex items-center">
            <p className="text-xl font-bold">Continuous Guidance and Collaboration</p>
            <img src="path/to/your/image.jpg" alt="Remote Work Opportunities" className="absolute top-8 right-4 w-10 h-10 p-2" />

            </div>

            <div className="flex items-center justify-between">
            <p className="text-md pt-3">
            Ongoing support, guidance, and real-life project collaboration.
            </p>
            
            </div>
        </div>
        </CardHeader>
      
     
      
    </Card>
  );
}
