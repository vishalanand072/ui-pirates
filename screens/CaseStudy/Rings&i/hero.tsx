import Image from "next/image";
const RingsAndIHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24 ">
        <div className="max-md:hidden">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725007626/MacBook_Pro_16__-_23_2x_zxfdux.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen h-screen"
            style={{ width: "100%" }}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725007813/MacBook_Pro_16__-_17_jif1yw.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen h-screen"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default RingsAndIHero;
