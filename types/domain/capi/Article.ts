/**
 * schema for a V5 SMP article
 */

export interface Access {
  restrictions: string[];
}

export interface Author {
  id?: string;
  title: string;
  contacts?: Contact[];
  description?: string;
  image?: string;
}

export interface IdOriginator extends Author {
  type: 'id';
}

export interface TitleOriginator {
  type: 'title';
  title: string;
}

export type Originator = IdOriginator | TitleOriginator;

export interface Contact {
  type: 'email' | 'title' | 'twitter' | 'facebook' | 'agency' | 'other';
  value: string;
}
export interface Characteristics {
  /** lifetime: 0-60 in steps of 20 */
  lifetime?: number;
  /** hotness: 0-100 in steps of 10 */
  hotness?: number;
}

export interface Changes {
  created: string;
  updated: string;
  /** When the article was first published */
  firstPublished?: string;
  /** When the article was last published */
  published?: string;
  deleted?: string;
}

export interface Section {
  id: string;
  title?: string;
  /** Default value expected to be true when not set */
  enabled?: boolean;
  parent?: Section;
}

export interface Source {
  /** e.g. "licensed" */
  type: string;
  /** id of the external provider, e.g. "ntb" */
  id: string;
  /** title of the external provider, e.g. "NTB" */
  title: string;
  /** reference to the original article or telegram */
  reference: string;
  /** Author names from the original content */
  authors: string[];
  originators?: Originator[];
  contracts?: string[];
}

export interface Story {
  id: string;
  title?: string;
  description?: string;
  updated?: string;
  /** Default value expected to be true when not set */
  enabled?: boolean;
  background?: RichText;
}

export interface Tag {
  id: string;
  slug: string;
  title?: string;
  type?: 'descriptor' | 'organization' | 'person' | 'location' | 'event';
}

export interface Text {
  value: string;
  markup?: Markup[];
}

export interface Markup {
  type:
    | 'style:strong'
    | 'style:em'
    | 'style:symbol'
    | 'style:underline'
    | 'style:highlight'
    | 'style:superscript'
    | 'style:subscript'
    | 'link:internal'
    | 'link:external';
  uri?: string;
  symbol?: string;
  offset: number;
  length: number;
}

export interface RichText {
  /** The type of block */
  blockType:
    | 'paragraph'
    | 'list:ordered'
    | 'list:unordered'
    | 'list:checked'
    | 'quote'
    | 'heading'
    | 'heading:level-2';
  /** Required for all block types except lists	 */
  text?: Text;
  /** Required for list block types */
  items?: Text[];
}

export interface PromotionContent {
  /** Alternative title */
  title?: Text;
  /** Alternative description */
  description?: Text;
  /** Alternative image asset */
  imageAsset?: ImageAsset;
  slug: string;
}

export interface ImageAsset {
  /** the image id */
  id: string;
  /** Image dimensions in pixels */
  size: {
    width: number;
    height: number;
  };
  /** Image hotspot if present */
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  main?: string;
  snapshots?: string;
}

export interface Version {
  sequenceNo: number;
}

export interface CapiArticle {
  access: Access;
  authors: Author[];
  characteristics?: Characteristics;
  changes: Changes;
  components: ComponentBase[];
  customProperties?: CustomProperties;
  presentationProperties?: Record<string, string>;
  id: string;
  language: 'nb' | 'nn' | 'sv' | 'en';
  newsroom: string;
  schemaType: 'article' | 'teaser';
  schemaVersion: 5;
  section: Section;
  sources?: Source[];
  source?: Source;
  immediateSource?: Source;
  state?: 'draft' | 'done' | 'published';
  story?: Story;
  tags?: Tag[];
  title: Text;
  promotionContent?: PromotionContent;
  version: Version;
  isAutoUpdating: boolean;
  scope: string;
  enrichments: ArticleEnrichments;
}

export type CustomProperties = Record<
  string,
  string | string[] | boolean | RichText | Text | ImageAsset
>;

export interface ArticleEnrichments {
  wordCount: number;
  // Use double quotes as a workaround for bug in ts-auto-guard
  // https://github.com/rhys-vdw/ts-auto-guard/issues/212
  // prettier-ignore
  "article-comments": {
    count: number;
  };
}

/** Base interface for all components  */
export interface ComponentBase {
  type: string;
  subtype?: string;
  presentationProperties?: Record<string, string>;
}

export interface ArticleComponent extends ComponentBase {
  type: 'article';
  articleId: string;
  linkTitle?: string;
}
export interface BreakpointComponent extends ComponentBase {
  type: 'breakpoint';
}

/** Note: Either a title or at least one paragraph is required */
export interface FactComponent extends ComponentBase {
  type: 'fact';
  title?: Text;
  paragraphs?: RichText[];
}

export interface Gallery extends ComponentBase {
  type: 'gallery';
  components: (Image | VideoComponent)[];
  /** @deprecated and not in use.
   * Replaced by {@link ComponentBase#presentationProperties} in {@link ComponentBase}
   * */
  characteristics?: Characteristics;
}

export interface Grade extends ComponentBase {
  type: 'grade';
  /** Possible values and conversion to dice:
   * @example [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1].map(grade => Math.round(6 * grade));
   */
  grade: number;
}

export interface List extends ComponentBase {
  type: 'list';
  components: ComponentBase[];
}

export interface Image extends ComponentBase {
  type: 'image';
  imageAsset: ImageAsset;
  caption?: Text;
  byline?: { title: string };
  sourceId?: string;
  /**
   * @deprecated and not in use in Polaris.
   */
  characteristics?: {
    /** number from 0-100, (unknown if not present) */
    significance?: number;
    /** illustration or graph (unknown if not present) */
    figure?: boolean;
    /** is sensitive content (unknown if not present) */
    sensitive?: boolean;
    /** how it's intended to be used, e.g. "legend" */
    intention?: string;
  };
}

export interface Quote extends ComponentBase {
  type: 'quote';
  /** The actual quote */
  quote: Text;
  /** Person who expressed quote */
  source?: Text;
  /** Context of the quote; may be a book title, year, situation, description of the source */
  context?: Text;
}

export interface Map extends ComponentBase {
  type: 'map';
  /** Zoom level as a number */
  zoom: number;
  /** Center of the map as a point object*/
  location: Point;
  /** Bounds of the map */
  bounds: {
    /** South west point */
    sw: Point;
    /** North east point */
    ne: Point;
  };
  mapConfig?: Record<string, string>;
}

export interface Point {
  /** Latitude in WGS84 decimal */
  lat: number;
  /** Longitude in WGS84 decimal */
  lon: number;
}

export interface Table extends ComponentBase {
  type: 'table';
  /** Array of arrays of unformatted strings */
  rows: string[][];
  /** Columns and rows to be used as headers */
  headers: {
    rows: number[];
    columns: number[];
  };
}

export interface TextComponent extends ComponentBase {
  type: 'text';
  subtype?: 'lead';
  paragraphs: RichText[];
}

export interface Subheading extends ComponentBase {
  type: 'subheading';
  text: Text;
}

export interface UrlComponent extends ComponentBase {
  type: 'url';
  /** Url of the resource */
  url: string;
  /** Title as a text object */
  title?: Text;
  /** Label of the linked resource */
  label?: string;
  /** Enrichment data object holding enrichment data */
  data?: EnrichmentData;
}

export interface EnrichmentData {
  /** Type of resource (video, tweet, instagram) */
  type?: string;
  /** Name of the resource (youtube, vimeo, twitter, instagram) */
  source?: string;
  /** The canonical url of the resource */
  canonicalUrl?: string;
  /** A thumbnail image url */
  image?: string;
  /** a map of custom properties for a type/source */
  customProperties?: Record<string, string | number | Record<string, string>>;
}

export interface VideoComponent extends ComponentBase {
  type: 'video';
  videoAsset: VideoAsset;
  title?: Text;
  /** a video description */
  description?: string | Text;
  characteristics?: {
    /** number from 0-100, (unknown if not present) */
    significance?: number;
    /** how it's intended to be used, for example "intro" */
    intention?: string;
  };
  provider?: {
    /** video service name, e.g. "svp" */
    service?: string;
    /**service channel id */
    id?: string;
  };
  imageAsset?: {
    id: string;
    main?: string;
    snapshots?: string;
  };
}

export interface VideoAsset {
  /** id as string, e.g. "12345" */
  id: string;
  metadata?: Record<string, string>;
  sourceFiles?: SourceFile[];
  chapters?: Chapter[];
}
export interface SourceFile {
  bitrate: number;
  height: number;
  sourceFile: string;
  width: number;
}

export interface Chapter {
  description?: string;
  featured: boolean;
  timeline: number;
  title: string;
}

export interface DeprecatedInternalComment extends ComponentBase {
  type: 'deprecated-internal-comment';
  comment: string;
}

/** Not in the specification but CAPI sends it and we're using it as well */
export interface DeprecatedIntegration extends ComponentBase {
  type: 'deprecated-integration';
  url?: string;
  body?: string;
  data?: Record<string, unknown>;
  title?: string;
}
