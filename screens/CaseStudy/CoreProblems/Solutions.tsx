const SolutionCard = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-8">
        <div>
          <div className="text-left font-bold text-4xl mb-8">SOLUTIONS</div>
          <ul className="list-none space-y-4 text-xl">
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <p>
                Xperiti's integrated platform streamlines study management,
                saving time and enhancing engagement.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <p>
                Xperiti consolidates all research activities into a single,
                cohesive platform.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <p>
                Xperiti offers integrated tools for both qualitative and
                quantitative research, ensuring smooth workflows.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <p>
                Xperiti automates tracking and incentive management, reducing
                errors and saving time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SolutionCard;
