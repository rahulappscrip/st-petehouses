export const RUDDER_EVENTS = {
  PAGE_VIEW: "page_view",
  FORM_STARTED: "form_started",
  FORM_FIELD_COMPLETED: "form_field_completed",
  FORM_VALIDATION_ERROR: "form_validation_error",
  FORM_SUBMITTED: "form_submitted",
  FORM_ABANDONED: "form_abandoned",
  BUTTON_CLICKED: "button_clicked",
  PHONE_NUMBER_CLICKED: "phone_number_clicked",
  EMAIL_CLICKED: "email_clicked",
} as const;

export type RudderEventName = (typeof RUDDER_EVENTS)[keyof typeof RUDDER_EVENTS];

export type ContentType = "situation" | "city" | "blog" | "general";

export type PageType =
  | "home"
  | "contact"
  | "about"
  | "reviews"
  | "faq"
  | "how_it_works"
  | "sell_your_house"
  | "get_cash_offer"
  | "cash_vs_agent"
  | "situation"
  | "city"
  | "blog"
  | "blog_post"
  | "other";

export type BaseAnalyticsProperties = {
  page_url: string;
  full_url: string;
  page_title: string;
  page_type: PageType;
  content_type: ContentType;
  situation_slug: string | null;
  situation_label: string | null;
  city_route: string | null;
  city_name: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  referrer_domain: string | null;
  traffic_source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  device_type: string;
  os: string;
  os_version: string;
  browser: string;
  browser_version: string;
  country: string | null;
  country_code: string | null;
  state: string | null;
  city: string | null;
  timezone: string;
  is_landing_page: boolean;
  landing_page_url: string;
  session_page_number: number;
  time_on_page: number;
  time_on_site: number;
  scroll_depth: number;
  scroll_25: boolean;
  scroll_50: boolean;
  scroll_75: boolean;
  scroll_100: boolean;
  timestamp: string;
};

export const LEAD_FORM_TYPE = "cash_offer_request";
