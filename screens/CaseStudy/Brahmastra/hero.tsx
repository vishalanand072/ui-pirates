import Image from "next/image";
const BrahmastraHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24">
        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724308636/Frame_2_uvqs02.svg"
          alt="Solution 1"
          width={350}
          height={350}
          className="my-8 w-screen h-screen object-cover"
        />
      </div>
    </>
  );
};

export default BrahmastraHero;
