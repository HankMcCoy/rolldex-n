/// <reference path="../../../../types/index.d.ts" />
import { campaignsById, nounsById, Noun } from "fake-data";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Page } from "components/layout";
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
      <h2>Summary</h2>
      <p>{noun.summary}</p>
      <h2>Notes</h2>
      <p className="prose">
        <Markdown source={noun.notes} />
      </p>
      <h2>Private Notes</h2>
      <p>{noun.private_notes}</p>
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
