import Image from "next/image";
import { Button } from "@nextui-org/react";
const SimpleOHero = () => {
  return (
    <>
      <div className="-mt-24">
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1724310559/Frame_1000006088_bw1m5j.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="w-screen min-h-screen object-cover"
          />
        </div>
        <div className=" absolute top-10 w-full h-full">
          <div className=" h-full">
            <div className=" flex flex-row items-center  content-center justify-center text-center">
              <div className="">
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  className=" font-semibold text-md rounded-full"
                >
                  Product Case Study
                </Button>
                <Image
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1724311530/Frame_1984078633_fncgqv.svg"
                  alt="Solution 1"
                  width={700}
                  height={700}
                  className="my-8 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center ">
              <video
                className="w-[65%] max-h-[10%] min-h-[10%] h-[10%]"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://s3-figma-videos-production-sig.figma.com/video/1375060596090973966/TEAM/441d/bfd0/-21ed-45a2-8167-e724235a2d84?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8BJdiA5i5M0XOPRv30hrk2ME73SOkUfrRtXj4lZNqrXZHpgcmz9K0N5nH-jWbtFeDpLhq-DNw35h6FAdEsy4u76yPXQRQC~Y9z9fYcKU1Gcjb4fP-YKeBb9UQ5FozjTXe0r2CpFJd2U0m9CYAiNIcYNYmzBkKBDtLRXaJ0WRfSro7wqRvOmx1tlE-EDl1cUe5AlnOUX9GWufJFonKa~p-IrEGfWShkk6NOc9rqNPTBYDk4CZKezyfzH~MWR2MZUCE2pehWN9VLHhfq1iPOhUAbmy1Rj-TISXAartHORfCbdj~W0X0ClWhmUBFc1P6SxY5eYtCrtY-wUxMD3wwH21w__"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleOHero;
