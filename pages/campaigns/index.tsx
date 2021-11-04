import type { NextPage } from "next";
import Link from "next/link";
import { Sidebar } from "components/layout";
import { campaigns } from "fake-data";

const CampaignList: NextPage = () => {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="px-6 py-4 flex flex-col space-y-2">
          {campaigns.map((c) => (
            <Link href={`/campaigns/${c.id}`}>
              <a className="p-4 border border-gray-300">
                <div className="font-normal pb-1">{c.name}</div>
                <div>{c.description}</div>
              </a>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CampaignList;
