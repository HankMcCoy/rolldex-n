/// <reference path="../../../../types/index.d.ts" />
import { campaignsById, nounsById, Noun } from "fake-data";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Page } from "components/layout";
import { TitledSection } from "components/titled-section";
import { convertParams } from "r-util";
import Markdown from "react-remarkable";

interface Props {
  params: {
    nounId: string;
    campaignId: string;
  };
}
const NounDetailPage = ({ params }: Props) => {
  const noun = nounsById[params.nounId];
  const campaign = campaignsById[params.campaignId];

  return (
    <Page
      heading={noun.name}
      breadcrumbs={[
        { text: "Campaigns", href: "/campaigns" },
        { text: campaign.name, href: `/campaigns/${campaign.id}` },
        { text: "People", href: `/campaigns/${campaign.id}/nouns/people` },
      ]}
    >
      <TitledSection title="Summary">
        <p>{noun.summary}</p>
      </TitledSection>
      <TitledSection title="Notes">
        <p className="prose">
          <Markdown source={noun.notes} />
        </p>
      </TitledSection>
      <TitledSection title="Private Notes">
        <p>{noun.private_notes}</p>
      </TitledSection>
    </Page>
  );
};

interface NounParams extends ParsedUrlQuery {
  nounId: string;
  campaignId: string;
}
export const getServerSideProps: GetServerSideProps = async (ctx) =>
  convertParams<NounParams>(ctx);

export default NounDetailPage;
