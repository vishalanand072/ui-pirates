import check from "@/public/check.png";
import Image from "next/image";

const SolutionCard = (props: any) => {
  return (
    <>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <div className="medium-heading mb-8 text-subtitle">SOLUTIONS</div>
          <ul className="list-none space-y-4">
            {props.solutions[0].list.map((item: any, index: any) => {
              return (
                <li className="flex items-center ">
                  {/* <span className="text-green-500"> */}
                  <Image
                    src={check}
                    alt="Solution 1"
                    width={25}
                    height={25}
                    className="mr-3"
                  />
                  {/* </span> */}
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

export default SolutionCard;
