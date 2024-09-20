import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
const FeaturesProductCard = (props: any) => {
  return (
    <>
      {props.card &&
        props.card.map((item: any, index: any) => {
          return (
            <Card className="bg-transparent shadow-none mt-36 mr-8">
              <CardBody style={{ padding: 0 }}>
                <Card>
                  <CardBody className="h-[70vh] w-[80vw] max-md:w-[100vw] max-md:mr-8 max-md:h-[300px]">
                    {item.media != "url" && (
                      <Image
                        src={item.media}
                        alt="Solution 1"
                        width={300}
                        height={250}
                        className="w-full h-full max-md:max-h-[400px]"
                      />
                    )}
                  </CardBody>
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
