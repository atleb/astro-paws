import type { Text, VideoAsset, VideoComponent } from "../capi/Article";
import type {
  ArticleStub,
  BlenderData,
  CnpAuthor,
  CnpSection,
  CnpStory,
  CnpTag,
  Hits,
} from "../capi/Collections";
import type { JupiterArticle } from "../capi/Jupiter";

export type Model = Section | Tag | CollectionStory | CollectionAuthor;

export interface CollectionInData {
  items: (ArticleStub | JupiterArticle)[];
  model?: Model;
  hits?: Omit<Hits, "from">;
}

export type ModelInData = SectionModel | TagModel | StoryModel | AuthorModel;

export interface SectionModel {
  type: "section";
  data: CnpSection;
}
export interface TagModel {
  type: "tag";
  data: CnpTag;
}
export interface StoryModel {
  type: "story";
  data: CnpStory;
}
export interface AuthorModel {
  type: "author";
  data: CnpAuthor;
}

export interface BlendInData extends BlenderData {
  blendersrc: string;
}

export interface BlendOptions {
  srcFilter?: string;
  size?: number;
}

export interface TransformOptions {
  includeComments?: boolean;
  isShortnews?: boolean;
}

export interface Teaser {
  id: string;
  characteristics: Characteristics;
  access: Access;
  type: "article";
  title: {
    value: string; // TODO: flatten -> PIL-586
  };
  changes: Changes;
  urls: {
    relative: string; // TODO: flatten -> PIL-586
  };
  promotionContent: PromotionContent;
  section: Section;
  customProperties: CustomProperties;
  authors?: ContentAuthor[];
  tags?: Tag[];
  presentationProperties?: PresentationProperties;
  contentSharing?: ContentSharing;
  story?: ContentStory;
  lead?: string;
}

export interface Characteristics {
  lifetime: number;
  hotness: number;
}

export interface Access {
  paywall: boolean;
}

export interface Changes {
  updated?: string;
  published: string;
}

export interface ImageAsset {
  id: string;
  size: {
    width: number;
    height: number;
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface PromotionContent {
  slug: string;
  imageAsset?: ImageAsset | { url: string };
  frontPageVideo?: FrontPageVideo;
}

export interface FrontPageVideo {
  provider: VideoComponent["provider"];
  title?: Text;
  presentationProperties?: Record<string, string>;
  videoAsset: VideoAsset;
  poster?: string;
  previewSources: string[];
}

export const CustomPropKeys = [
  "frontPageCardSize",
  "feature",
  "breaking",
  "tip",
  "skin",
  "presentation",
  "frontPageLeadText",
  "livemode",
  "varselsignal",
  "grade",
  "prefix",
  "label",
  "comments",
  "frontPageImageHeightOverride",
  "fontSize",
  "bundleTitle",
  "showByline",
  "countdown",
  "external_url",

  // Custom props for NTB fotball-robot:
  "ntbStageId",
  "ntbMatchId",
  "ntbParticipatingTeams",
  "ntbParticipatingClubs",
] as const;

export type CustomProperties = {
  [key in typeof CustomPropKeys as string]:
    | string
    | boolean
    | number
    | undefined;
};

export interface Section {
  id: string;
  title: string;
  parent?: Section;
}

export interface Tag {
  id: string;
  title: string;
  slug: string;
}

export interface BaseAuthor {
  id?: string;
  fullname: string;
  description?: string;
}

export interface ContentAuthor extends BaseAuthor {
  image?: string;
  origin?: string;
  email?: string;
  number?: string;
  title?: string;
}

export interface CollectionAuthor extends BaseAuthor {
  slug: string;
}

export interface BaseStory {
  id: string;
  title: string;
  slug: string;
}

export interface ContentStory extends BaseStory {
  description?: string;
}

export interface CollectionStory extends BaseStory {
  background?: string;
}

export interface ContentSharing {
  sourceId: string;
  sourceNewsroom: string;
  sourceSlug?: string;
  sourceSection?: string;
}

export interface PresentationProperties {
  introType: string;
  navigation: string;
  introTextPosition: string;
  promotionType: string;
}
