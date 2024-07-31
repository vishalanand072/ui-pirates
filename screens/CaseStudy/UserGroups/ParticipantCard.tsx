import Image from "next/image";
import participantimg from "@/public/images/usergroups_participant.png";

const ParticipantCard = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <Image src={participantimg} alt="Participant" />
        </div>
        <div className="p-2">
          <h1 className="text-black text-4xl font-bold mb-4 mt-8">
            Participants
          </h1>
          <ul className="text-3xl font-semibold">
            <li className="mb-2">Individuals participating in surveys</li>
            <li>Individuals participating in interviews. </li>
          </ul>
        </div>
        <div className="mt-4 py-4 border-t text-xl font-semibold mr-16">
          As a participant, I want to easily take part in surveys and interviews
          so that I can earn incentives without hassle.
        </div>
      </div>
    </>
  );
};

export default ParticipantCard;
