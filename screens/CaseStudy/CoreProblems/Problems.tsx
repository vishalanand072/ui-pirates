import Image from "next/image";
import Pic2 from "@/public/images/coreProblem_img2.png";

const Problems = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <div className=" text-left font-bold text-4xl mb-8">PROBLEMS</div>
          <ul className="list-none space-y-4 text-xl">
            <li className="flex items-start space-x-2">
              <span className="text-red-500">❗❗</span>
              <p>
                Inefficiencies resulted in wasted time and potential loss of
                participant engagement.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500">❗❗</span>
              <p>
                Difficulty in managing research studies efficiently due to
                fragmented tools and processes.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500">❗❗</span>
              <p>
                Specialized research tools lacked integration, leading to
                disjointed workflows.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-red-500">❗❗</span>
              <p>
                Manual tracking and management of participants and incentives
                were time-consuming and error-prone.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={Pic2}
            alt="Solution 1"
            width={500}
            height={500}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default Problems;
