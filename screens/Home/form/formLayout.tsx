import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";

const formLayout: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [projectDetails, setProjectDetails] = useState<string>("");

  const handleInterestChange = (interest: string) => {
    setInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((item) => item !== interest)
        : [...prevInterests, interest]
    );
  };

  const handleBudgetChange = (budget: string) => {
    setBudget(budget);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Logs all the submitted data
    console.log({ name, company, email, interests, budget, projectDetails });
  };

  return (
    <>
      <div className=" container mx-auto px-20 max-lg:px-16 max-md:px-12 py-12">
        <div>
          <div className="md:items-center max-w-full flex justify-between gap-2 mb-4 lg:flex-row flex-col">
            <div className="flex flex-col flex-1 min-w-[250px]">
              <label className="text-black font-semibold mb-2">Name</label>
              <input
                className="w-full h-12 px-4 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Write here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[250px]">
              <label className="text-black font-semibold mb-2">Company</label>
              <input
                className="w-full h-12 px-4 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Write here"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[250px]">
              <label className="text-black font-semibold mb-2">Email</label>
              <input
                className="w-full h-12 px-4 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Write here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="text-black font-semibold mt-8 mb-2">
            I am interested in
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              "UI UX Design",
              "UI Development",
              "Web Design",
              "Shopify Design & Integration",
              "Motion Graphics",
              "Graphic Design",
              "Asset Creation",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center cursor-pointer font-semibold"
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={interests.includes(item)}
                  onChange={() => handleInterestChange(item)}
                />
                <span className="px-6 py-2 border border-gray-300 rounded-full peer-checked:bg-gray-200 ">
                  {item}
                </span>
              </label>
            ))}
          </div>
          <div className="text-black font-semibold mt-8 mb-2">Budget</div>
          <div className="flex flex-wrap gap-3 mb-4">
            {["≤$5K", "$10K-$20K", "$30K-$40K", "$50K-$60K", "≥$100K"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center cursor-pointer font-semibold"
                >
                  <input
                    type="radio"
                    name="budget"
                    className="hidden peer"
                    checked={budget === item}
                    onChange={() => handleBudgetChange(item)}
                  />
                  <span className="px-6 py-2 border border-gray-300 rounded-full peer-checked:bg-gray-200 ">
                    {item}
                  </span>
                </label>
              )
            )}
          </div>
          <div className="text-black font-semibold mt-8 mb-2">
            Tell us more about the project
          </div>
          <textarea
            id="project-details"
            className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Write here"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
          ></textarea>
          <Button
            className="mt-8 font-semibold"
            color="primary"
            size="md"
            radius="sm"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <div className="my-6">
          <Card className=" shadow-none border-2 bg-transparent">
            <CardBody className="grid grid-cols-2 max-md:grid-cols-1 justify-between">
              <div>
                <p className="text-lg font-semibold">Have any questions?</p>
                <p>
                  Do not hesitage to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
              </div>
              <div className="md:flex justify-end items-end content-end">
                <div>
                  <p className="text-lg font-semibold">contact@frytx.com</p>
                  <p className="text-lg font-semibold">+91 1234 567890</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default formLayout;
