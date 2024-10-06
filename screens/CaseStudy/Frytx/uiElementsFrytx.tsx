import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsFrytx = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728039361/Frame_1984078684_rzbnhp.svg"
            alt="Solution 1"
            width={300}
            height={150}
            className="my-8 w-full"
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728038957/frytx_kiejj1.svg"
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

export default UIElementsFrytx;
