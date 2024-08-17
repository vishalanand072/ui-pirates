import ClientCard from "./ClientCard";
import ParticipantCard from "./ParticipantCard";

const UserGroups = (props: any) => {
  console.log(props.userGroup.length);

  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-black heading">User Groups & Stories</h1>
          <span className="text-gray-300 text-6xl font-light">04</span>
        </div>
        <div
          className={
            props.userGroup.length == 3
              ? "grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8"
              : "grid grid-cols-1 lg:grid-cols-2 gap-8"
          }
        >
          <ClientCard card={props.userGroup} />
          {/* <ParticipantCard /> */}
        </div>
      </div>
    </>
  );
};

export default UserGroups;
