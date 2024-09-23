import ClientCard from "./ClientCard";

const UserGroups = (props: any) => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-black heading">User Groups & Stories</h1>
          <span className="text-gray-300 text-6xl font-light max-md:text-3xl">
            04
          </span>
        </div>
        <div
          className={
            props.userGroup.length == 3
              ? "grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8"
              : "grid grid-cols-1 lg:grid-cols-2 gap-8"
          }
        >
          <ClientCard card={props.userGroup} />
        </div>
      </div>
    </>
  );
};

export default UserGroups;
