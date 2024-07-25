import { MagicCard } from "@/components/magicui/magic-card";
import CardBG from "@/public/images/cardWhitebg.png";
import Image from "next/image";
import React from "react";
// lg:flex-row flex-col
const ClientOverview = () => {
  return (
    <>
      <div className="flex justify-between items-center py-24 lg:py-24 px-8 lg:px-48 bg-white">
        <h1 className="text-black font-bold text-6xl">Client Requirements</h1>
        <span className="text-gray-300 text-6xl font-light">01</span>
      </div>
      <div className="flex px-8 lg:px-48 bg-white gap-8">
        <MagicCard className=" bg-secondary-200 ">
          <div className="flex flex-col gap-2 align-middle justify-center bg-secondary-200">
            <Image
              src={CardBG}
              alt="card"
              className="mb-2 rounded-lg bg-secondary-200"
            />
            <h1 className=" font-bold text-3xl bg-secondary-200">
              Unified Platform
            </h1>
            <div className="text-wrap text-xl font-normal text-secondary-100 mr-8 bg-secondary-200">
              Develop a single platform to manage both interviews and surveys
              research studies.
            </div>
          </div>
        </MagicCard>
        <MagicCard className=" bg-secondary-200">
          <div className="flex flex-col gap-2 align-middle justify-center">
            <Image src={CardBG} alt="card" className="mb-2 rounded-lg" />
            <h1 className=" font-bold text-3xl">User Experience</h1>
            <div className="text-wrap text-xl font-normal text-secondary-100 mr-8">
              Ensure an intuitive and seamless user interface for both
              researchers and participants.
            </div>
          </div>
        </MagicCard>
        <MagicCard className=" bg-secondary-200">
          <div className="flex flex-col gap-2 align-middle justify-center">
            <Image src={CardBG} alt="card" className="mb-2 rounded-lg" />
            <h1 className=" font-bold text-3xl">Participant Management</h1>
            <div className="text-wrap text-xl font-normal text-secondary-100 mr-8">
              Ensure efficient participant tracking and streamlined incentive
              distribution.
            </div>
          </div>
        </MagicCard>
      </div>

      <div className="flex py-8 px-8 lg:px-48 bg-white">
        <MagicCard className=" bg-secondary-200">
          <div className="flex flex-col gap-2 align-middle justify-center">
            <h1 className=" font-bold text-3xl">Outcomes</h1>
            <div className="text-wrap text-xl font-normal text-secondary-100">
              Our clients and their users were highly satisfied with our
              experience design strategy for Xperiti. By continuously improving
              the platform through agile development releases, we made Xperiti
              more robust and engaging. This approach not only enhanced user
              satisfaction but also helped grow the platform's brand in the
              market.
            </div>
          </div>
        </MagicCard>
      </div>
    </>
  );
};

export default ClientOverview;
