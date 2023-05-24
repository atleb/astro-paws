export interface BlenderData {
  items: (ArticleStub | ArticleBundle)[];
  type: 'blend-response';
  properties: {
    id: string;
    name: string;
    version: number;
    context: string;
  };
}

export interface CollectionData {
  hits: Hits;
  items: ArticleStub[];
}

export interface SectionList {
  hits: Hits;
  items: CnpSectionListItem[];
}

// For some reason sections in a list is different
export interface CnpSectionListItem {
  id: string;
  locale: string;
  newsroom: string;
  type: 'section';
  model: Omit<CnpSection, 'parent'> & {
    parentId?: string;
  };
}

export interface CnpSection {
  id: string;
  title: string;
  enabled: boolean;
  parent?: CnpSection;
}

export interface CnpTag {
  id: string;
  title: string;
  type: string;
  slug: string;
}

export interface CnpStory {
  id: string;
  title: string;
  updated: string;
  slug: string;
  description?: string;
  background?: string;
}

export interface CnpAuthor {
  id: string;
  title: string;
  description: string;
  slug: string;
  contacts: Contact[];
}

export interface Contact {
  type: string;
  value: string;
}

export interface ArticleBase {
  id: string;
  locale: string;
  newsroom: string;
  src?: string;
}

export interface ArticleStub extends ArticleBase {
  type: 'article';
  highlights?: Highlights;
}

export interface ArticleBundle extends ArticleBase {
  items: ArticleStub[];
  type: 'bundle';
}

export interface Hits {
  total: number;
  size: number;
  from: number;
}

export interface Highlights {
  title: HighlightedText;
  text: HighlightedText[];
}

export interface HighlightedText {
  value: string;
  markup: Markup[];
}

export interface Markup {
  type: string;
  offset: number;
  length: number;
}
