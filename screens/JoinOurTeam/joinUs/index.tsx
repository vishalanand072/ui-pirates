import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const JoinUs = () => {
  return (
    <>
      <div>
        <p className="heading text-center mt-20 mb-12 max-md:mt-8 max-md:mb-4">
          Ready to join us?
        </p>
        <Card className=" shadow-none my-12 bg-[#7828C8] py-4 max-md:my-8 rounded-3xl">
          <CardBody className="grid grid-cols-2 max-md:grid-cols-1 items-center border-none px-8 text-white">
            <div className="lg:pr-36">
              <p className="heading">Kickstart Your Career with UI Pirates</p>
              <p className="text-lg mt-3 ">
                Apply now and take the first step towards a creative and
                fulfilling career.
              </p>
              <Button
                color="danger"
                size="md"
                variant="light"
                className="bg-white  rounded-lg font-semibold mt-3 text-[#800020] hover:text-white"
              >
                Join Now!
              </Button>
            </div>
            <div className="flex items-center justify-center max-md:mt-12">
              {/* <Image
                src="/assets/28814026_btwe_1rzg_220530 2.svg"
                alt={""}
                width={300}
                height={100}
                className=""
              /> */}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default JoinUs;
