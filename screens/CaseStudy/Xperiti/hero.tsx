import hero from "@/public/herobg.svg";
import Image from "next/image";

const XperitiHero = (props: any) => {
  return (
    <>
      {/* <div className="bg-[#111111] -mt-16">
        <div className="h-[780px] relative  container mx-auto">
          <Image
            src={hero}
            alt="hero"
            width={360}
            height={360}
            className="w-full h-[700px] object-fit absolute bottom-0 right-0"
          />
          <div className="absolute top-40  max-md:top-20 left-20 max-md:left-10">
            <p className="text-8xl font-medium text-white ">Xperiti</p>
            <p className="text-4xl font-medium text-white mt-3">ison le</p>
          </div>
        </div>
      </div> */}

      <div className="mb-16 -mt-24">
        <div className="max-md:hidden w-screen">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725008166/MacBook_Pro_16__-_12_cimflk.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen h-full object-cover"
            style={{ width: "100%" }}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725008115/MacBook_Pro_16__-_14_twmtzv.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen md:h-screen object-cover"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default XperitiHero;
