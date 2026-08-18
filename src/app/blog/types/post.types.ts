export interface PostSection {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  /** Used as <title>; keeps the H1 free to read naturally. */
  readonly metaTitle: string;
  readonly description: string;
  readonly excerpt: string;
  /** ISO date, used for article schema and the visible date. */
  readonly published: string;
  readonly readingMinutes: number;
  readonly topic: string;
  readonly sections: readonly PostSection[];
  /** Internal links that continue the reader's intent. */
  readonly related: readonly { readonly label: string; readonly path: string; readonly description: string }[];
}
