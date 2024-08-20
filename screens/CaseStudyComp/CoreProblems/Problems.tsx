import { ExclamationMark } from "@phosphor-icons/react";
import check from "@/public/explan.png";
import Image from "next/image";

const Problems = (props: any) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <div className="medium-heading mb-8 text-subtitle">PROBLEMS</div>
          <ul className="list-none space-y-4 text-lg">
            {props.problems[0].list.map((item: any, index: any) => {
              return (
                <li className="flex items-center">
                  <Image
                    src={check}
                    alt="Solution 1"
                    width={25}
                    height={25}
                    className="mr-3"
                  />
                  <p className="normal">{item.item}</p>
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
