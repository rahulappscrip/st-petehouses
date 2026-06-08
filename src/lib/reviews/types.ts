export type OwnerReply = {
  title: string;
  text: string;
};

export type GoogleReviewItem = {
  reviewId: string;
  quote: string;
  name: string;
  meta: string;
  initials: string;
  rating: number;
  date: string;
  isoDate: string;
  localGuide: boolean;
  link: string;
  ownerReply?: OwnerReply;
};

export type GoogleReviewsCache = {
  syncedAt: string;
  totalReviews: number;
  latestReviewId: string;
  placeInfo: {
    title: string;
    rating: number;
    address: string | null;
  };
  googleUrl: string;
  items: GoogleReviewItem[];
};

export type TestimonialsData = {
  rating: string;
  count: string;
  totalReviews: number;
  googleUrl: string;
  items: readonly GoogleReviewItem[];
};
