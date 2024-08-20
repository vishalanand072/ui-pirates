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
          <div className="flex flex-row gap-0 max-md:flex-col">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134559/Frame_21796_fnpugy.svg"
              alt="Solution 1"
              width={350}
              height={250}
              className="w-full max-h-[200px] min-h-[200px]"
            />
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134559/Frame_147_yqacm1.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-full max-h-[200px] min-h-[200px] max-md:w-[360px]"
            />
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134559/Frame_147_yqacm1.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-full max-h-[200px] min-h-[200px]"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134557/div.p-4_ky627v.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-screen md:max-h-full md:min-h-[400px] mt-2"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134557/Frame_22052_fqurqf.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-full md:max-h-full md:min-h-[400px] mt-2"
              style={{ width: "100%" }}
            />
          </div>
          <div className="grid grid-cols-6 mt-4 md:h-[450px] max-md:grid-cols-1">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134557/Frame_21795_mmxobz.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-[100%] max-h-full min-h-[400px] md:col-span-4  object-fill"
            />
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134557/Frame_141_wdff2y.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-full max-h-full min-h-[200px] md:col-span-2"
            />
          </div>

          <div className="grid grid-cols-5 mt-4 md:h-[600px] max-md:grid-cols-1 w-full">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134557/Header_mvw1gn.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-full h-full max-h-full min-h-[400px] md:col-span-3"
            />
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724134557/Header2_oc0aa3.svg"
              alt="Solution 1"
              width={250}
              height={250}
              className="w-full max-h-full min-h-[200px] md:col-span-2 object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UIElementsXperiti;
