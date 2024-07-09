import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Logo } from "@/components/icons";

export default function ReviewCard() {
  return (
    <Card className="max-w-[400px] p-3 pt-1 pr-2 pb-1 pl-2 bg-opacity-100 shadow-lg">
      <CardHeader className="relative flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="full"
          src="https://s3-alpha-sig.figma.com/img/dda1/c9db/7f754087536a4934bed9d9bc62259be9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzI6ynM54CSjqL1CCEu3Y8MV7PhJaPOnSkFPbn4X3UQvvimWpq~Wpp3vHID7BYZk7FDbYevyglInb0BzdIacTGplIq~Enbht8QwBzsL0ucvYQHb4NkB~0dM7HtVAPnDjE~66GizjM6zAeb9BI7pC0dfo6svSq7nyZ9t~4ANwbPLk7iWnb6QuW3ZEfgJvft9Y8sP8bI26hpBPGvUPwWDg7rvVsE4QTcReKw77eT-LbxLxOUhLTvRJqaB-LkcTJ3biX1Abj3gAIQyqpCmM18sPc3~8~3OtEgTpUnxt0vjj3NeyEUAW-mbYuirB1~Qds2Lt5BH8KmpO3kbnxxHJnXu-GQ__"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-extrabold font-nahomi">Eden Hazani</p>
          <p className="text-small text-default-500">Xperiti | VP Research and Development</p>
        </div>
        <div className="absolute top-0 right-0 m-2">
          <Logo />
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm font-bold">Wonderful to work with, very experienced with UI/UX design. Was very open to work in the flow we requested that required actual Angular coding from his team as well, and stood up to the challenge of working with a remot...</p>
      </CardBody>
    </Card>
  );
}