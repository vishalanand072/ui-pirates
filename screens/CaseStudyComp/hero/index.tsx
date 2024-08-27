import hero from "@/public/herobg.svg";
import Image from "next/image";

const CaseStudyHero = (props: any) => {
  return (
    <>
      <div className="bg-[#111111] -mt-16">
        <div className="h-[780px] relative  container mx-auto">
          <Image
            src={hero}
            alt="hero"
            width={360}
            height={360}
            className="w-full h-[700px] object-fit absolute bottom-0 right-0"
          />
          <div className="absolute top-40  max-md:top-20 left-20 max-md:left-10">
            <p className="text-8xl font-medium text-white ">
              {props.hero.title}
            </p>
            <p className="text-4xl font-medium text-white mt-3">
              {props.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyHero;
