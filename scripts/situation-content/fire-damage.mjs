/** /situations/fire-damage — situation-page/sell-fire-damaged-house-st-petersburg.html */

export const FIRE_DAMAGE_CONTENT = {
  process: {
    secondaryCta: { label: "Learn more about our process", href: "/how-it-works" },
  },
  areas: {
    areasNote: "Not sure if your property is in our service area? ",
    areasNoteLink: { label: "Contact us to find out", href: "/contact" },
    areasNoteAfter: " — we often work with homeowners in adjacent counties.",
  },
  resources: {
    items: [
      {
        tag: "City",
        title: "St Petersburg City Hall",
        body: "General city services, property information, building permits, and code compliance for properties within St. Petersburg city limits.",
      },
      {
        tag: "County",
        title: "Pinellas County Government Center",
        body: "County-level property records, services, and government offices for properties throughout Pinellas County.",
      },
      {
        tag: "Court Records",
        title: "Pinellas County Clerk of the Circuit Court & Comptroller",
        body: "Official property documents, deed recordings, and title-related records. Essential for confirming ownership before closing.",
      },
      {
        tag: "Tax",
        title: "Pinellas County Tax Collector",
        body: "Property tax records and payment information. Confirm any outstanding tax obligations before your property closing.",
      },
      {
        tag: "FEDERAL — FEMA",
        title: "FEMA Individual Assistance Program",
        body: "If your property is in a federally declared disaster area, you may qualify for assistance grants before deciding to sell.",
        href: "https://www.fema.gov/assistance/individual",
        linkLabel: "fema.gov/assistance →",
      },
      {
        tag: "STATE — INSURANCE",
        title: "Florida Department of Financial Services",
        body: "File insurance complaints and verify adjuster licensing — relevant when an insurer underpays or denies a fire damage claim.",
        href: "https://www.myfloridacfo.com/division/consumers",
        linkLabel: "myfloridacfo.com →",
      },
    ],
  },
};
