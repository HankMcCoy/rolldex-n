import { $Diff } from "utility-types";
import campaignsRaw from "./campaigns.json";
import nounsRaw from "./nouns.json";

/**
 * CAMPAIGNS
 */
export type Campaign = {
  id: number;
  name: string;
  description: string;
  inserted_at: string;
  updated_at: string;
  created_by_id: number;
};

export type DraftCampaign = $Diff<
  Campaign,
  {
    id: number;
    inserted_at: string;
    updated_at: string;
    created_by_id: number;
  }
>;

export const campaigns = campaignsRaw as Array<Campaign>;

/**
 * NOUNS
 */
const NounTypeMap = Object.freeze({
  PERSON: null,
  PLACE: null,
  THING: null,
  FACTION: null,
});
export type NounType = keyof typeof NounTypeMap;
export const asNounType = (val: string): NounType | undefined => {
  if (NounTypeMap.hasOwnProperty(val)) {
    return val as NounType;
  }
  return undefined;
};

export type Noun = {
  id: number;
  name: string;
  campaign_id: number;
  noun_type: NounType;
  summary: string;
  notes: string;
  private_notes: string;
  inserted_at: string;
  updated_at: string;
};

export type DraftNoun = $Diff<
  Noun,
  { id: number; inserted_at: string; updated_at: string }
>;

export const nouns = nounsRaw as Array<Noun>;
