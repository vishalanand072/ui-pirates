import React from "react";
import AboutCard from "./aboutCard";
import { AboutUIpiratesData } from "../../../types";

interface MobileProps {
  about: AboutUIpiratesData[];
}

const Mobile: React.FC<MobileProps> = ({ about }) => {
  return (
    <>
      <div className="block md:hidden mb-8">
        <div>
          <div className="">
            <p className="text-5xl max-md:text-3xl text-center">
              What about <br /> UI Pirates
            </p>
          </div>
          {about.map((item, index) => {
            return (
              <div className="mr-6" key={index}>
                <AboutCard
                  title={item.title}
                  subTitle={item.subTitle[0]?.subTitle}
                  cardColor="#EDEEE6"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mobile;
