import Image from "next/image";
import PenNib from "@/public/images/PenNib.svg";

const UIDesignCard = () => {
  return (
    <>
      <div>
        <Image src={PenNib} alt="UI Design" />
      </div>
    </>
  );
};

export default UIDesignCard;
