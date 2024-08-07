import Image from "next/image";
import participantimg from "@/public/images/usergroups_participant.png";
import { DiamondsFour } from "@phosphor-icons/react";

const ParticipantCard = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <Image src={participantimg} alt="Participant" />
        </div>
        <div className="p-2">
          <h1 className="medium-heading mb-4 mt-8">Participants</h1>
          <ul className="small-heading">
            <div className="flex flex-row items-center gap-3">
              <DiamondsFour size={20} weight="fill" />
              <li className="mb-2">Individuals participating in surveys</li>
            </div>
            <div className="flex flex-row items-center gap-3">
              <DiamondsFour size={20} weight="fill" />
              <li>Individuals participating in interviews. </li>
            </div>
          </ul>
        </div>
        <div className="mt-4 py-4 border-t normal font-semibold mr-16">
          "As a participant, I want to easily take part in surveys and
          interviews so that I can earn incentives without hassle."
        </div>
      </div>
    </>
  );
};

export default ParticipantCard;
