import hero from "@/public/hero.svg";
import Image from "next/image";

const CaseStudyHero = () => {
  return (
    <>
      <div className="h-screen bg-black  object-cover -mt-16">
        <Image src={hero} alt="Client" className="w-[70%]" />
      </div>
    </>
  );
};

export default CaseStudyHero;
