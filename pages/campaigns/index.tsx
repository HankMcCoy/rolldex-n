import type { NextPage } from "next";
import { LinkBox } from "components/link-box";
import { Page } from "components/layout";
import { campaigns } from "fake-data";

const CampaignList: NextPage = () => {
  return (
    <Page heading="Campaigns">
      {campaigns.map((c) => (
        <LinkBox
          title={c.name}
          desc={c.description}
          href={`/campaigns/${c.id}`}
        />
      ))}
    </Page>
  );
};

export default CampaignList;
