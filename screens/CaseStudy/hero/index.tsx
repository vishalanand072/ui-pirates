import hero from "@/public/hero.svg";
import Image from "next/image";

const CaseStudyHero = () => {
  return (
    <>
      <div className="bg-black  -mt-16">
        <Image src={hero} alt="Client" className="w-[100vw] h-[100vh]" />
      </div>
    </>
  );
};

export default CaseStudyHero;
