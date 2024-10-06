import Image from "next/image";
const UIElementsCloudShift = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728211388/cloud_tzcrip.svg"
            alt="Solution 1"
            width={300}
            height={250}
            className="my-8 w-full"
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728211391/cloudbottom_zu0vxw.svg"
            alt="Solution 1"
            width={300}
            height={250}
            className="my-8 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default UIElementsCloudShift;
