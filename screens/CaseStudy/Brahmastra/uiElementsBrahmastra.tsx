import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsBrahmastra = () => {
  return (
    <>
      <div className="mt-8 ">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>
        <div className="mt-8 bg-black rounded-2xl p-8">
          <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 items-center justify-center rounded-2xl mt-0 image-border">
            <span className="items-center justify-center flex flex-row border-1 rounded-2xl border-[#F4F4F4]">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217437/Frame_22377_fwvkaw.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>

          <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 items-center justify-center rounded-2xl mt-6 image-border">
            <span className="items-center justify-center flex flex-row">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217436/Frame_22210_ib3ds0.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>

          <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 items-center justify-center rounded-2xl mt-6 image-border">
            <span className="items-center justify-center flex flex-row">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217436/Frame_22185_px3ioc.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center  mt-6">
            <span className="items-center justify-center flex flex-row image-border rounded-2xl h-full col-span-2">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217434/Frame_22189_qrovgo.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%]  h-full"
                style={{ marginBottom: 0 }}
              />
            </span>
            <div>
              <span className="items-center flex flex-row justify-center image-border rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217433/Frame_22165_qrcjjm.svg"
                  alt="Client"
                  width={100}
                  height={10}
                  className="w-[100%] h-[30%] max-md:w-[100%]"
                  style={{ marginBottom: 0 }}
                />
              </span>{" "}
              <span className="items-center flex flex-row justify-center image-border rounded-2xl mt-3">
                <Image
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217433/Frame_22179_iyxnec.svg"
                  alt="Client"
                  width={100}
                  height={10}
                  className="w-[100%] h-[30%] max-md:w-[100%]"
                  style={{ marginBottom: 0 }}
                />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center  mt-6">
            <span className="items-center justify-center flex flex-row image-border rounded-2xl h-full">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217432/Edit_Tags_rfukmg.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%]  h-full"
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center flex flex-row justify-center image-border rounded-2xl mt-3">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217431/Contents_tnyxz9.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[30%] max-md:w-[100%]"
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center flex flex-row justify-center image-border rounded-2xl h-[340px]">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724217430/Frame_22219_urmjxl.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[100%] max-md:w-[100%]"
                style={{ marginBottom: 0 }}
              />
            </span>{" "}
          </div>

          <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 items-center justify-center rounded-2xl mt-6 image-border">
            <span className="items-center justify-center flex flex-row">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724218597/Basic_Line_Chart_raio1a.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIElementsBrahmastra;
