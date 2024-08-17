import { Button } from "@nextui-org/react";
import Image from "next/image";

const FrytxHero = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-md:grid-cols-1 h-screen container mx-auto px-20 items-center max-md:px-10">
        <div>
          <Button
            color="primary"
            variant="flat"
            size="sm"
            className=" font-semibold text-md rounded-full"
          >
            Product Case Study
          </Button>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1723806756/Group_1_k5rsnn.svg"
            alt="Solution 1"
            width={250}
            height={250}
            className="my-8"
          />
          <p className="normal">
            An all-in-one platform for business operations, customer service,
            verification, and financial management.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="relative ">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1723806380/Rectangle_6318_xw0clk.svg"
              alt="Solution 1"
              width={300}
              height={300}
              className="my-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrytxHero;
