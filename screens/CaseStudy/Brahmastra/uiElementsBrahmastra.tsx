import Image from "next/image";
const UIElementsBrahmastra = () => {
  return (
    <>
      <div className="mt-8 ">
        <p className="text-2xl font-semibold mb-3 uppercase">UI elements</p>
        <div>
          <Image
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1728208332/brahm_a0nppe.svg"
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

export default UIElementsBrahmastra;
