import type { NextPage } from "next";
import { Sidebar } from "components/layout";

const CampaignList: NextPage = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="lg:pl-64 flex flex-col flex-1">
          <main>
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CampaignList;
