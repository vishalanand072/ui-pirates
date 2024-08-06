import Image from "next/image";
import pic1 from "@/public/images/clientReq_1.png";
import pic2 from "@/public/images/clientReq_2.png";
import pic3 from "@/public/images/clientReq_3.png";

const ClientRequirements = () => {
  return (
    <>
      <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
        <div className="flex justify-between items-center py-24 lg:py-24 bg-white">
          <h1 className="text-black heading">Client Requirements</h1>
          <span className="text-gray-300 text-6xl font-light">01</span>
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <Image src={pic1} alt="Client Requirements" />
              <div>
                <h1 className="text-black text-3xl font-bold mb-4">
                  Unified Platform
                </h1>
                <p className="text-xl">
                  Develop a single platform to manage both interviews and
                  surveys research studies.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <Image src={pic2} alt="Client Requirements" />
              <div>
                <h1 className="text-black text-3xl font-bold mb-4">
                  User Experience
                </h1>
                <p className="text-xl">
                  Ensure an intuitive and seamless user interface for both
                  researchers and participants.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <Image src={pic3} alt="Client Requirements" />
              <div>
                <h1 className="text-black text-3xl font-bold mb-4">
                  Participant Management
                </h1>
                <p className="text-xl">
                  Ensure efficient participant tracking and streamlined
                  incentive distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="p-8  rounded-3xl border-opacity-15 border-black border mb-16">
            <h1 className="text-black text-3xl font-bold mb-4">Outcomes</h1>
            <p className="text-xl">
              Our clients and their users were highly satisfied with our
              experience design strategy for Xperiti. By continuously improving
              the platform through agile development releases, we made Xperiti
              more robust and engaging. This approach not only enhanced user
              satisfaction but also helped grow the platform's brand in the
              market.
            </p>
          </div>
          {/* <div className="flex flex-col gap-2 align-middle justify-center p-8 rounded-lg border-black b-10 ">
          <h1 className=" font-bold text-3xl">Outcomes</h1>
          <div className="text-wrap text-xl font-normal text-secondary-100">
            Our clients and their users were highly satisfied with our
            experience design strategy for Xperiti. By continuously improving
            the platform through agile development releases, we made Xperiti
            more robust and engaging. This approach not only enhanced user
            satisfaction but also helped grow the platform's brand in the
            market.
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ClientRequirements;
