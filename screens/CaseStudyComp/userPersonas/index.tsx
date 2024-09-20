import PersonasCard from "./personasCard";
const UserPersonas = (props: any) => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-10 max-md:px-4">
        <div className="flex justify-between items-center my-12">
          <h1 className="heading">User Personas</h1>
          <span className="text-gray-300 text-6xl font-light max-md:text-3xl">
            05
          </span>
        </div>

        <PersonasCard card={props.userPersonas} />
      </div>
    </>
  );
};

export default UserPersonas;
