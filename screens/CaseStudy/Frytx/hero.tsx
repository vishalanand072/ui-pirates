import { Button } from "@nextui-org/react";
import Image from "next/image";

const FrytxHero = () => {
  return (
    <>
      <div className="relative container mx-auto px-20 max-md:px-10 mb-4">
        <div className="grid grid-cols-2 max-md:grid-cols-1 md:h-screen  items-center  md:-pt-12 max-md:py-12 ">
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
              width={300}
              height={300}
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
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724233443/Frame_1984078655_redgzh.svg"
                alt="Solution 1"
                width={350}
                height={350}
                className="my-8 w-[85%]"
              />
            </div>
          </div>
        </div>

        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724304574/Shape_km1qxd.svg"
          alt="Solution 1"
          width={100}
          height={100}
          className="my-8 absolute bottom-4 right-0 "
        />

        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724304624/Union_bqxxnd.svg"
          alt="Solution 1"
          width={150}
          height={150}
          className="my-8 absolute -top-8 -left-0"
        />
      </div>
    </>
  );
};

export default FrytxHero;
