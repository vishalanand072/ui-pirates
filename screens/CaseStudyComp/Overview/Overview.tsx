import React from "react";

const OverviewPage = (props: any) => {
  return (
    <div className="container  mx-auto px-20 max-lg:px-16 max-md:px-12 my-12">
      <div className="">
        <div className="bg-white rounded-lg p-0">
          <section className="mb-6">
            <h2 className="text-sm font-bold text-subtitle">OVERVIEW</h2>
            <p className="text-lg ">{props.overviewdata.overview}</p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 rounded-lg border-1">
            <div>
              <h3 className="text-sm font-semibold text-subtitle">CLIENT</h3>
              <p className="text-base font-medium ">
                {props.overviewdata.Client}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-subtitle">INDUSTRY</h3>
              <p className="text-base font-medium ">
                {props.overviewdata.Industry}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-subtitle">PLATFORM</h3>
              <p className="text-base font-medium ">
                {props.overviewdata.Platform}
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-sm font-semibold text-subtitle">OBJECTIVE</h3>
              <p
                className="text-base font-medium "
                style={{ textAlign: "justify" }}
              >
                {props.overviewdata.Objective}
              </p>
            </div>
          </section>
          {/* Duplicate blue card section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-6 bg-blue-50 p-0 rounded-lg h-[70vh]">
            {/* Empty card */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
