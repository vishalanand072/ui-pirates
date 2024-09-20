import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const data = [
  {
    hreading: "Month 1",
    bodyHeading: "Screening",
    bodySubheading:
      "Initial assessment to identify passionate and dedicated individuals.",
  },
  {
    hreading: "Month 2",
    bodyHeading: "Second Round Screening",
    bodySubheading:
      "Initial assessment to identify passionate and dedicated individuals.",
  },
];
export default function HowItWorks() {
  return (
    <>
      <p className="heading text-center mt-20 mb-12 max-md:mt-12 max-md:mb-6">
        How It Works
      </p>
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 mt-4">
        {data.map((item, index) => {
          return (
            <Card className="border-1 shadow-none">
              <CardHeader className="flex flex-row gap-3 bg-[#EEE3F9] text-center items-center justify-center">
                <p className="text-lg font-semibold">{item.hreading}</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-lg font-semibold">{item.bodyHeading}</p>
                <p>{item.bodySubheading}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
}
