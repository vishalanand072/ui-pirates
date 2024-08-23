import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsSimpleO = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146853/Frame_35839_gh4mzz.svg"
            alt="Client"
            width={100}
            height={10}
            className="w-[100%] h-[50%] "
            style={{ marginBottom: 0 }}
          />
        </div>
        <div className="grid grid-cols-7 max-md:grid-cols-1 h-[500px]">
          <div className=" md:col-span-2 flex  md:h-[400px]  max-h-[500px] max-md:grid max-md:grid-cols-2 border-2 rounded-2xl">
            <span>
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146851/Rectangle_6319_rhpkwn.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span>
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146849/Rectangle_6320_x7vocw.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span>
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146843/Rectangle_6321_hbt8jn.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span>
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146842/Rectangle_6318_aafdcw.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>
          <div className="md:col-span-5 max-h-[500px]">
            <span>
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146841/image_4_ivhe3i.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="w-full ">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146839/Screenshot_2024-04-05_155252_1_p7nuhc.svg"
                alt="Client"
                width={100}
                height={100}
                className="w-full h-[30%]"
                style={{}}
              />
            </span>
          </div>
        </div>

        <div className=" border-2 rounded-2xl mt-6 py-8 max-md:mt-20">
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center justify-center">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146838/image_22_fuxyyy.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[80%] h-[100%] "
                style={{ margin: 0 }}
              />
            </span>
            <span className="flex flex-row items-center justify-center">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146837/14741326_1908.i201_2_guqxhk.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[80%] h-[100%] "
                style={{ margin: 0 }}
              />
            </span>
          </div>
          <div className="flex flex-row items-center justify-between mt-8">
            <span className="flex flex-row items-center justify-center">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146836/168594463_10423563_1_2_vuneos.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[80%] h-[100%] "
                style={{ margin: 0 }}
              />
            </span>
            <span className="flex flex-row items-center justify-center">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146835/OBJECTS_2_kvqbqd.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[80%] h-[100%] "
                style={{ margin: 0 }}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>

        <div className="image-border rounded-2xl">
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1724146835/Screenshot_2024-04-05_155252_13_xfowkq.svg"
            alt="Client"
            width={100}
            height={10}
            className="w-[100%] h-[50%] "
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default UIElementsSimpleO;
