export type SituationStat = {
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
};

export type SituationInlineLink = {
  href: string;
  label: string;
};

export type SituationStep = {
  num: string;
  title: string;
  body: string;
  link?: SituationInlineLink;
};

export type SituationCard = {
  icon?: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  href?: string;
};

export type SituationFaqItem = { q: string; a: string; aLink?: SituationInlineLink };

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
  neighborhoodTags?: string[];
  trustPills?: string[];
  urgencyBadge?: string;
  keySteps?: { title: string; items: string[] };
  /** Optional middle crumb, e.g. city page before the situation label. */
  breadcrumbTrail?: SituationInlineLink[];
};

export type SituationTitleParts = {
  eyebrow: string;
  titleLead: string;
  titleEm: string;
  titleTail: string;
  lede?: string;
};

export type SituationCourtProcess = SituationTitleParts & {
  steps: SituationStep[];
  sidebarTitle: string;
  sidebarItems: { strong: string; text: string }[];
  callout?: { title: string; body: string };
};

export type SituationProbateItem = {
  label: string;
  question: string;
  answer: string;
};

export type SituationTimelineItem = {
  stage: string;
  duration: string;
  body: string;
};

export type SituationTaxCard = {
  label: string;
  title: string;
  body: string;
};

export type SituationValuationScenario = {
  label: string;
  title: string;
  body: string;
};

export type SituationSectionId =
  | "stats"
  | "process"
  | "buyProcess"
  | "courtProcess"
  | "probate"
  | "tax"
  | "valuation"
  | "prose"
  | "payoff"
  | "tenantRights"
  | "obligations"
  | "caseStudies"
  | "insurance"
  | "environmental"
  | "cards"
  | "areas"
  | "testimonials"
  | "situations"
  | "market"
  | "guarantee"
  | "comparison"
  | "prosCons"
  | "trust"
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
    keySteps?: { title: string; items: string[] };
    docs?: string[];
    disclosureNote?: string;
    secondaryCta?: SituationInlineLink;
  };
  courtProcess?: SituationCourtProcess;
  buyProcess?: SituationTitleParts & {
    features: SituationCard[];
    stepsTitle: string;
    steps: SituationStep[];
  };
  probate?: SituationTitleParts & {
    items: SituationProbateItem[];
    timelineTitle: string;
    timeline: SituationTimelineItem[];
    helpTitle: string;
    helpBody: string;
  };
  tax?: SituationTitleParts & {
    paragraphs: string[];
    disclaimer: string;
    cards: SituationTaxCard[];
  };
  valuation?: SituationTitleParts & {
    scenarios: SituationValuationScenario[];
    statsTitle: string;
    stats: { label: string; value: string }[];
    statsNote?: string;
  };
  prose?: SituationTitleParts & {
    paragraphs: string[];
    sidebar?: {
      title: string;
      badge?: string;
      items: { strong: string; text: string }[];
    };
    extraCard?: { title: string; items: { strong: string; text: string }[] };
  };
  tenantRights?: SituationTitleParts & {
    items: { strong: string; text: string }[];
    callout: { title: string; paragraphs: string[] };
  };
  obligations?: SituationTitleParts & {
    cards: { title: string; paragraphs: string[]; featured?: boolean }[];
  };
  caseStudies?: SituationTitleParts & {
    cases: {
      tag: string;
      title: string;
      paragraphs: string[];
      statValue: string;
      statLabel: string;
    }[];
    takeaways?: { strong: string; text: string }[];
  };
  insurance?: SituationTitleParts & {
    cards: { tag: string; title: string; paragraphs: string[]; cta?: boolean }[];
  };
  environmental?: SituationTitleParts & {
    items: { title: string; body: string }[];
  };
  payoff?: SituationTitleParts & {
    steps: { num: string; title: string; body: string }[];
    equityNote?: { title: string; body: string };
  };
  cards?: SituationTitleParts & { items: SituationCard[]; exclusionNote?: string };
  areas?: SituationTitleParts & {
    areasNote?: string;
    areasNoteLink?: SituationInlineLink;
    areasNoteAfter?: string;
    areasAside?: { title: string; body: string };
  };
  situations?: SituationTitleParts & {
    items: SituationCard[];
    dark?: boolean;
    /** Use homepage-style image cards (sit-cards) instead of icon grid. */
    imageCards?: boolean;
  };
  market?: SituationTitleParts & {
    factors: { title: string; body: string; label?: string }[];
    badgeValue?: string;
    badgeLabel?: string;
    showChart?: boolean;
    showLocal?: boolean;
    dark?: boolean;
    regions?: { label: string; body: string }[];
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
    tradeoffs?: SituationDiffItem[];
    cashNote?: string;
    traditionalNote?: string;
  };
  prosCons?: SituationTitleParts & {
    advantages: { strong: string; text: string }[];
    tradeoffs: { strong: string; text: string }[];
    footerNote?: string;
    light?: boolean;
    when?: SituationTitleParts & {
      lede?: string;
      items: SituationCard[];
    };
  };
  trust?: SituationTitleParts & {
    points: { title: string; body: string }[];
    card: { title: string; body: string };
    stats: { value: string; label: string }[];
  };
  infoBlocks?: SituationInfoBlock[];
  diff?: SituationTitleParts & { items: SituationDiffItem[] };
  resources?: SituationTitleParts & {
    items: { title: string; body: string; tag?: string; href?: string; linkLabel?: string; phone?: string; note?: string }[];
    footerNote?: string;
  };
  whyUs?: SituationTitleParts & {
    items: { title: string; body: string; icon?: string }[];
    asideTitle?: string;
    asideBody?: string;
    asideList?: string[];
    footerTitle?: string;
    footerNote?: string;
    grid?: boolean;
  };
  faq: SituationTitleParts & { items: SituationFaqItem[] };
  finalCta: {
    titleLead: string;
    titleEm: string;
    titleTail: string;
    description: string;
    eyebrow?: string;
    bullets?: string[];
  };
};
