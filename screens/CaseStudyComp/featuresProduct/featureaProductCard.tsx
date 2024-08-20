import { Card, CardBody } from "@nextui-org/react";
const FeaturesProductCard = (props: any) => {
  return (
    <>
      {props.card &&
        props.card.map((item: any, index: any) => {
          return (
            <Card className="bg-transparent shadow-none mt-36 mr-8">
              <CardBody style={{ padding: 0 }}>
                <Card>
                  <CardBody className="bg-[#868686] h-[70vh] w-[80vw] max-md:w-[100vw] max-md:mr-8"></CardBody>
                </Card>
                <p className="heading mt-4 text-white">{item.heading}</p>
                <p className="mt-3 normal text-white">{item.subHeading}</p>
              </CardBody>
            </Card>
          );
        })}
    </>
  );
};

export default FeaturesProductCard;
