import check from "@/public/check.png";
import Image from "next/image";

const SolutionCard = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <div className="medium-heading mb-8 text-subtitle">SOLUTIONS</div>
          <ul className="list-none space-y-4">
            {[...Array(4)].map((item, index) => {
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
                  <p className="normal">
                    Xperiti's integrated platform streamlines study management,
                    saving time and enhancing engagement.
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

export default SolutionCard;
