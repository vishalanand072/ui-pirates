import Image from "next/image";
const TestDynamizHero = () => {
  return (
    <>
      <div className="mb-16 -mt-24">
        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724314913/ds_g8y5db.svg"
          alt="Solution 1"
          width={350}
          height={350}
          className="my-8 w-screen h-screen"
        />
      </div>
    </>
  );
};

export default TestDynamizHero;
