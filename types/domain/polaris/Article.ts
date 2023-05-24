import type { ArticleMeta } from '../../utils/transform-by-object';
import type {
  Access,
  ArticleEnrichments,
  Characteristics,
  ComponentBase,
  Gallery,
  Image,
  ImageAsset,
  PromotionContent,
  RichText,
  Section,
  Story,
  Tag,
  Text,
  TextComponent,
  VideoComponent,
} from '../capi/Article';
import type { ContentAuthor, ContentSharing, Teaser } from './Teaser';

export interface ComponentGroup {
  type: string;
  components: ComponentBase[];
  presentationProperties?: Record<string, string>;
}

export interface InternalArticleLink extends ComponentBase {
  type: 'article';
  linkTitle: string | undefined;
  teaser: Teaser | string;
}

export interface ExpandedIntegration extends ComponentBase {
  type: 'integration';
  url?: string;
  title?: Text | string;
  subtype?: string;
  body?: string;
  meta?: {
    iframeId: number;
  };
  height?: string;
}

export interface Changes {
  published?: string;
  updated?: string;
}

export interface Intro {
  type: 'Intro' | 'FeatureIntro';
  title: string;
  subtype?: string;
  lead?: string;
  media?: ComponentBase;
  promo?: Image | PromoImage;
}

interface QuestionPresentationProps {
  richType?: 'question' | string;
}
export interface Question {
  type: 'question';
  presentationProperties?: QuestionPresentationProps;
  components?: ComponentBase[];
}

export interface QuizComponent extends ComponentBase {
  type: 'quiz';
  components?: Question[];
  intro?: object;
  summary?: object;
  theme?: string;
}

export interface WhoIsWhoComponent extends ComponentBase {
  type: 'who-is-who';
  intro: Intro;
  text?: TextComponent;
}

export interface LoopingVideoComponent extends Omit<VideoComponent, 'type'> {
  type: 'loopingVideo';
}

export interface Fade extends Omit<Gallery, 'type'> {
  type: 'fade';
}

export interface InlineQuote extends ComponentBase {
  paragraphs: (RichText | { quote: Text; source?: Text; context?: Text })[];
}

export interface PromoImage {
  type: 'image';
  imageAsset: { url: string };
}

export interface SomeTags {
  title: string;
  description?: string;
  image?: ImageAsset | { url: string };
}

export interface MappedArticle {
  authors?: ContentAuthor[];
  components: (ComponentBase | ComponentGroup)[];
  urls: {
    relative: string;
  };
  changes?: Changes;
  intro?: Intro;
  customProperties: Record<string, unknown>;
  tags?: Tag[];
  // Omit<Source, 'authors | 'originators'
  source?: {
    type: string;
    id: string;
    title: string;
    reference: string;
    contracts?: string[];
  };

  // All properties on article not touched by transformations
  schemaType: string;
  id: string;
  section: Section;
  story?: Story;
  title: Text;
  presentationProperties?: Record<string, string>;
  characteristics: Characteristics;
  promotionContent?: PromotionContent;
  access: Access;
  newsroom: string;
  contentSharing?: ContentSharing;
  enrichments?: ArticleEnrichments;
  some?: SomeTags;
  meta?: Omit<ArticleMeta, 'id' | 'newsroom' | 'hasESIRelated'>;

  // Properties seemingly not used in front
  // schemaVersion: string;
  // version: Version;
  // state: string;
  // language: string;
  // isAutoUpdating: boolean;
  // scope: string;
}
