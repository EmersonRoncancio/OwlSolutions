export type ProductTheme = 'light' | 'dark' | 'tint';

export interface ProductImage {
  readonly png: string;
  readonly webp: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Product {
  readonly id: string;
  readonly eyebrow: string;
  readonly name: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly useCase: string;
  readonly cta: string;
  readonly ctaHref: string;
  readonly image: ProductImage;
  readonly theme: ProductTheme;
  /** Places the mockup on the left column on desktop. */
  readonly imageFirst: boolean;
}
