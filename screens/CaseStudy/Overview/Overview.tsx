import React from 'react';

const OverviewPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-500">OVERVIEW</h2>
          <p className="text-lg text-black">
            Xperiti is a comprehensive research platform designed to streamline the management and execution of both qualitative and quantitative research studies, providing an intuitive UI/UX for researchers and participants alike.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-blue-50 p-4 rounded-lg">
          <div>
            <h3 className="text-sm font-semibold text-gray-500">CLIENT</h3>
            <p className="text-base font-medium text-black">Xperiti</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">INDUSTRY</h3>
            <p className="text-base font-medium text-black">Market Research</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500">PLATFORM</h3>
            <p className="text-base font-medium text-black">SaaS application</p>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-500">OBJECTIVE</h3>
            <p className="text-base font-medium text-black" style={{ textAlign: 'justify' }}>
              Redesign the Xperiti SaaS app to create an integrated, user-friendly platform for managing qualitative and quantitative research studies, improving efficiency and user satisfaction.
            </p>
          </div>
        </section>
        {/* Duplicate blue card section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-blue-50 p-4 rounded-lg">
          {/* Empty card */}
        </section>
      </div>
    </div>
  );
}

export default OverviewPage;
