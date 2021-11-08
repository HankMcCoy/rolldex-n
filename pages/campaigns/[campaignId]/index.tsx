import type { NextPage, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useCallback } from "react";
import { Page } from "components/layout";
import { LinkBox } from "components/link-box";
import { TitledSection } from "components/titled-section";
import { AddableList } from "components/addable-list";
import { useRouter } from "next/router";
import { convertParams } from "r-util";
import { campaignsById, sessions, members, nouns, Noun } from "fake-data";

const people = nouns.filter((n) => n.noun_type === "PERSON");
const places = nouns.filter((n) => n.noun_type === "PLACE");
const things = nouns.filter((n) => n.noun_type === "THING");
const factions = nouns.filter((n) => n.noun_type === "FACTION");

interface Props {
  params: {
    campaignId: string;
  };
}
const ViewCampaign: NextPage<Props> = ({ params }) => {
  const id = params.campaignId;
  const getNounEl = useCallback(
    (n: Noun) => (
      <LinkBox
        title={n.name}
        desc={n.summary}
        href={`/campaigns/${id}/nouns/${n.id}`}
      />
    ),
    [id]
  );

  const campaign = campaignsById[id];
  return (
    <Page
      heading={campaign.name}
      breadcrumbs={[{ text: "Campaigns", href: "/campaigns" }]}
    >
      <div className="flex space-x-6">
        <div className="flex-1 flex flex-col space-y-6">
          <TitledSection title="Description">
            {campaign.description}
          </TitledSection>
          <TitledSection title="Members">
            {members.map((m) => (
              <LinkBox title={m.email} href="#" />
            ))}
          </TitledSection>
          <TitledSection title="Sessions">
            <div className="flex flex-col space-y-2">
              {sessions.map((s) => (
                <LinkBox
                  title={s.name}
                  desc={s.summary}
                  href={`/campaigns/${id}/sessions/${s.id}`}
                />
              ))}
            </div>
          </TitledSection>
        </div>
        <div className="flex-1 flex flex-col space-y-6">
          <AddableList
            title="People"
            seeAllHref={`/campaigns/${id}/nouns/people`}
            entities={people}
            getListItem={getNounEl}
          />
          <AddableList
            title="Factions"
            seeAllHref={`/campaigns/${id}/nouns/factions`}
            entities={factions}
            getListItem={getNounEl}
          />
          <AddableList
            title="Places"
            seeAllHref={`/campaigns/${id}/nouns/places`}
            entities={places}
            getListItem={getNounEl}
          />
          <AddableList
            title="Things"
            seeAllHref={`/campaigns/${id}/nouns/things`}
            entities={things}
            getListItem={getNounEl}
          />
        </div>
      </div>
    </Page>
  );
};

interface NounParams extends ParsedUrlQuery {
  campaignId: string;
}
export const getServerSideProps: GetServerSideProps = async (ctx) =>
  convertParams<NounParams>(ctx);

export default ViewCampaign;
