import Image from "next/image";
const TestDynamizHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24">
        <div className="max-md:hidden w-screen">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725015057/MacBook_Pro_16__-_8_ylcvjf.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen h-full object-cover"
            style={{ width: "100%" }}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725015055/MacBook_Pro_16__-_21_pxcpp6.svg"
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

export default TestDynamizHero;
