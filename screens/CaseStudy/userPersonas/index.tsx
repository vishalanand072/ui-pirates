import PersonasCard from "./personasCard";
const UserPersonas = () => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="heading">User Personas</h1>
          <span className="text-gray-300 text-6xl font-light">05</span>
        </div>

        <PersonasCard />

        <div className="my-8">
          <PersonasCard />
        </div>
      </div>
    </>
  );
};

export default UserPersonas;
