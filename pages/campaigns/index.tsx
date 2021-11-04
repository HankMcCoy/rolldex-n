import type { NextPage } from "next";
import Link from "next/link";
import { Page } from "components/layout";
import { campaigns } from "fake-data";

const CampaignList: NextPage = () => {
  return (
    <Page heading="Campaigns">
      {campaigns.map((c) => (
        <Link href={`/campaigns/${c.id}`}>
          <a className="p-4 border border-gray-300">
            <div className="font-normal pb-1">{c.name}</div>
            <div>{c.description}</div>
          </a>
        </Link>
      ))}
    </Page>
  );
};

export default CampaignList;
