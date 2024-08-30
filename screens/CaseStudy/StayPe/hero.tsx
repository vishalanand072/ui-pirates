import Image from "next/image";
const StayPeHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24">
        <div className="max-md:hidden w-screen">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1724781122/hero_ftklmf.png"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen h-full object-cover"
            style={{ width: "100%" }}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725009803/MacBook_Pro_16__-_19_gk2wo8.svg"
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

export default StayPeHero;
