import { Button } from "@nextui-org/button";

const HeroText = () => {
  return (
    <>
      <div className=" align-middle justify-center p-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Where Creativity
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          meets functionality
        </h1>
        <p className="mb-4 text-center">
          {" "}
          We design and develop stunning digital experiences.
        </p>
        <div className="p-2 flex align-middle justify-center">
          <Button
            className="text-sm font-bold text-default-600 bg-onPrimary mr-2"
            radius="sm"
            size="lg"
            variant="flat"
          >
            Let's Talk!
          </Button>
          <Button
            className="text-sm font-bold ml-2 text-black bg-default-500"
            radius="sm"
            size="lg"
            variant="flat"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroText;
