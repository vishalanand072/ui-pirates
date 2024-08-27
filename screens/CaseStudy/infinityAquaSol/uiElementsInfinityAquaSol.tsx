import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsIAS = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-4 border-2 items-center justify-center rounded-2xl py-2">
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225169/Vector_p9qujk.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225166/Vector1_lrukyi.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225165/Vector2_c2alan.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>

          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225163/Vector3_quoe4s.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>

        <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 items-center justify-center rounded-2xl mt-6 image-border">
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225165/image_21_rw99cw.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
        </div>

        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-4 items-center justify-center  mt-6">
          <div className=" col-span-3 h-full">
            <span className="items-center justify-center flex flex-row rounded-2xl  image-border">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225160/image_23_gdkhgx.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl  image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225166/image_24_caplmg.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>
          <div className=" col-span-2">
            <span className="items-center justify-center flex flex-row rounded-2xl  image-border">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225152/image_19_vx2nm2.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl  image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225150/image_204_bulsze.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl  image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724225151/image_22_ntwc0j.svg"
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

export default UIElementsIAS;
