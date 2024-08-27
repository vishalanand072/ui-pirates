import Image from "next/image";
const StayPeHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24 w-screen">
        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724313953/MacBook_Pro_16__-_4_g840oq.svg"
          alt="Solution 1"
          width={350}
          height={350}
          className="my-8 w-full h-screen object-contain object-center"
        />
      </div>
    </>
  );
};

export default StayPeHero;
