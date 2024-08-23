import Image from "next/image";

const ProductMedia = () => {
  return (
    <>
      <div>
        <Image
          src="https://res.cloudinary.com/damm9iwho/image/upload/v1724064855/image_42_jlamg7.svg"
          alt="Solution 1"
          width={300}
          height={250}
          className="my-8 w-full"
        />
      </div>
    </>
  );
};

export default ProductMedia;
