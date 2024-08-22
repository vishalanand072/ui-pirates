import Image from "next/image";
const StayRealorHero = () => {
  return (
    <>
      <div className="mb-16 -mt-20 flex flex-row items-center justify-center">
        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724313482/Frame_932_cdfvsy.svg"
          alt="Solution 1"
          width={350}
          height={350}
          className="my-8 w-[98%] max-md:w-[95%] h-[90%] object-cover"
        />
      </div>
    </>
  );
};

export default StayRealorHero;
