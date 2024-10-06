import Image from "next/image";
import img1 from "@/public/img1.svg";
import img2 from "@/public/img2.svg";
import img3 from "@/public/img3.svg";
const UIElementsIon = () => {
  return (
    <>
      <div className="mt-8">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>

        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728207060/ion_qsecj2.svg"
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

export default UIElementsIon;
