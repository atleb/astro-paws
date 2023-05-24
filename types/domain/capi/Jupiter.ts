export interface JupiterData {
  metadata: {
    newsroom: string;
  };
  items: JupiterArticle[];
}

export interface JupiterArticle {
  id: string;
  type: 'article';
}
