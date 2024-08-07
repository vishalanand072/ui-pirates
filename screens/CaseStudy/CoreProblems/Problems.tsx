import { ExclamationMark } from "@phosphor-icons/react";
import check from "@/public/explan.png";
import Image from "next/image";

const Problems = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <div className="medium-heading mb-8 text-subtitle">PROBLEMS</div>
          <ul className="list-none space-y-4 text-lg">
            {[...Array(4)].map((item, index) => {
              return (
                <li className="flex items-center">
                  <Image
                    src={check}
                    alt="Solution 1"
                    width={25}
                    height={25}
                    className="mr-3"
                  />
                  <p className="normal">
                    Inefficiencies resulted in wasted time and potential loss of
                    participant engagement.
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Problems;
