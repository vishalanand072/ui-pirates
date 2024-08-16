import Image from "next/image";
import clientpic from "@/public/images/usergroups_client.png";
import { DiamondsFour } from "@phosphor-icons/react";
const ClientCard = (props: any) => {
  return (
    <>
      {props.card.map((item: any, index: any) => {
        return (
          <div className="flex flex-col ">
            <div>
              <Image src={clientpic} alt="Client" />
            </div>
            <div className="p-2">
              <h1 className="medium-heading mb-4 mt-8">{item.heading}</h1>
              <ul className="small-heading">
                {item.list &&
                  item.list.map((item: any, index: any) => {
                    return (
                      <div className="flex flex-row items-center gap-3">
                        <DiamondsFour
                          size={20}
                          weight="fill"
                          className="min-h-[20px] min-w-[20px]"
                        />
                        <li className="mb-2">{item.listItem}</li>
                      </div>
                    );
                  })}
              </ul>
            </div>
            <div className="mt-4 py-4 border-t normal font-semibold mr-16">
              {item.discreption}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ClientCard;
