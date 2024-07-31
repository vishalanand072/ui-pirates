import ClientCard from "./ClientCard";
import ParticipantCard from "./ParticipantCard";

const UserGroups = () => {
  return (
    <>
      <div className="flex justify-between items-center py-24 lg:py-24 px-8 lg:px-48 bg-white">
        <h1 className="text-black font-bold text-6xl">User Groups & Stories</h1>
        <span className="text-gray-300 text-6xl font-light">04</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  px-8 lg:px-48 bg-white gap-12">
        <ClientCard />
        <ParticipantCard />
      </div>
    </>
  );
};

export default UserGroups;
