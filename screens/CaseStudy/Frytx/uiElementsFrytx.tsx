import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsFrytx = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-4 border-2 items-center justify-center rounded-2xl py-2">
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139840/Rectangle_1831_ne5eez.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139838/Rectangle_1832_knpltf.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139837/Rectangle_1833_qw0dck.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>

          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139837/Rectangle_1834_at7ofx.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>

          {/* <Image src={img2} alt="Client" className="w-[80%] h-[50%]" /> */}
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-4 border-2 items-center justify-center rounded-2xl py-2 mt-6">
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139836/Rectangle_1837_qawvzi.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139836/Rectangle_18312_h0dt8t.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139847/Asset_1_1_1_cm7yk3.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>

          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139843/Asset_1_1_3_h5ivgl.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>

          {/* <Image src={img2} alt="Client" className="w-[80%] h-[50%]" /> */}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center rounded-2xl mt-6 image-border">
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139832/Frame_27284_bqs30y.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139833/Frame_27297_vnkxm4.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139832/Frame_2730_qd2j3d.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139832/Frame_2731_yetdjz.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139831/Frame_2732_b9ctgk.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724139829/Frame_2733_dbseqs.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default UIElementsFrytx;
