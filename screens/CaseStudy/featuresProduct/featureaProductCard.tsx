import { Card, CardBody } from "@nextui-org/react";
const FeaturesProductCard = () => {
  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardBody style={{ padding: 0 }}>
          <Card>
            <CardBody className="bg-[#868686] h-[70vh] w-[90vw] max-md:w-[100vw] max-md:mr-8"></CardBody>
          </Card>
          <p className="text-4xl font-semibold mt-4">
            Study Creation & Management
          </p>
          <p className="mt-3 text-lg">
            Utilize simplified tools that enable easy creation and management of
            research studies, streamlining the entire process for researchers.
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default FeaturesProductCard;
