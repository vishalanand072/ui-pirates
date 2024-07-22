import AboutCard from "./aboutCard";
const Mobile = () => {
  const data = [
    { title: "title 1", cardColor: "#EDEEE6" },
    { title: "title 2", cardColor: "#E6ECEE" },
    { title: "title 3", cardColor: "#EEE6ED" },
    { title: "title 4", cardColor: "#EEEAE6" },
  ];
  return (
    <>
      <div className="block md:hidden mb-8">
        <div>
          <div className="">
            <p className="text-5xl max-md:text-3xl text-center">
              What about <br /> UI Pirates
            </p>
          </div>
          {data.map((item, index) => {
            return (
              <div className="mr-6" key={index}>
                <AboutCard cardColor={item.cardColor} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mobile;
