import Marquee from "@/components/magicui/marquee";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Logo } from "@/components/icons";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);
const fifthRow = reviews.slice(reviews.length / 2);
const sixthRow = reviews.slice(reviews.length / 2);

function ReviewCard() {
  return (
    <Card className="max-w-[400px] p-3 pt-1 pr-2 pb-1 pl-2  border-1">
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
          <p className="text-small text-default-500">
            Xperiti | VP Research and Development
          </p>
        </div>
        <div
          className="absolute top-0 right-0 m-2 w-[30px] h-[30px]"
          style={{ transform: "rotate(-33deg)" }}
        >
          <Image
            alt="nextui logo"
            height={40}
            radius="full"
            src="/assets/inlogo.svg"
            width={40}
          />
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm font-bold">
          Wonderful to work with, very experienced with UI/UX design. Was very
          open to work in the flow we requested that required actual Angular
          coding from his team as well, and stood up to the challenge of working
          with a remot...
        </p>
      </CardBody>
    </Card>
  );
}

export function MarqueeDemo() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background mt-100 shadow-none rotate-[35deg] max-md:rotate-[0deg]"
      // style={{ transform: "rotate(+35deg)" }}
    >
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-10"></div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {fourthRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {fifthRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {sixthRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {sixthRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 border-gradient"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 border-gradient"></div>
    </div>
  );
}
