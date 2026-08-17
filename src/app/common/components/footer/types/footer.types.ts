export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}
