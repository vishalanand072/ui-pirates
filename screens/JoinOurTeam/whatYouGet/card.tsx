import { Card, CardBody } from "@nextui-org/react";
import {
  Certificate,
  UserRectangle,
  CalendarDots,
  UsersThree,
  GlobeHemisphereWest,
  MoneyWavy,
  UserCheck,
} from "@phosphor-icons/react";

const data = [
  {
    icon: <Certificate size={60} weight="fill" />,
    bodyHeading: "Internship Certificate",
    bodySubheading:
      "Official certification to showcase your experience and skills.",
  },
  {
    icon: <UserRectangle size={60} weight="fill" />,
    bodyHeading: "Letter of Recommendation",
    bodySubheading:
      "A personalized letter from industry experts to help boost your career.",
  },
  {
    icon: <CalendarDots size={60} weight="fill" />,
    bodyHeading: "Flexible Timings",
    bodySubheading: "Work on your schedule without compromising on quality.",
  },
  {
    icon: <UsersThree size={60} weight="fill" />,
    bodyHeading: "Real-life project collaboration",
    bodySubheading: "Engage in actual projects to apply and hone your skills.",
  },

  {
    icon: <MoneyWavy size={60} weight="fill" />,
    bodyHeading: "Stipend",
    bodySubheading:
      "Receive a performance-based stipend after the first three months.",
  },
  {
    icon: <GlobeHemisphereWest size={60} weight="fill" />,
    bodyHeading: "Remote Work Opportunities",
    bodySubheading:
      "Work from anywhere, with all the tools you need at your disposal.",
  },
  {
    icon: <UserCheck size={60} weight="fill" />,
    bodyHeading: "Continuous Guidance",
    bodySubheading:
      "Learn directly from our seasoned professionals and mentors.",
  },
];

const CardWhatYouGet = () => {
  return (
    <>
      <div className="w-full">
        <p className="heading text-center my-12">What You Get</p>
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 mt-4">
          {data.map((item, index) => {
            return (
              <Card
                className="border-1  shadow-sm z-99999"
                style={{ zIndex: 999 }}
              >
                <CardBody className="flex flex-col items-center justify-center">
                  {item.icon}
                  <p className="text-xl font-bold text-[#3D445C]">
                    {item.bodyHeading}
                  </p>
                  <p>{item.bodySubheading}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardWhatYouGet;
