import Image from "next/image";
const BrahmastraHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24">
        <div className="max-md:hidden w-screen">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725008994/Frame_2_qioizl.svg"
            alt="Solution 1"
            width={350}
            height={350}
            className="my-8 w-screen h-full object-cover"
            style={{ width: "100%" }}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1725008993/Frame_1984078633_nbxwwd.svg"
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

export default BrahmastraHero;
