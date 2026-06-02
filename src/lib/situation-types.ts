export type SituationStat = {
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
};

export type SituationStep = {
  num: string;
  title: string;
  body: string;
};

export type SituationCard = {
  icon?: string;
  title: string;
  body: string;
};

export type SituationFaqItem = { q: string; a: string };

export type SituationCompareRow = {
  label: string;
  traditional: string;
  cash: string;
};

export type SituationInfoBlock = {
  title: string;
  body?: string;
  footer?: string;
  chapters?: { title: string; body: string }[];
  list?: { title: string; body: string }[];
  callout?: { title: string; body: string };
};

export type SituationDiffItem = {
  num: string;
  title: string;
  body: string;
};

export type SituationHero = {
  eyebrow: string;
  titleLead: string;
  titleEm: string;
  titleTail: string;
  subheadline: string;
  checklist?: string[];
  formTitle: string;
  formIntro: string;
  authorRole?: string;
  addressPlaceholder?: string;
  keySteps?: { title: string; items: string[] };
};

export type SituationTitleParts = {
  eyebrow: string;
  titleLead: string;
  titleEm: string;
  titleTail: string;
  lede?: string;
};

export type SituationSectionId =
  | "stats"
  | "process"
  | "prose"
  | "cards"
  | "areas"
  | "testimonials"
  | "situations"
  | "market"
  | "guarantee"
  | "comparison"
  | "infoBlocks"
  | "diff"
  | "resources"
  | "whyUs"
  | "faq"
  | "finalCta";

export type SituationFullContent = {
  slug: string;
  label: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  hero: SituationHero;
  stats?: SituationStat[];
  sectionOrder: SituationSectionId[];
  process?: SituationTitleParts & {
    steps: SituationStep[];
    note?: string;
    primaryCta?: string;
  };
  prose?: SituationTitleParts & {
    paragraphs: string[];
    sidebar?: { title: string; items: { strong: string; text: string }[] };
  };
  cards?: SituationTitleParts & { items: SituationCard[] };
  areas?: SituationTitleParts & { areas: string[] };
  testimonials?: SituationTitleParts & {
    items: { quote: string; name: string; meta: string; initials: string }[];
  };
  situations?: SituationTitleParts & { items: SituationCard[] };
  market?: SituationTitleParts & {
    factors: { title: string; body: string }[];
    badgeValue?: string;
    badgeLabel?: string;
  };
  guarantee?: SituationTitleParts & {
    items: { title: string; body: string }[];
    asideTitle: string;
    asideBody: string;
  };
  comparison?: SituationTitleParts & {
    traditionalLabel: string;
    traditionalTimeline: string;
    cashLabel: string;
    cashTimeline: string;
    featuredBadge?: string;
    rows: SituationCompareRow[];
  };
  infoBlocks?: SituationInfoBlock[];
  diff?: SituationTitleParts & { items: SituationDiffItem[] };
  resources?: SituationTitleParts & {
    items: { title: string; body: string; tag?: string }[];
  };
  whyUs?: SituationTitleParts & {
    items: { title: string; body: string }[];
    asideTitle?: string;
    asideBody?: string;
  };
  faq: SituationTitleParts & { items: SituationFaqItem[] };
  finalCta: {
    titleLead: string;
    titleEm: string;
    titleTail: string;
    description: string;
    eyebrow?: string;
  };
};
