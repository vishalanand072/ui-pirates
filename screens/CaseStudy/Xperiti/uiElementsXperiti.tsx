import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";

const UIElementsXperiti = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div className="flex flex-row  gap-4">
          <Image
            src={img1}
            alt="Client"
            width={100}
            height={100}
            className="w-[20%] h-[50%]"
          />
          <Image src={img2} alt="Client" className="w-[80%] h-[50%]" />
        </div>
        <div className="w-full items-center flex flex-row justify-center border-2 mt-6 rounded-2xl py-8">
          <Image src={img3} alt="Client" className="w-[25%] h-[40%]" />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728037602/xperiti_lkq9jo.svg"
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

export default UIElementsXperiti;
