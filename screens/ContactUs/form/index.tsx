import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const FormComp = () => {
  return (
    <>
      <div className=" container mx-auto px-20 max-lg:px-10 max-md:px-4 mt-28">
        <p className="font-bold heading tracking-tights text-center mb-8">
          Get in touch with us.
        </p>
        <Card>
          <CardBody className="p-12 max-lg:p-8 max-md:p-4">
            <div className="">
              <p className=" text-center medium-heading max-md:mb-8 tracking-tight">
                We're here to assist you.
              </p>
              <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 my-12 max-lg:gap-4 max-md:my-4">
                <div className="flex flex-row items-center gap-3">
                  <Phone size={30} />
                  <p>+91 82107 34398</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <EnvelopeSimple size={30} />
                  <p>info@uipirate.in</p>
                </div>
                <div className="flex flex-row md:justify-end gap-3">
                  <MapPin
                    size={30}
                    className="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px]"
                  />

                  <p>
                    #2053 Prestige White Meadows, Whitefield, Bangalore, 560066
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row mt-12 max-md:mt-0 md:gap-0">
                  <Button variant="light" className=" rounded-full p-3">
                    <Image
                      src="/assets/in-bg-none.svg"
                      alt={""}
                      width={28}
                      height={28}
                      className="max-md:w-[20px]"
                    />
                  </Button>
                  <Button variant="light" className=" rounded-full p-3">
                    <WhatsappLogo
                      size={28}
                      weight="fill"
                      className="max-md:w-[20px]"
                    />
                  </Button>
                  <Button variant="light" className=" rounded-full p-0">
                    <Phone
                      size={28}
                      weight="fill"
                      className="max-md:w-[20px]"
                    />
                  </Button>

                  <Button variant="light" className=" rounded-full p-3">
                    <EnvelopeSimple
                      size={28}
                      weight="fill"
                      className="max-md:w-[20px]"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default FormComp;
