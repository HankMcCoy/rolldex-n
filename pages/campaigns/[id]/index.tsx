import type { NextPage } from "next";
import { Page } from "components/layout";
import { LinkBox } from "components/link-box";
import { TitledSection } from "components/titled-section";
import { useRouter } from "next/router";
import { campaignsById, sessions, members } from "fake-data";

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
            <div className="flex flex-col space-y-1">
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
        <div className="flex-1">
          <TitledSection title="People" />
          <TitledSection title="Factions" />
          <TitledSection title="Places" />
        </div>
      </div>
    </Page>
  );
};

export default ViewCampaign;
