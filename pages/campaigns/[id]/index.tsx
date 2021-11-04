import type { NextPage } from "next";
import { Page } from "components/layout";
import { useRouter } from "next/router";
import { campaignsById } from "fake-data";

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
      {campaign.description}
    </Page>
  );
};

export default ViewCampaign;
