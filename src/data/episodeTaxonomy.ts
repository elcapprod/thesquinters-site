export type TaxonomyItem = {
  id: string;
  label: string;
};

export const episodeTypes: Record<string, TaxonomyItem> = {
  "regular": { id: "regular", label: "Regular episode" },
  "finals": { id: "finals", label: "Finals episode" },
  "season-review": { id: "season-review", label: "Season review" },
  "interview": { id: "interview", label: "Interview" },
  "special": { id: "special", label: "Special episode" },
  "off-season": { id: "off-season", label: "Off-season" }
};

export const hosts: Record<string, TaxonomyItem> = {
  "ragnar-lothbrok": { id: "ragnar-lothbrok", label: "Ragnar Lothbrok" },
  "sparrow": { id: "sparrow", label: "Sparrow" },
  "orca": { id: "orca", label: "Orca" },
  "needles": { id: "needles", label: "Needles" }
};

export const opponents: Record<string, TaxonomyItem> = {
  "adelaide-crows": { id: "adelaide-crows", label: "Adelaide Crows" },
  "brisbane-lions": { id: "brisbane-lions", label: "Brisbane Lions" },
  "west-coast-eagles": { id: "west-coast-eagles", label: "West Coast Eagles" }
};

export const venues: Record<string, TaxonomyItem> = {
  "adelaide-oval": { id: "adelaide-oval", label: "Adelaide Oval" },
  "engie-stadium": { id: "engie-stadium", label: "ENGIE Stadium" },
  "optus-stadium": { id: "optus-stadium", label: "Optus Stadium" }
};

export const segments: Record<string, TaxonomyItem> = {
  "ragnar-parody-song": { id: "ragnar-parody-song", label: "Ragnar parody song" },
  "stoic-advice": { id: "stoic-advice", label: "Stoic Advice from Sparrow" },
  "stay-or-pay": { id: "stay-or-pay", label: "Stay or Pay" },
  "rags-bake": { id: "rags-bake", label: "Rag's Bake" },
  "ragnars-maths": { id: "ragnars-maths", label: "Ragnar's Maths" },
  "rags-bet": { id: "rags-bet", label: "Rag's Bet" },
  "hairloss": { id: "hairloss", label: "Hairloss with Orca" },
  "song-of-the-week": { id: "song-of-the-week", label: "Song of the Week with Orca" }
};

export const topics: Record<string, TaxonomyItem> = {
  "toby-greene": { id: "toby-greene", label: "Toby Greene" },
  "clayton-oliver": { id: "clayton-oliver", label: "Clayton Oliver" },
  "gws-injuries": { id: "gws-injuries", label: "GWS injuries" },
  "gws-ceo": { id: "gws-ceo", label: "GWS CEO" },
  "western-sydney": { id: "western-sydney", label: "Western Sydney" },
  "canberra": { id: "canberra", label: "Canberra" }
};

export function taxonomyLabel(
  collection: Record<string, TaxonomyItem>,
  id: string
): string {
  return collection[id]?.label ?? id;
}

export const hostLabel = (id: string) => taxonomyLabel(hosts, id);
export const opponentLabel = (id: string) => taxonomyLabel(opponents, id);
export const venueLabel = (id: string) => taxonomyLabel(venues, id);
export const segmentLabel = (id: string) => taxonomyLabel(segments, id);
export const topicLabel = (id: string) => taxonomyLabel(topics, id);
export const episodeTypeLabel = (id: string) => taxonomyLabel(episodeTypes, id);
