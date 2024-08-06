import Image from "next/image";
import clientpic from "@/public/images/usergroups_client.png";
import { DiamondsFour } from "@phosphor-icons/react";
const ClientCard = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <Image src={clientpic} alt="Client" />
        </div>
        <div className="p-2">
          <h1 className="text-3xl font-bold mb-4 mt-8">Clients</h1>
          <ul className="text-2xl font-semibold">
            <div className="flex flex-row items-center gap-3">
              <DiamondsFour size={20} weight="fill" />
              <li className="mb-2">Researchers</li>
            </div>
            <div className="flex flex-row items-center gap-3">
              <DiamondsFour size={20} weight="fill" />
              <li>Study Coordinators</li>
            </div>
          </ul>
        </div>
        <div className="mt-4 py-4 border-t text-lg font-semibold mr-16">
          "As a researcher, I want to create and manage studies efficiently so
          that I can focus on analyzing results."
        </div>
      </div>
    </>
  );
};

export default ClientCard;
