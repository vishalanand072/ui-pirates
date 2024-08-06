import React from "react";

const OverviewPage: React.FC = () => {
  return (
    <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
      <div className="">
        <div className="bg-white rounded-lg p-8">
          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500">OVERVIEW</h2>
            <p className="text-lg text-black">
              Xperiti is a comprehensive research platform designed to
              streamline the management and execution of both qualitative and
              quantitative research studies, providing an intuitive UI/UX for
              researchers and participants alike.
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 rounded-lg border-1">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">CLIENT</h3>
              <p className="text-base font-medium text-black">Xperiti</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">INDUSTRY</h3>
              <p className="text-base font-medium text-black">
                Market Research
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">PLATFORM</h3>
              <p className="text-base font-medium text-black">
                SaaS application
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-sm font-semibold text-gray-500">OBJECTIVE</h3>
              <p
                className="text-base font-medium text-black"
                style={{ textAlign: "justify" }}
              >
                Redesign the Xperiti SaaS app to create an integrated,
                user-friendly platform for managing qualitative and quantitative
                research studies, improving efficiency and user satisfaction.
              </p>
            </div>
          </section>
          {/* Duplicate blue card section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-blue-50 p-4 rounded-lg">
            {/* Empty card */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
