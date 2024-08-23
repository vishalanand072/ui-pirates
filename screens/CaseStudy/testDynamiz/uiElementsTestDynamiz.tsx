import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsTestDynamiz = () => {
  return (
    <>
      <div className="mt-8">
        <p className=" text-xl font-semibold mb-3 uppercase">Illustrations</p>
        <div className="grid grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-4 border-2 items-center justify-center rounded-2xl py-2">
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220732/8961448_3973477_1_entyzw.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220732/Frame_35894_gbukrs.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220731/Frame_35896_hhlfoy.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[50%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>

          <span className="items-center justify-center flex flex-row">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220733/7117865_3371469_1_symvs4.svg"
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

        <div className="grid grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center  mt-6">
          <span className="items-center justify-center flex flex-row image-border rounded-2xl h-full">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220730/Carousel_Cards_s3d2ei.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-full "
              style={{ marginBottom: 0 }}
            />
          </span>
          <div className="flex flex-row gap-3 w-full">
            <div>
              <span className="items-center justify-center flex flex-row image-border rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220720/Section_zrdkoj.svg"
                  alt="Client"
                  width={100}
                  height={10}
                  className="w-[100%] h-[70%] "
                  style={{ marginBottom: 0 }}
                />
              </span>
              <span className="items-center justify-center flex flex-row image-border rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220720/Section_zrdkoj.svg"
                  alt="Client"
                  width={100}
                  height={10}
                  className="w-[80%] h-[70%] border-2 rounded-xl "
                  style={{ marginBottom: 0 }}
                />
              </span>
            </div>
            <span className="items-center justify-center flex flex-row image-border rounded-2xl">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220708/Pages_so7hcu.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center  mt-6 ">
          <div className="col-span-2 flex- flex-col justify-between h-full">
            <span className="items-center justify-center flex flex-row rounded-2xl image-border">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220699/Frame_148_oie8eo.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220726/Header_joweeg.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>
          <div className=" col-span-3">
            <span className="items-center justify-center flex flex-row h-[90%] rounded-2xl image-border">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220726/Add_People_g81rk1.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>
        </div>

        <div className="flex- flex-col justify-between h-full mt-6">
          <span className="items-center justify-center flex flex-row rounded-2xl image-border">
            <Image
              src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220722/Header3_pvyveo.svg"
              alt="Client"
              width={100}
              height={10}
              className="w-[100%] h-[50%] "
              style={{ marginBottom: 0 }}
            />
          </span>
        </div>

        <div className="grid grid-cols-5 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 items-center justify-center  mt-6 ">
          <div className=" md:col-span-3 h-full w-full">
            <span className=" justify-center flex flex-row rounded-2xl image-border">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220738/4_m1q8jt.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] object-fill"
                style={{ marginBottom: 0 }}
              />
            </span>
          </div>

          <div className="md:col-span-2 flex- flex-col justify-between h-full">
            <span className="items-center justify-center flex flex-row rounded-2xl image-border">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220732/Header5_tdvavl.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220692/Header10_fzhfmo.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220681/Project_Card_zie2j6.svg"
                alt="Client"
                width={100}
                height={10}
                className="w-[100%] h-[50%] "
                style={{ marginBottom: 0 }}
              />
            </span>
            <span className="items-center justify-center flex flex-row rounded-2xl image-border mt-4">
              <Image
                src="https://res.cloudinary.com/damm9iwho/image/upload/v1724220681/Example_-_Dashboard_Card_yasxtq.svg"
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

export default UIElementsTestDynamiz;
