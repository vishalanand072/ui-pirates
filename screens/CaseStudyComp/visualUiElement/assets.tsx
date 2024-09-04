import { Card, CardBody } from "@nextui-org/react";
import { PhosphorLogo, DiamondsFour } from "@phosphor-icons/react";
import * as PhosphorIcons from "@phosphor-icons/react";

const data = [
  {
    icon: "BellSimple",
  },
  {
    icon: "House",
  },
  {
    icon: "UsersFour",
  },
  {
    icon: "VideoCamera",
  },
  {
    icon: "Printer",
  },
  {
    icon: "GearSix",
  },
  {
    icon: "CreditCard",
  },
  {
    icon: "Coins",
  },
  {
    icon: "Note",
  },
  {
    icon: "Trash",
  },
  {
    icon: "FloppyDisk",
  },
  {
    icon: "CurrencyCircleDollar",
  },
  {
    icon: "User",
  },
  {
    icon: "CalendarCheck",
  },
  {
    icon: "SealCheck",
  },
  {
    icon: "Briefcase",
  },
];

const Assets = () => {
  return (
    <>
      <p className="text-subtitle text-2xl font-semibold mb-3 uppercase">
        Assets
      </p>
      <Card className="bg-none shadow-none border-none p-0">
        <CardBody className="p-0 m-0">
          <p className="text-2xl font-semibold mb-3">Icons</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            <div>
              <Card className="bg-[#C4E456] shadow-none border-1">
                <CardBody className="items-center">
                  <PhosphorLogo size={90} weight="fill" />
                  <p className="text-2xl font-semibold mb-3">Phosphor Icons</p>
                </CardBody>
              </Card>
              <p className="text-xl font-semibold my-4">
                We chose Phosphor Icons for Xperiti because:
              </p>
              {[...Array(3)].map((_, i) => (
                <div className="flex flex-row items-center gap-2 my-2">
                  <DiamondsFour size={20} weight="fill" />
                  <div>
                    <p className="text-lg text-subtitle">
                      {" "}
                      <span className="text-black font-semibold">
                        Versatility:
                      </span>{" "}
                      Wide range of icons fitting various design needs.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Card className="bg-[#F2F2F2] shadow-none border-0">
                <CardBody>
                  <p className="text-subtitle text-xl font-semibold mb-3">
                    Assets
                  </p>
                  <div className="grid grid-cols-8 max-md:grid-cols-4 max-lg:grid-cols-6 gap-y-4">
                    {data.map((item, index) => {
                      const IconComponent = PhosphorIcons[
                        item.icon as keyof typeof PhosphorIcons
                      ] as any;
                      return (
                        <span>
                          {IconComponent && (
                            <IconComponent
                              size={54}
                              weight="regular"
                              className="bg-white p-2 rounded-lg"
                            />
                          )}
                        </span>
                      );
                    })}
                  </div>

                  <p className="text-subtitle text-xl font-semibold my-3">
                    Assets
                  </p>
                  <div className="grid grid-cols-8 max-md:grid-cols-4 max-lg:grid-cols-6 gap-y-4">
                    {data.map((item, index) => {
                      const IconComponent = PhosphorIcons[
                        item.icon as keyof typeof PhosphorIcons
                      ] as any;
                      return (
                        <span>
                          {IconComponent && (
                            <IconComponent
                              size={54}
                              weight="fill"
                              className="bg-white p-2 rounded-lg"
                            />
                          )}
                        </span>
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Assets;
