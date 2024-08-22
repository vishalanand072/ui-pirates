import Image from "next/image";
const CLoudShiftHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24">
        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724317986/MacBook_Pro_16__-_34_yvrjcs.svg"
          alt="Solution 1"
          width={350}
          height={350}
          className="my-8 w-screen h-screen "
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default CLoudShiftHero;
