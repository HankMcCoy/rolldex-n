import type { NextPage } from "next";
import { Page } from "components/layout";
import { useRouter } from "next/router";
import { campaignsById, sessions } from "fake-data";

const ViewCampaign: NextPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) return <div>Not Found</div>;

  const campaign = campaignsById[id];
  return (
    <Page
      heading={campaign.name}
      breadcrumbs={[{ text: "Campaigns", href: "/campaigns" }]}
    >
      <h2>
      {campaign.description}
      </h2>
      <h2>Members</h2>
      <h2>Sessions</h2>
    </Page>
  );
};

export default ViewCampaign;
