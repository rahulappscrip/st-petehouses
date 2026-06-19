import { AREA_CITIES as CITY_AREA_LIST, CITY_NAV_LINKS } from "./cities";
import { getSiteUrl } from "./site-url";

export const ASSETS = {
  johnPortrait: "/assets/images/john-gardepe.webp",
  johnSvg: "/assets/images/John-svg.svg",
  johnByline: "/assets/images/John.webp",
  johnCta: "/assets/images/john-gardepe-1.webp",
  ownerJohn: "/assets/images/john-own.webp",
  bbbBadge: "/assets/images/bbb-client.webp",
  logo: "/assets/images/logo.webp",
  favicon: "/favicon.ico",
  faviconPng: "/assets/images/we-buy-st-pete-favicon-res.png",
  marketChart: "/assets/images/Understanding-the-st-pete-market.webp",
  marketChartForeclosure: "/assets/images/Understanding-the-st-pete-market-foreclosure.webp",
  cashHomebuyersOptimized: "/assets/images/Cash-Homebuyers-optimized.webp",
  marketChartStPetersburg: "/assets/images/Understanding-the-st-Petersburg-cash.webp",
  marketChartPinellasPark:
    "/assets/images/Understanding-the-Pinellas-Park-cash-home-market-optimized.webp",
  whyLocalExpertiseMatters: "/assets/images/Why-local-expertise-matters.webp",
  facingForeclosure: "/assets/images/facing-foreclosure.webp",
  inheritedHome: "/assets/images/inherited-home.webp",
  inheritedOrProbateProperty: "/assets/images/Inherited-or-Probate-Property.webp",
  divorceSeparation: "/assets/images/divorce-or-seperation.webp",
  tiredLandlord: "/assets/images/tired-landload.webp",
  distressedProperty: "/assets/images/distressed-property.webp",
  relocation: "/assets/images/relocation.webp",
  upsideDownMortgage: "/assets/images/Upside-Down-Mortgage.webp",
  vacantProperty: "/assets/images/Vacant-Property.webp",
  behindOnPayments: "/assets/images/Behind-on-Payments.webp",
  noFinancingRisk: "/assets/images/No-financing-risk.webp",
  sellAsIsNoRepairs: "/assets/images/Sell-as-is-no-repairs-or-cleaning.webp",
  noAgentCommissions: "/assets/images/No-agent-commissions-or-fees.webp",
  certaintyControlClosing: "/assets/images/Certainty-and-control-over-closing.webp",
  taxLiens: "/assets/images/Tax-Liens-1.webp",
  mortgageLiens: "/assets/images/Mortgage-Liens-1.webp",
  judgmentLiens: "/assets/images/Judgment-Liens-1.webp",
  mechanicsLiens: "/assets/images/Mechanics-Liens-1.webp",
  hoaLiens: "/assets/images/HOA-Liens-1.webp",
  multipleLiens: "/assets/images/Multiple-Liens-1.webp",
  ownerOccupiedWithLiens: "/assets/images/Owner-Occupied-with-Liens-optimized.webp",
  floodDamagedProperties: "/assets/images/Flood-Damaged-Properties.webp",
  floodZoneProperties: "/assets/images/Flood-Zone-Properties.webp",
  moldAndMoistureDamage: "/assets/images/Mold-and-Moisture-Damage.webp",
  combinedFloodHurricaneDamage: "/assets/images/Combined-Flood-Hurricane-Damage.webp",
  floodDamages: "/assets/images/Flood-damages.webp",
  anyFloodDamageCondition: "/assets/images/Any-Flood-Damage-Condition.webp",
  roofDamage: "/assets/images/Roof-Damage.webp",
  floodWaterIntrusion: "/assets/images/Flood-Water-Intrusion.webp",
  hurricaneWindDamage: "/assets/images/Hurricane-Wind-Damage.webp",
  moldMoisture: "/assets/images/Mold-Moisture.webp",
  structuralDamageOptimized: "/assets/images/Structural-Damage-optimized.webp",
  anyConditionWeBuyIt: "/assets/images/Any-Condition-We-Buy-It.webp",
  moldAndMoistureRisks: "/assets/images/Mold-and-Moisture-Risks.webp",
  leadPaintAsbestos: "/assets/images/Lead-Paint-Asbestos.webp",
  properDisposalOfDamagedMaterials: "/assets/images/Proper-Disposal-of-Damaged-Materials.webp",
  leaseContinuity: "/assets/images/Lease-Continuity.webp",
  remainingLeaseDuration: "/assets/images/Remaining-Lease-Duration.webp",
  immediateCashFlow: "/assets/images/Immediate-Cash-Flow.webp",
  moveOutTimelineClarity: "/assets/images/Move-Out-Timeline-Clarity.webp",
  cleanDocumentation: "/assets/images/Clean-Documentation-optimized.webp",
  weBuyRegardless: "/assets/images/We-Buy-Regardless.webp",
  localPresence: "/assets/images/Local-Presence.webp",
  noHiddenFees: "/assets/images/No-Hidden-Fees.webp",
  sellAsIsOptimized: "/assets/images/Sell-As-Is-optimized.webp",
  guaranteedCashOffer: "/assets/images/Guaranteed-Cash-Offer.webp",
  flexibleClosings: "/assets/images/Flexible-Closings.webp",
  clearCommunication: "/assets/images/Clear-Communication.webp",
  fireStructuralDamage: "/assets/images/Structural-Damage-1.webp",
  fireSmokeSootDamage: "/assets/images/Smoke-Soot-Damage-1.webp",
  fireWaterDamageFirefighting: "/assets/images/Water-Damage-from-Firefighting-optimized.webp",
  fireDebrisCleanup: "/assets/images/Debris-Cleanup-1.webp",
  fireOpenInsuranceClaims: "/assets/images/Open-Insurance-Claims-1.webp",
  fireAnyConditionWeBuyIt: "/assets/images/Any-Condition-We-Buy-It-1.webp",
  fireDamagedHomes: "/assets/images/Fire-Damaged-Homes-1.webp",
  vacantPropertiesCard: "/assets/images/Vacant-Properties-1.webp",
  propertiesWithLiensCard: "/assets/images/Properties-with-Liens-1.webp",
  homesWithProblemTenants: "/assets/images/Homes-with-Problem-Tenants-1.webp",
  sellAsIsForeclosure: "/assets/images/Foreclosure-1.webp",
  sellAsIsProbateInherited: "/assets/images/Probate-Inherited-1.webp",
  sellAsIsRelocation: "/assets/images/Relocation-1.webp",
  sellAsIsTiredLandlord: "/assets/images/Tired-Landlord.webp",
  sellAsIsMajorRepairsNeeded: "/assets/images/Major-Repairs-Needed.webp",
  sellAsIsDivorceHardship: "/assets/images/Divorce-Hardship.webp",
  sellAsIsPredictableTimeline: "/assets/images/Predictable-timeline.webp",
  sellAsIsLocalMarketKnowledge: "/assets/images/Local-market-knowledge.webp",
  sellAsIsSellerFocusedSupport: "/assets/images/Seller-focused-support.webp",
  sellAsIsNoHiddenCosts: "/assets/images/No-hidden-costs.webp",
  divorceCourtsMayDelayASale: "/assets/images/Courts-May-Delay-a-Sale.webp",
  divorceTemporaryArrangementsMatter: "/assets/images/Temporary-Arrangements-Matter.webp",
  divorceCertaintyReducesDisruption: "/assets/images/Certainty-Reduces-Disruption.webp",
  divorceJoint500kExclusion: "/assets/images/Joint-500k-Exclusion.webp",
  divorceTimingTheSaleMatters: "/assets/images/Timing-the-Sale-Matters-optimized.webp",
  divorceCashSaleSimplifiesRecords: "/assets/images/Cash-Sale-Simplifies-Records.webp",
  asIsFloridaCoastal: "/assets/images/coastal.webp",
  asIsFloridaUrban: "/assets/images/urban.webp",
  asIsFloridaSuburban: "/assets/images/suburban.webp",
  asIsFloridaValue: "/assets/images/value.webp",
  asIsFloridaDisclosure: "/assets/images/Disclosure.webp",
  asIsFloridaAsIsContract: "/assets/images/The-Florida-As-Is-Contract.webp",
  asIsFloridaMoveOutHoa: "/assets/images/Move-Out-HOA-Considerations.webp",
  sellAsIsYouCanSellMold: "/assets/images/You-can-sell-mold.webp",
  sellAsIsDisclosureNeeded: "/assets/images/Disclosure-is-needed.webp",
  sellAsIsFreeMoldLegalResources: "/assets/images/free-mold-and-legl-resources.webp",
  inheritedBuyProbate: "/assets/images/Probate-and-title.webp",
  inheritedBuyAsIs: "/assets/images/As-is-purchases.webp",
  inheritedBuyNoFees: "/assets/images/No-commission.webp",
  inheritedBuyFlexibleClosing: "/assets/images/Flexible-Closing.webp",
  inheritedStepContactUs: "/assets/images/Contact-Us.svg",
  inheritedStepReview: "/assets/images/Review.svg",
  inheritedStepYouDecide: "/assets/images/You-decide.svg",
  inheritedStepCloseAndGetPaid: "/assets/images/Close-and-get-paid.svg",
  foreclosureHyperLocalExpertise: "/assets/images/Hyper-local-expertise.webp",
  foreclosureTransparentWrittenOffers: "/assets/images/Transparent-written-offers-optimized.webp",
  foreclosureFastClosings: "/assets/images/Fast-closings-on-your-timeline.webp",
  foreclosureEmpatheticSellerCentered: "/assets/images/Empathetic-seller-centered.webp",
  foreclosureProvenTrackRecord: "/assets/images/Proven-track-record.webp",
  foreclosureLocalVsAiAdvice: "/assets/images/Local-vs-AI-generated-advice.webp",
} as const;

/** Lien page — "Types of Liens We Handle" cards. */
export const LIEN_TYPE_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Tax Liens": {
    image: ASSETS.taxLiens,
    imageAlt: "Federal IRS and Florida property tax lien resolved at cash closing",
  },
  "Mortgage Liens": {
    image: ASSETS.mortgageLiens,
    imageAlt: "Primary and secondary mortgage liens paid off at closing from sale proceeds",
  },
  "Judgment Liens": {
    image: ASSETS.judgmentLiens,
    imageAlt: "Court-ordered judgment lien handled with Florida title professionals",
  },
  "Mechanic's Liens": {
    image: ASSETS.mechanicsLiens,
    imageAlt: "Contractor mechanic's lien coordinated at closing with title company",
  },
  "HOA Liens": {
    image: ASSETS.hoaLiens,
    imageAlt: "Homeowners association lien resolved at closing",
  },
  "Multiple Liens": {
    image: ASSETS.multipleLiens,
    imageAlt: "Multiple overlapping property liens coordinated simultaneously at closing",
  },
};

/** Lien page — "Properties and Situations We Handle" forest cards. */
export const LIEN_PROPERTY_SITUATION_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Owner-Occupied with Liens": {
    image: ASSETS.ownerOccupiedWithLiens,
    imageAlt: "Owner-occupied Florida home with liens sold for cash",
  },
  "Rental Properties": {
    image: ASSETS.upsideDownMortgage,
    imageAlt: "Rental property with liens purchased as-is for cash",
  },
  "Inherited / Probate Properties": {
    image: ASSETS.inheritedOrProbateProperty,
    imageAlt: "Inherited or probate property with liens resolved at closing",
  },
  "Vacant Homes": {
    image: ASSETS.vacantProperty,
    imageAlt: "Vacant Florida home with liens sold for cash",
  },
  "Foreclosure Risk": {
    image: ASSETS.taxLiens,
    imageAlt: "Florida home facing foreclosure sold with lien payoff at closing",
  },
  "Relocation or Life Events": {
    image: ASSETS.relocation,
    imageAlt: "Home sold quickly for cash during relocation or life changes",
  },
};

/** Water damage page — "What We Buy and When It Applies" cards. */
export const WATER_DAMAGE_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Flood-Damaged Properties": {
    image: ASSETS.floodDamagedProperties,
    imageAlt: "Flood-damaged home in St Petersburg sold for cash as-is",
  },
  "Flood Zone Properties": {
    image: ASSETS.floodZoneProperties,
    imageAlt: "Flood zone property in Pinellas County purchased for cash",
  },
  "Mold and Moisture Damage": {
    image: ASSETS.moldAndMoistureDamage,
    imageAlt: "Home with mold and moisture damage sold without repairs",
  },
  "Combined Flood + Hurricane Damage": {
    image: ASSETS.combinedFloodHurricaneDamage,
    imageAlt: "Property with combined flood and hurricane damage sold for cash",
  },
  "Compromised Foundations": {
    image: ASSETS.floodDamages,
    imageAlt: "Flood-compromised foundation home sold as-is in St Petersburg",
  },
  "Any Flood Damage Condition": {
    image: ASSETS.anyFloodDamageCondition,
    imageAlt: "Any flood damage condition — mild to severe — purchased for cash",
  },
};

/** Storm damage page — "Every Type of Storm Damage" cards. */
export const STORM_DAMAGE_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Roof Damage": {
    image: ASSETS.roofDamage,
    imageAlt: "Storm-damaged roof on a Florida home sold for cash as-is",
  },
  "Flood & Water Intrusion": {
    image: ASSETS.floodWaterIntrusion,
    imageAlt: "Home with flood and water intrusion from storm damage sold for cash",
  },
  "Hurricane / Wind Damage": {
    image: ASSETS.hurricaneWindDamage,
    imageAlt: "Hurricane and wind-damaged property purchased for cash in Tampa Bay",
  },
  "Mold & Moisture": {
    image: ASSETS.moldMoisture,
    imageAlt: "Storm-damaged home with mold and moisture sold without remediation",
  },
  "Structural Damage": {
    image: ASSETS.structuralDamageOptimized,
    imageAlt: "Structurally compromised storm-damaged home sold for cash",
  },
  "Any Condition — We Buy It": {
    image: ASSETS.anyConditionWeBuyIt,
    imageAlt: "Any storm damage condition — we buy Tampa Bay homes for cash",
  },
};

/** Storm damage page — Environmental & Legal Disclosures cards. */
export const STORM_DAMAGE_ENVIRONMENTAL_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Mold and Moisture Risks": {
    image: ASSETS.moldAndMoistureRisks,
    imageAlt: "Mold and moisture risks after storm damage in a Florida home",
  },
  "Lead Paint & Asbestos": {
    image: ASSETS.leadPaintAsbestos,
    imageAlt: "Lead paint and asbestos disclosure considerations in older storm-damaged homes",
  },
  "Proper Disposal of Damaged Materials": {
    image: ASSETS.properDisposalOfDamagedMaterials,
    imageAlt: "Proper disposal of storm-damaged building materials in Florida",
  },
};

/** Tenants page — "What Buyers Look for in Tenant-Occupied Properties" cards. */
export const TENANTS_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Lease Continuity": {
    image: ASSETS.leaseContinuity,
    imageAlt: "Tenant-occupied rental with stable lease continuity sold for cash",
  },
  "Remaining Lease Duration": {
    image: ASSETS.remainingLeaseDuration,
    imageAlt: "Rental property with remaining lease duration purchased with tenants in place",
  },
  "Immediate Cash Flow": {
    image: ASSETS.immediateCashFlow,
    imageAlt: "Tenant-occupied property offering immediate rental cash flow for buyers",
  },
  "Move-Out Timeline Clarity": {
    image: ASSETS.moveOutTimelineClarity,
    imageAlt: "Rental sale with clear move-out timeline and tenant coordination",
  },
  "Clean Documentation": {
    image: ASSETS.cleanDocumentation,
    imageAlt: "Tenant-occupied sale with clean lease and deposit documentation",
  },
  "We Buy Regardless": {
    image: ASSETS.weBuyRegardless,
    imageAlt: "We buy tenant-occupied Florida rentals regardless of lease or tenant status",
  },
};

/** Cash home buyers page — "Why trust We Buy St Pete Houses?" cards. */
export const CASH_HOME_BUYERS_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Local Presence": {
    image: ASSETS.localPresence,
    imageAlt: "Local St Petersburg cash home buyers based in Pinellas County",
  },
  "No Hidden Fees": {
    image: ASSETS.noHiddenFees,
    imageAlt: "Cash home sale with no commissions or hidden fees",
  },
  "Sell As-Is": {
    image: ASSETS.sellAsIsOptimized,
    imageAlt: "Sell your St Petersburg home as-is for cash with no repairs",
  },
  "Guaranteed Cash Offer": {
    image: ASSETS.guaranteedCashOffer,
    imageAlt: "Guaranteed cash offer backed by real funds, not financing contingencies",
  },
  "Flexible Closings": {
    image: ASSETS.flexibleClosings,
    imageAlt: "Flexible closing timeline on your cash home sale in St Pete",
  },
  "Clear Communication": {
    image: ASSETS.clearCommunication,
    imageAlt: "Clear communication throughout your cash home sale process",
  },
};

/** Fire damage page — "Sell As-Is — No Repairs Required" cards. */
export const FIRE_DAMAGE_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Structural Damage": {
    image: ASSETS.fireStructuralDamage,
    imageAlt: "Fire-damaged home with structural damage sold for cash in St Petersburg",
  },
  "Smoke & Soot Damage": {
    image: ASSETS.fireSmokeSootDamage,
    imageAlt: "House with smoke and soot damage from fire sold as-is for cash",
  },
  "Water Damage from Firefighting": {
    image: ASSETS.fireWaterDamageFirefighting,
    imageAlt: "Fire-damaged home with water damage from firefighting sold for cash",
  },
  "Debris & Cleanup": {
    image: ASSETS.fireDebrisCleanup,
    imageAlt: "Fire-damaged property with debris sold without cleanup required",
  },
  "Open Insurance Claims": {
    image: ASSETS.fireOpenInsuranceClaims,
    imageAlt: "Sell a fire-damaged home with an open insurance claim for cash",
  },
  "Any Condition — We Buy It": {
    image: ASSETS.fireAnyConditionWeBuyIt,
    imageAlt: "Any fire damage condition — we buy St Petersburg homes for cash",
  },
};

/** Divorce page — "How Do Minor Children Affect Home Sale Decisions?" cards. */
export const DIVORCE_FAMILY_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Courts May Delay a Sale": {
    image: ASSETS.divorceCourtsMayDelayASale,
    imageAlt: "Florida court considerations when selling a home during divorce with minor children",
  },
  "Temporary Arrangements Matter": {
    image: ASSETS.divorceTemporaryArrangementsMatter,
    imageAlt: "Temporary custody arrangements affecting who stays in the marital home during divorce",
  },
  "Certainty Reduces Disruption": {
    image: ASSETS.divorceCertaintyReducesDisruption,
    imageAlt: "Fast cash home sale providing certainty and a defined closing date during divorce",
  },
};

/** Divorce page — "Tax Implications of Selling During Divorce in Florida" cards. */
export const DIVORCE_TAX_CARD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Joint $500k Exclusion": {
    image: ASSETS.divorceJoint500kExclusion,
    imageAlt: "Joint $500,000 capital gains exclusion when selling before divorce is finalized",
  },
  "Timing the Sale Matters": {
    image: ASSETS.divorceTimingTheSaleMatters,
    imageAlt: "Timing a home sale relative to divorce decree for capital gains tax treatment",
  },
  "Cash Sale Simplifies Records": {
    image: ASSETS.divorceCashSaleSimplifiesRecords,
    imageAlt: "Cash home sale with clear closing records for divorce tax planning",
  },
};

/** As-is Florida page — Florida Legal Framework environmental cards. */
export const AS_IS_FLORIDA_ENVIRONMENTAL_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Disclosure Obligations": {
    image: ASSETS.asIsFloridaDisclosure,
    imageAlt: "Florida as-is home sale disclosure obligations for sellers",
  },
  "The Florida As-Is Contract": {
    image: ASSETS.asIsFloridaAsIsContract,
    imageAlt: "The Florida as-is real estate contract for cash home sales",
  },
  "Move-Out & HOA Considerations": {
    image: ASSETS.asIsFloridaMoveOutHoa,
    imageAlt: "Move-out timing and HOA considerations when selling as-is in Florida",
  },
};

/** As-is Florida page — neighborhood market cards (keyed by category icon label). */
export const AS_IS_FLORIDA_NEIGHBORHOOD_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  Coastal: {
    image: ASSETS.asIsFloridaCoastal,
    imageAlt: "Coastal St Pete neighborhoods including St Pete Beach, Gulfport, and Coquina Key",
  },
  Urban: {
    image: ASSETS.asIsFloridaUrban,
    imageAlt: "Urban St Petersburg neighborhoods including Downtown and the Edge District",
  },
  Suburban: {
    image: ASSETS.asIsFloridaSuburban,
    imageAlt: "Suburban Pinellas County areas including Largo, Pinellas Park, and Palm Harbor",
  },
  Value: {
    image: ASSETS.asIsFloridaValue,
    imageAlt: "Value-focused St Pete neighborhoods including Lealman, Disston Heights, and Bayway Isles",
  },
};

/** Inherited page — "Cash, as-is, with probate support" feature cards. */
export const INHERITED_BUY_PROCESS_FEATURES: Record<
  string,
  { image: string; imageAlt: string; iconKey: string }
> = {
  "Probate & title support": {
    image: ASSETS.inheritedBuyProbate,
    imageAlt: "Probate court documents for inherited property sale in St Petersburg",
    iconKey: "calendar",
  },
  "Probate and title clearance support": {
    image: ASSETS.inheritedBuyProbate,
    imageAlt: "Probate court documents for inherited property sale in St Petersburg",
    iconKey: "calendar",
  },
  "As-is purchases — nothing required": {
    image: ASSETS.inheritedBuyAsIs,
    imageAlt: "Inherited St Petersburg home purchased as-is for cash",
    iconKey: "document",
  },
  "No commissions or fees — ever": {
    image: ASSETS.inheritedBuyNoFees,
    imageAlt: "No real estate commissions or hidden fees on inherited home cash sale",
    iconKey: "dollar",
  },
  "Flexible closing — your timeline": {
    image: ASSETS.inheritedBuyFlexibleClosing,
    imageAlt: "Flexible closing timeline when selling an inherited house for cash",
    iconKey: "location",
  },
};

/** Inherited page — timeline step SVG icons (filename keys). */
export const INHERITED_BUY_STEP_SVG: Record<string, { src: string; alt: string }> = {
  "Contact-Us": {
    src: ASSETS.inheritedStepContactUs,
    alt: "Contact us about your inherited property",
  },
  Review: {
    src: ASSETS.inheritedStepReview,
    alt: "Property review and cash offer",
  },
  "You-decide": {
    src: ASSETS.inheritedStepYouDecide,
    alt: "Accept the cash offer on your terms",
  },
  "Close-and-get-paid": {
    src: ASSETS.inheritedStepCloseAndGetPaid,
    alt: "Close and receive cash for your inherited home",
  },
  phone: {
    src: ASSETS.inheritedStepContactUs,
    alt: "Contact us about your inherited property",
  },
  house: {
    src: ASSETS.inheritedStepReview,
    alt: "Property review and cash offer",
  },
  handshake: {
    src: ASSETS.inheritedStepYouDecide,
    alt: "Accept the cash offer on your terms",
  },
  cash: {
    src: ASSETS.inheritedStepCloseAndGetPaid,
    alt: "Close and receive cash for your inherited home",
  },
};

export const SITUATION_PAGE_CITY_CARD_IMAGES: Partial<
  Record<string, Record<string, { image: string; imageAlt: string }>>
> = {
  "as-is-florida": AS_IS_FLORIDA_NEIGHBORHOOD_IMAGES,
};

/** Foreclosure page — "What Makes We Buy St Pete Houses Different?" cards. */
export const FORECLOSURE_DIFF_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Hyper-local expertise": {
    image: ASSETS.foreclosureHyperLocalExpertise,
    imageAlt: "Hyper-local St Petersburg foreclosure and cash home buying expertise",
  },
  "Transparent, written offers": {
    image: ASSETS.foreclosureTransparentWrittenOffers,
    imageAlt: "Transparent written cash offer when stopping foreclosure in St Pete",
  },
  "Fast closings on your timeline": {
    image: ASSETS.foreclosureFastClosings,
    imageAlt: "Fast foreclosure home sale closing on your timeline in Pinellas County",
  },
  "Empathetic, seller-centered": {
    image: ASSETS.foreclosureEmpatheticSellerCentered,
    imageAlt: "Empathetic seller-centered approach for St Petersburg homeowners facing foreclosure",
  },
  "Proven track record": {
    image: ASSETS.foreclosureProvenTrackRecord,
    imageAlt: "Proven track record buying homes across St Petersburg and Tampa Bay",
  },
  "Local vs. AI-generated advice": {
    image: ASSETS.foreclosureLocalVsAiAdvice,
    imageAlt: "Local foreclosure guidance versus generic AI-generated advice in Florida",
  },
};

export const SITUATION_PAGE_DIFF_IMAGES: Partial<
  Record<string, Record<string, { image: string; imageAlt: string }>>
> = {
  foreclosure: FORECLOSURE_DIFF_IMAGES,
};

export const SITUATION_PAGE_CARD_IMAGES: Partial<
  Record<string, Record<string, { image: string; imageAlt: string }>>
> = {
  "water-damage": WATER_DAMAGE_CARD_IMAGES,
  "storm-damage": STORM_DAMAGE_CARD_IMAGES,
  tenants: TENANTS_CARD_IMAGES,
  "cash-home-buyers": CASH_HOME_BUYERS_CARD_IMAGES,
  "fire-damage": FIRE_DAMAGE_CARD_IMAGES,
  divorce: DIVORCE_FAMILY_CARD_IMAGES,
};

/** Fire damage page — "What We Buy in St Petersburg" situations cards. */
export const FIRE_DAMAGE_SITUATION_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Fire-Damaged Homes": {
    image: ASSETS.fireDamagedHomes,
    imageAlt: "Fire-damaged home in St Petersburg sold for cash as-is",
  },
  "Vacant Properties": {
    image: ASSETS.vacantPropertiesCard,
    imageAlt: "Vacant property in Tampa Bay purchased for cash",
  },
  "Inherited / Probate Homes": {
    image: ASSETS.inheritedOrProbateProperty,
    imageAlt: "Inherited or probate home sold for cash in St Petersburg",
  },
  "Properties with Liens": {
    image: ASSETS.propertiesWithLiensCard,
    imageAlt: "Property with liens sold for cash in St Petersburg",
  },
  "Homes with Problem Tenants": {
    image: ASSETS.homesWithProblemTenants,
    imageAlt: "Tenant-occupied home with problem tenants sold for cash",
  },
  "Upside-Down Mortgages": {
    image: ASSETS.upsideDownMortgage,
    imageAlt: "Upside-down mortgage home sold for cash in St Petersburg",
  },
};

export const SITUATION_PAGE_SITUATION_IMAGES: Partial<
  Record<string, Record<string, { image: string; imageAlt: string }>>
> = {
  "fire-damage": FIRE_DAMAGE_SITUATION_IMAGES,
  divorce: DIVORCE_TAX_CARD_IMAGES,
};

/** Sell as-is — "When a cash sale makes sense" chips. */
export const SELL_AS_IS_WHEN_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  Foreclosure: {
    image: ASSETS.sellAsIsForeclosure,
    imageAlt: "Foreclosed or pre-foreclosure home sold as-is for cash in St Petersburg",
  },
  "Probate / Inherited": {
    image: ASSETS.sellAsIsProbateInherited,
    imageAlt: "Inherited or probate property sold as-is for cash",
  },
  Relocation: {
    image: ASSETS.sellAsIsRelocation,
    imageAlt: "Relocation home sold quickly for cash without repairs",
  },
  "Tired Landlord": {
    image: ASSETS.sellAsIsTiredLandlord,
    imageAlt: "Tired landlord selling rental property as-is for cash",
  },
  "Major Repairs Needed": {
    image: ASSETS.sellAsIsMajorRepairsNeeded,
    imageAlt: "Home needing major repairs sold as-is for cash",
  },
  "Divorce / Hardship": {
    image: ASSETS.sellAsIsDivorceHardship,
    imageAlt: "Home sold as-is for cash during divorce or hardship",
  },
};

/** Sell as-is — Florida Mold Laws disclosure cards. */
export const SELL_AS_IS_MOLD_DISCLOSURE_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Yes, You Can Sell with Mold": {
    image: ASSETS.sellAsIsYouCanSellMold,
    imageAlt: "Selling a mold-damaged home as-is for cash in St Petersburg, Florida",
  },
  "Disclosure Is Required": {
    image: ASSETS.sellAsIsDisclosureNeeded,
    imageAlt: "Florida mold disclosure requirements for home sellers",
  },
  "Free Mold & Legal Resources": {
    image: ASSETS.sellAsIsFreeMoldLegalResources,
    imageAlt: "Free mold and legal resources for Florida home sellers",
  },
};

/** Sell as-is — "Why choose a cash sale" grid cards. */
export const SELL_AS_IS_WHY_US_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  "Predictable timeline": {
    image: ASSETS.sellAsIsPredictableTimeline,
    imageAlt: "Predictable closing timeline for an as-is cash home sale",
  },
  "Local market knowledge": {
    image: ASSETS.sellAsIsLocalMarketKnowledge,
    imageAlt: "Local St Petersburg market knowledge for as-is cash offers",
  },
  "Seller-focused support": {
    image: ASSETS.sellAsIsSellerFocusedSupport,
    imageAlt: "Seller-focused support throughout your as-is cash sale",
  },
  "No hidden costs": {
    image: ASSETS.sellAsIsNoHiddenCosts,
    imageAlt: "As-is cash home sale with no hidden costs or fees",
  },
};


export const SITE = {
  name: "We Buy St Pete Houses",
  logoTagline: "For Cash Home Buyers",
  tagline: "Tampa Bay · FL",
  phone: "(727) 477-8998",
  phoneHref: "tel:+17274778998",
  email: "SellFast@WeBuyStPeteHouses.com",
  contactEmail: "hello@webuystpetehouses.com",
  address: "PO Box 143, St. Petersburg, FL 33731",
  url: getSiteUrl(),
  mapsHref: "https://maps.app.goo.gl/WLWfNKY5PqvBVPXy5",
  /** Primary “Get Cash Offer” CTA — contact page with offer form */
  cashOfferHref: "/contact/#form",
};

export const HOMEPAGE_SEO = {
  title: "We Buy Houses In St Petersburg FL | Cash Offer in 24 Hours",
  description:
    "Sell your St Petersburg house fast for cash. No repairs, no fees, no commissions. Get a fair cash offer today and close on your timeline—as-is, hassle-free",
  primaryKeyword: "sell my house fast st petersburg",
} as const;

export const MEET_OWNER = {
  eyebrow: "Meet the owner",
  title: "Hi, I'm John Gardepe.",
  subtitle: "I'm the owner of We Buy St. Pete Houses.",
  paragraphs: [
    {
      lead: "Our mission is simple:",
      rest: " help homeowners sell their houses fast, avoid the hassle, and move forward with confidence.",
      intro:
        "We're a local home buying company based right here in St. Petersburg.",
    },
    "I started this company because I saw too many good people stuck in difficult situations with no easy solution. We believe selling your house should be simple, fair, and stress-free.",
    "When you work with us, you're not dealing with a big corporation—you're dealing with a local team that truly cares.",
  ],
  quote:
    "We treat every homeowner the way we'd want our own family to be treated. You'll get a fair offer and a team that's with you every step of the way.",
  ctaTitle: "Get Your No-Obligation Offer",
  ctaBody: "Tell us a few details about your property and we'll provide a fair cash offer.",
  ctaButton: "Get my offer now",
  badgeRole: "Owner",
  badgeCompany: "We Buy St. Pete Houses",
} as const;

/** Footer social links */
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/WeBuyStPeteHouses", icon: "facebook" },
] as const;

export const TOPBAR = {
  rating: "Rated 5.0 by 120+ St. Petersburg",
  bbb: "BBB A+ Accredited",
} as const;

export const SELL_REASON_OPTIONS = [
  { value: "inherited-estate", label: "Inherited / estate" },
  { value: "divorce-separation", label: "Divorce / separation" },
  { value: "facing-foreclosure", label: "Facing foreclosure" },
  { value: "relocating", label: "Relocating" },
  { value: "financial-hardship", label: "Financial hardship" },
  { value: "tired-landlord", label: "Tired landlord" },
  { value: "too-much-work", label: "Too much work needed" },
  { value: "other", label: "Other" },
] as const;

export const HOME_TESTIMONIALS = {
  rating: "4.9",
  count: "12 verified reviews",
  googleUrl: "https://www.google.com/search?q=we+buy+st+pete+houses",
  items: [
    {
      featured: true,
      initials: "TC",
      name: "Tom Cherry",
      meta: "2 reviews • 4 years ago",
      localGuide: false,
      quote:
        "We Buy St Pete Homes was excellent to work with from start to finish. They complied with all of my terms and stayed on top of the entire process. John was prompt and courteous. Contract to close was 14 days. I would highly recommend.",
      ownerReply: {
        title: "Response from John",
        text: "Tom, thank you for the kind words. I'm glad we were able to meet your expectations throughout the sale of your rental property. We sincerely appreciated your professionalism as well.",
      },
    },
    {
      initials: "DB",
      name: "Debbie Bross",
      meta: "6 reviews • 2 years ago",
      localGuide: true,
      quote:
        "I have had two closings with this company. I have been a Realtor for 19 years in St. Petersburg and this company was easy to work with and very honest. I hope to work with them again soon.",
    },
    {
      initials: "NF",
      name: "Nicci Fagan",
      meta: "14 reviews • 3 years ago",
      localGuide: true,
      quote:
        "John and his team reached out to gauge my interest in selling my home at a time I had just started to consider it. I was recovering from major surgery, and they were very accommodating with the closing date and several other things.",
    },
    {
      initials: "AF",
      name: "Amy Ford",
      meta: "32 reviews • 3 years ago",
      localGuide: true,
      quote:
        "John contacted me directly via text message about wanting to purchase our home. At first, I was skeptical mainly because there are so many scams going around. He turned out to be exactly what he said he was.",
    },
    {
      initials: "AM",
      name: "April McQueen",
      meta: "5 reviews • 3 years ago",
      localGuide: false,
      quote:
        "It was a pleasure working with John Gardepe and his team! He was very professional, down to earth, and patient! Glad that they were the ones to help me through this process of selling my home.",
    },
    {
      initials: "RB",
      name: "Ray Bianco",
      meta: "6 reviews • 4 years ago",
      localGuide: false,
      quote:
        "I have done 2 residential home sales as well as a short term lease with We Buy St Pete Houses in the past year. Their team of professionals were friendly and prompt.",
    },
    {
      initials: "SV",
      name: "Steve Viteri",
      meta: "3 reviews • 4 years ago",
      localGuide: false,
      quote:
        "He was very professional and a good person to work with. Showed up on time for the meetings and always responds in an appropriate time.",
      ownerReply: {
        title: "Response from John",
        text: "Thank you Steve, we really enjoyed working with you and getting to know you. We always appreciate the opportunity to work with a Veteran. Thank you for your service.",
      },
    },
    {
      initials: "RV",
      name: "Ron V.",
      meta: "11 reviews • 4 years ago",
      localGuide: false,
      quote:
        "Very prompt with all communications and very quick sale and closing. Would always use them. Great job.",
    },
    {
      initials: "CA",
      name: "Casey Ashley",
      meta: "2 reviews • 2 years ago",
      localGuide: false,
      quote:
        "Very nice people to deal with, made for an easy process. Would highly recommend.",
    },
  ],
} as const;

/** Situations mega-menu / footer: items per left column before the right column starts. */
export const SITUATIONS_MENU_LEFT_COLUMN_COUNT = 9;

export const NAV_LINKS = {
  primary: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Reviews", href: "/reviews" },
  ],
  locations: {
    cities: CITY_NAV_LINKS,
  },
  situations: [
    { label: "Foreclosure", href: "/situations/foreclosure" },
    { label: "Inherited house", href: "/situations/inherited" },
    { label: "Divorce", href: "/situations/divorce" },
    { label: "House with tenants", href: "/situations/tenants" },
    { label: "Bankruptcy", href: "/situations/bankruptcy" },
    { label: "House with a lien", href: "/situations/lien" },
    { label: "Water / flood damage", href: "/situations/water-damage" },
    { label: "Fire damage", href: "/situations/fire-damage" },
    { label: "Storm damage", href: "/situations/storm-damage" },
    { label: "Sell as-is (St Pete)", href: "/situations/sell-as-is" },
    { label: "Mold Damage", href: "/situations/mold-damage" },
    { label: "Sell as-is (Florida)", href: "/situations/as-is-florida" },
    { label: "Cash home buyers", href: "/situations/cash-home-buyers" },
    { label: "Condemned house", href: "/situations/condemned" },
    { label: "Medical emergency", href: "/situations/medical-emergency" },
    { label: "Hoarder house", href: "/situations/hoarder-house" },
    { label: "Foundation problems", href: "/situations/foundation-problems" },
    { label: "Reverse mortgage", href: "/situations/reverse-mortgage" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** Footer “We Buy Houses In Any Situation” column — fixed order. */
export const FOOTER_SITUATIONS = [
  { label: "Foreclosure", href: "/situations/foreclosure" },
  { label: "Inherited house", href: "/situations/inherited" },
  { label: "Divorce", href: "/situations/divorce" },
  { label: "House with tenants", href: "/situations/tenants" },
  { label: "Bankruptcy", href: "/situations/bankruptcy" },
  { label: "House with a lien", href: "/situations/lien" },
  { label: "Water / flood damage", href: "/situations/water-damage" },
  { label: "Fire damage", href: "/situations/fire-damage" },
  { label: "Storm damage", href: "/situations/storm-damage" },
  { label: "Sell as-is (St Pete)", href: "/situations/sell-as-is" },
  { label: "Mold Damage", href: "/situations/mold-damage" },
  { label: "Sell as-is (Florida)", href: "/situations/as-is-florida" },
  { label: "Cash home buyers", href: "/situations/cash-home-buyers" },
  { label: "Condemned house", href: "/situations/condemned" },
  { label: "Medical emergency", href: "/situations/medical-emergency" },
  { label: "Hoarder house", href: "/situations/hoarder-house" },
  { label: "Foundation problems", href: "/situations/foundation-problems" },
  { label: "Reverse mortgage", href: "/situations/reverse-mortgage" },
] as const;

export const STATS = [
  {
    value: "24",
    suffix: "hr",
    label: "Cash offer",
    sub: "No-obligation offer, usually within 24 hours.",
  },
  {
    value: "10",
    suffix: "days",
    label: "Minimum close",
    sub: "10 to 14 days typical. You pick the date.",
  },
  {
    value: "$0",
    label: "Fees & commissions",
    sub: "We cover closing costs too.",
  },
  {
    value: "500",
    suffix: "+",
    label: "St. Petersburg homes bought",
    sub: "Local team serving since 2014.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Let's Talk",
    body: "Give us a call, send a text, or fill out our form. Tell us a little about your St. Petersburg property and your situation.",
    metaLabel: "Time",
    metaValue: "~ 2 min",
  },
  {
    num: "02",
    title: "Cash Offer",
    body: "We review the details and provide a fair, no-obligation cash offer — usually within 24 hours.",
    metaLabel: "Within",
    metaValue: "24 hours",
    highlight: true,
  },
  {
    num: "03",
    title: "walkthrough",
    body: "We visit your property as-is. No repairs, no cleaning, no staging — just a quick, friendly walkthrough.",
    metaLabel: "Repairs",
    metaValue: "None",
  },
  {
    num: "04",
    title: "closing timeline",
    body: "You choose your closing date. We can close in as little as 7 days or whenever works best for you.",
    metaLabel: "Close in",
    metaValue: "7–14 days",
  },
] as const;

export const SELL_HOUSE_HERO = {
  title: "Sell Your House Fast in St. Petersburg with a Cash Offer",
  subheadline: "Close in as little as 7 days. As-is. No agents, no fees, no repairs.",
  formTitle: "Sell your house fast in any condition.",
  formIntro: "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
} as const;

export const SELL_HOUSE_PROCESS_STEPS = [
  {
    num: "01",
    title: "Submit property details",
    body: "Through our online form or by phone — location, condition, and your timeline.",
  },
  {
    num: "02",
    title: "Receive your cash offer",
    body: "Often within 24 hours. Fair, written, no obligation to accept.",
  },
  {
    num: "03",
    title: "Schedule a walkthrough",
    body: "We visit to confirm details and finalize the offer. Low-pressure.",
  },
  {
    num: "04",
    title: "Close on your schedule",
    body: "Cash closings can happen in as little as 7 days — or on your preferred date.",
  },
] as const;

export const SELLER_SITUATIONS = [
  {
    title: "Facing foreclosure",
    body: "Stop the process with a fast cash close before the auction date.",
    href: "/situations/foreclosure",
    image: ASSETS.facingForeclosure,
    imageAlt: "St. Petersburg home facing foreclosure — sell for cash before auction",
    imageTitle: "Facing foreclosure? Get a fast cash offer in St. Petersburg",
  },
  {
    title: "Inherited a home",
    body: "Settle the estate without managing repairs or showings.",
    href: "/situations/inherited",
    image: ASSETS.inheritedHome,
    imageAlt: "Inherited Florida home ready for a probate or estate cash sale",
    imageTitle: "Sell an inherited home in St. Petersburg for cash",
  },
  {
    title: "Divorce or separation",
    body: "Divide assets quickly without prolonged listing periods.",
    href: "/situations/divorce",
    image: ASSETS.divorceSeparation,
    imageAlt: "Dividing marital property during divorce — cash home sale in Florida",
    imageTitle: "Sell a home quickly during divorce or separation",
  },
  {
    title: "Tired landlord",
    body: "Exit problem tenants. We buy with the lease in place if needed.",
    href: "/situations/tenants",
    image: ASSETS.tiredLandlord,
    imageAlt: "Tired landlord selling a tenant-occupied rental for cash in Tampa Bay",
    imageTitle: "Exit a rental property with tenants in place",
  },
  {
    title: "Distressed property",
    body: "Major repairs needed. Skip the contractor — we buy as-is.",
    href: "/situations/sell-as-is",
    image: ASSETS.distressedProperty,
    imageAlt: "Distressed St. Petersburg home sold as-is for cash without repairs",
    imageTitle: "Sell a distressed property as-is for cash",
  },
  {
    title: "Relocation",
    body: "Move on your schedule without waiting for a buyer to come along.",
    href: "/how-it-works",
    image: ASSETS.relocation,
    imageAlt: "Homeowner relocating from St. Petersburg — fast cash sale on your timeline",
    imageTitle: "Sell quickly when relocating from St. Petersburg",
  },
] as const;

/** Homepage sit-card photos for situation-page cards (copy stays on the page; images only). */
export const SITUATION_CARD_HOME_IMAGES: Record<string, { image: string; imageAlt: string }> = {
  Foreclosure: { image: ASSETS.facingForeclosure, imageAlt: SELLER_SITUATIONS[0].imageAlt },
  Divorce: { image: ASSETS.divorceSeparation, imageAlt: SELLER_SITUATIONS[2].imageAlt },
  "Inherited / Probate": {
    image: ASSETS.inheritedOrProbateProperty,
    imageAlt: "Inherited or probate property ready for a cash home sale",
  },
  "Tired Landlords": { image: ASSETS.tiredLandlord, imageAlt: SELLER_SITUATIONS[3].imageAlt },
  Relocation: { image: ASSETS.relocation, imageAlt: SELLER_SITUATIONS[5].imageAlt },
  "Upside-Down Mortgages": { image: ASSETS.distressedProperty, imageAlt: SELLER_SITUATIONS[4].imageAlt },
};

type CitySituationInput = { title: string; body: string };

function resolveCitySituationMedia(title: string): { image: string; imageAlt: string; href: string } {
  const lower = title.toLowerCase();

  if (/behind on payments/i.test(lower)) {
    return {
      image: ASSETS.behindOnPayments,
      imageAlt: "Homeowner reviewing mortgage payment documents",
      href: "/situations/foreclosure",
    };
  }
  if (/upside-down mortgage|upside down mortgage/i.test(lower)) {
    return {
      image: ASSETS.upsideDownMortgage,
      imageAlt: "House illustrating an upside-down mortgage situation",
      href: "/situations/lien",
    };
  }
  if (/vacant property|vacant homes|vacant or hard-to-sell/i.test(lower)) {
    return {
      image: ASSETS.vacantProperty,
      imageAlt: "Vacant residential property ready for a cash sale",
      href: "/situations/sell-as-is",
    };
  }
  if (/foreclos|behind on mortgage|pre-foreclosure/i.test(lower)) {
    return {
      image: ASSETS.facingForeclosure,
      imageAlt: SELLER_SITUATIONS[0].imageAlt,
      href: "/situations/foreclosure",
    };
  }
  if (/divorc|separat/i.test(lower)) {
    return {
      image: ASSETS.divorceSeparation,
      imageAlt: SELLER_SITUATIONS[2].imageAlt,
      href: "/situations/divorce",
    };
  }
  if (/inher|probate|estate/i.test(lower)) {
    return {
      image: ASSETS.inheritedOrProbateProperty,
      imageAlt: "Inherited or probate property ready for a cash home sale",
      href: "/situations/inherited",
    };
  }
  if (/landlord|tenant/i.test(lower)) {
    return {
      image: ASSETS.tiredLandlord,
      imageAlt: SELLER_SITUATIONS[3].imageAlt,
      href: "/situations/tenants",
    };
  }
  if (/bankruptcy/i.test(lower)) {
    return {
      image: ASSETS.behindOnPayments,
      imageAlt: "Selling a Florida home during bankruptcy for cash",
      href: "/situations/bankruptcy",
    };
  }
  if (/tax lien/i.test(lower)) {
    return {
      image: ASSETS.taxLiens,
      imageAlt: "Florida home with tax lien resolved at cash closing",
      href: "/situations/lien",
    };
  }
  if (/mortgage lien/i.test(lower)) {
    return {
      image: ASSETS.mortgageLiens,
      imageAlt: "Home with mortgage lien paid off from sale proceeds at closing",
      href: "/situations/lien",
    };
  }
  if (/judgment lien/i.test(lower)) {
    return {
      image: ASSETS.judgmentLiens,
      imageAlt: "Property with judgment lien handled at cash closing",
      href: "/situations/lien",
    };
  }
  if (/mechanic.*lien|mechanics lien/i.test(lower)) {
    return {
      image: ASSETS.mechanicsLiens,
      imageAlt: "Home with mechanic's lien sold as-is for cash",
      href: "/situations/lien",
    };
  }
  if (/hoa lien/i.test(lower)) {
    return {
      image: ASSETS.hoaLiens,
      imageAlt: "Property with HOA lien satisfied at closing",
      href: "/situations/lien",
    };
  }
  if (/multiple lien/i.test(lower)) {
    return {
      image: ASSETS.multipleLiens,
      imageAlt: "Property with multiple liens coordinated at cash closing",
      href: "/situations/lien",
    };
  }
  if (/relocat|moving|job transfer/i.test(lower)) {
    return {
      image: ASSETS.relocation,
      imageAlt: SELLER_SITUATIONS[5].imageAlt,
      href: "/how-it-works",
    };
  }
  if (/lien|upside|underwater/i.test(lower)) {
    return {
      image: ASSETS.upsideDownMortgage,
      imageAlt: "House illustrating an upside-down mortgage situation",
      href: "/situations/lien",
    };
  }
  if (/major repairs|hard-to-sell|as-is|distress|repair/i.test(lower)) {
    return {
      image: ASSETS.distressedProperty,
      imageAlt: SELLER_SITUATIONS[4].imageAlt,
      href: "/situations/sell-as-is",
    };
  }

  return {
    image: ASSETS.distressedProperty,
    imageAlt: SELLER_SITUATIONS[4].imageAlt,
    href: SITE.cashOfferHref,
  };
}

/** Map situation-page cards to homepage sit-card layout using a title → image map. */
export function mapSituationCardsToSellerCards(
  items: readonly CitySituationInput[],
  imageMap: Record<string, { image: string; imageAlt: string }>,
  href: string = SITE.cashOfferHref,
) {
  return items.map((item) => {
    const photo = imageMap[item.title];
    return {
      title: item.title,
      body: item.body,
      href,
      image: photo?.image ?? ASSETS.distressedProperty,
      imageAlt: photo?.imageAlt ?? item.title,
    };
  });
}

/** Map situation-page `cards` section when slug has a dedicated image map. */
export function mapSituationPageCardsToSellerCards(
  slug: string,
  items: readonly CitySituationInput[],
) {
  const imageMap = SITUATION_PAGE_CARD_IMAGES[slug];
  if (imageMap) return mapSituationCardsToSellerCards(items, imageMap);
  return mapCitySituationsToSellerCards(items);
}

type CityCardInput = { icon?: string; title: string; body: string };

/** Map city-style cards (category icon + title) to items with top images. */
export function mapSituationPageCityCards(
  slug: string,
  items: readonly CityCardInput[],
) {
  const imageMap = SITUATION_PAGE_CITY_CARD_IMAGES[slug];
  return items.map((item) => {
    const photo = imageMap?.[item.icon ?? ""];
    return {
      icon: item.icon ?? "•",
      title: item.title,
      body: item.body,
      image: photo?.image,
      imageAlt: photo?.imageAlt ?? `${item.title} — cash home sale situation in St. Petersburg`,
    };
  });
}

/** Map situation-page `situations` section when slug has a dedicated image map. */
export function mapSituationPageSituationsToSellerCards(
  slug: string,
  items: readonly CitySituationInput[],
) {
  const imageMap = SITUATION_PAGE_SITUATION_IMAGES[slug];
  if (imageMap) return mapSituationCardsToSellerCards(items, imageMap, "#offer");

  return items.map((item) => {
    const photo = SITUATION_CARD_HOME_IMAGES[item.title];
    return {
      title: item.title,
      body: item.body,
      href: "#offer",
      image: photo?.image ?? ASSETS.distressedProperty,
      imageAlt: photo?.imageAlt ?? item.title,
    };
  });
}

/** Map location-page situation copy to homepage sit-card layout (images + links). */
export function mapCitySituationsToSellerCards(items: readonly CitySituationInput[]) {
  return items.map((item) => {
    const media = resolveCitySituationMedia(item.title);
    return {
      title: item.title,
      body: item.body,
      ...media,
    };
  });
}

function resolveCityBenefitMedia(title: string): { image: string; imageAlt: string; href: string } {
  const lower = title.toLowerCase();

  if (/no financing risk|financing risk/i.test(lower)) {
    return {
      image: ASSETS.noFinancingRisk,
      imageAlt: "Cash home sale with no buyer financing risk",
      href: SITE.cashOfferHref,
    };
  }
  if (/sell as-is|no repairs or cleaning|as-is.*repair/i.test(lower)) {
    return {
      image: ASSETS.sellAsIsNoRepairs,
      imageAlt: "Selling a Clearwater home as-is with no repairs or cleaning",
      href: "/situations/sell-as-is",
    };
  }
  if (/no agent commissions|commissions or fees|agent commissions/i.test(lower)) {
    return {
      image: ASSETS.noAgentCommissions,
      imageAlt: "Home sale with no real estate agent commissions or fees",
      href: SITE.cashOfferHref,
    };
  }
  if (/certainty and control|certainty.*closing|control over closing/i.test(lower)) {
    return {
      image: ASSETS.certaintyControlClosing,
      imageAlt: "Certainty and control over your cash home sale closing date",
      href: SITE.cashOfferHref,
    };
  }

  return {
    image: ASSETS.distressedProperty,
    imageAlt: SELLER_SITUATIONS[4].imageAlt,
    href: SITE.cashOfferHref,
  };
}

/** Map location-page benefits copy to homepage sit-card layout (images, non-linked cards). */
export function mapCityBenefitsToSellerCards(items: readonly CitySituationInput[]) {
  return items.map((item) => {
    const media = resolveCityBenefitMedia(item.title);
    return {
      title: item.title,
      body: item.body,
      ...media,
    };
  });
}

/** @deprecated Use SELLER_SITUATIONS */
export const SELL_HOUSE_SITUATIONS = SELLER_SITUATIONS;

export const SELL_HOUSE_OFFER_BLOCKS = [
  {
    title: "What goes into your offer",
    body: "Property location and neighborhood comps · current condition and repair scope · recent sales in the same submarket · your preferred closing speed.",
  },
  {
    title: "What we won't do",
    body: "No appraisal-based renegotiations. No financing contingencies. No last-minute repair demands. The offer you accept is the offer you close on.",
  },
] as const;

export const SELL_HOUSE_LEGAL_BLOCKS = [
  {
    title: "Standard closing requirements",
    body: "Title search · property disclosures · settlement statement · deed recording. Same legal protections as a traditional sale — just without the financing contingencies that slow things down.",
  },
  {
    title: "If there are title issues",
    body: "Outstanding liens, probate questions, or unclear ownership chains are usually resolvable. We handle most of the work with the title company so you don't have to.",
  },
] as const;

export const SELL_HOUSE_FAQ = [
  {
    q: "Do I need to fix up my house to sell to a cash buyer?",
    a: "No — we buy properties as-is, without requiring repairs. You won't need to invest time or money in upgrades, staging, or contractor work before closing.",
  },
  {
    q: "How fast can I get a cash offer in St. Petersburg?",
    a: "Cash offers can be provided quickly, often within 24 hours. Once you submit your property details, we review the information and present a fair offer.",
  },
  {
    q: "Are there Realtor commissions or closing costs with cash offers?",
    a: "We don't charge Realtor commissions. Closing costs can vary depending on the specifics of the transaction, but we work to minimize your out-of-pocket expenses and provide transparency on any costs before you commit.",
  },
  {
    q: "What should I expect when selling to a cash buyer?",
    a: "Submit details, receive an offer, schedule a walkthrough, and close on your timeline. Faster and simpler than traditional listings — fewer contingencies, no financing delays.",
  },
  {
    q: "Can I negotiate the cash offer?",
    a: "Yes — negotiation on terms and timelines is possible to align with your needs. We're flexible and willing to discuss adjustments that make the transaction work better for your situation.",
  },
  {
    q: "What areas do you serve around St. Petersburg?",
    a: "We serve St. Petersburg and nearby neighborhoods throughout Pinellas County. Our local presence allows us to respond quickly and provide cash offers tailored to the St. Petersburg market.",
  },
  {
    q: "What documents will I sign at closing?",
    a: "Closing involves standard documents like the deed, settlement statement, and title-related paperwork. We guide you through disclosures and title transfer steps, ensuring you understand each document before signing.",
  },
  {
    q: "Is it safe to sell to a local cash buyer?",
    a: "Yes. We're local and transparent, with clear terms for closings. We work with reputable title companies and follow Florida's legal requirements to protect your interests.",
  },
  {
    q: "How do I start with We Buy St Pete Houses?",
    a: "Start by contacting us with property details. We'll review the information and present a cash offer quickly. No obligation to accept unless the terms work for you.",
  },
  {
    q: "What makes We Buy St Pete Houses different?",
    a: "We emphasize a direct, fast cash path with as-is purchases and clear timelines for closings. Our local focus and transparent approach set us apart from buyers who add unnecessary complexity or delays.",
  },
] as const;

export const REVIEWS_FILTERS = [
  { id: "all", label: "All reviews", count: 12 },
  { id: "foreclosure", label: "Foreclosure", count: 2 },
  { id: "probate", label: "Probate & inherited", count: 3 },
  { id: "relocation", label: "Relocation", count: 2 },
  { id: "landlord", label: "Landlord exit", count: 2 },
  { id: "as-is", label: "As-is / repairs", count: 3 },
] as const;

export type ReviewCategory = (typeof REVIEWS_FILTERS)[number]["id"];

export const REVIEWS_ITEMS = [
  {
    category: "probate" as const,
    initials: "DH",
    avatar: "",
    name: "[BRAND: Verified seller — name]",
    location: "Disston Heights · 2026",
    quote: "[BRAND: Insert verified review here. Do not fabricate. Replace this placeholder with a real Google or BBB testimonial about an inherited property close.]",
    tag: "Inherited · Probate",
    source: "Verified · Google",
    closedIn: "Closed in 9 days",
  },
  {
    category: "foreclosure" as const,
    initials: "MC",
    avatar: "t",
    name: "[BRAND: Verified seller — name]",
    location: "Old Northeast · 2025",
    quote: "[BRAND: Insert verified review here. Foreclosure-stop testimonial — replace placeholder with real seller quote.]",
    tag: "Foreclosure",
    source: "Verified · BBB",
    closedIn: "Closed in 11 days",
  },
  {
    category: "as-is" as const,
    initials: "RT",
    avatar: "l",
    name: "[BRAND: Verified seller — name]",
    location: "Shore Acres · 2025",
    quote: "[BRAND: Insert verified review here. As-is / storm-damaged property testimonial — replace placeholder.]",
    tag: "As-is · Flood zone",
    source: "Verified · Google",
    closedIn: "Closed in 7 days",
  },
  {
    category: "landlord" as const,
    initials: "JM",
    avatar: "i",
    name: "[BRAND: Verified seller — name]",
    location: "Kenwood · 2025",
    quote: "[BRAND: Insert verified review here. Tired landlord with tenants — replace placeholder.]",
    tag: "Landlord exit · Tenants in place",
    source: "Verified · Google",
    closedIn: "Closed in 14 days",
  },
  {
    category: "relocation" as const,
    initials: "SK",
    avatar: "",
    name: "[BRAND: Verified seller — name]",
    location: "Lakewood Estates · 2025",
    quote: "[BRAND: Insert verified review here. Job relocation testimonial — replace placeholder.]",
    tag: "Relocation · Job transfer",
    source: "Verified · BBB",
    closedIn: "Closed in 10 days",
  },
  {
    category: "probate" as const,
    initials: "PB",
    avatar: "t",
    name: "[BRAND: Verified seller — name]",
    location: "Greater Pinellas Point · 2024",
    quote: "[BRAND: Insert verified review here. Estate executor testimonial — replace placeholder.]",
    tag: "Probate · Estate",
    source: "Verified · Google",
    closedIn: "Closed in 21 days",
  },
  {
    category: "as-is" as const,
    initials: "EW",
    avatar: "l",
    name: "[BRAND: Verified seller — name]",
    location: "Historic Kenwood · 2024",
    quote: "[BRAND: Insert verified review here. Major repairs needed — replace placeholder.]",
    tag: "As-is · Major repairs",
    source: "Verified · Google",
    closedIn: "Closed in 12 days",
  },
  {
    category: "foreclosure" as const,
    initials: "CR",
    avatar: "i",
    name: "[BRAND: Verified seller — name]",
    location: "Pasadena · 2024",
    quote: "[BRAND: Insert verified review here. Pre-foreclosure testimonial — replace placeholder.]",
    tag: "Pre-foreclosure",
    source: "Verified · BBB",
    closedIn: "Closed in 8 days",
  },
  {
    category: "probate" as const,
    initials: "AT",
    avatar: "",
    name: "[BRAND: Verified seller — name]",
    location: "Snell Isle · 2024",
    quote: "[BRAND: Insert verified review here. Inherited home testimonial — replace placeholder.]",
    tag: "Inherited",
    source: "Verified · Google",
    closedIn: "Closed in 16 days",
  },
  {
    category: "relocation" as const,
    initials: "BL",
    avatar: "t",
    name: "[BRAND: Verified seller — name]",
    location: "Coquina Key · 2024",
    quote: "[BRAND: Insert verified review here. Out-of-state relocation testimonial — replace placeholder.]",
    tag: "Relocation · Out of state",
    source: "Verified · Google",
    closedIn: "Closed in 13 days",
  },
  {
    category: "landlord" as const,
    initials: "GN",
    avatar: "l",
    name: "[BRAND: Verified seller — name]",
    location: "Pinellas Park · 2023",
    quote: "[BRAND: Insert verified review here. Multifamily landlord testimonial — replace placeholder.]",
    tag: "Multi-unit · Landlord",
    source: "Verified · BBB",
    closedIn: "Closed in 18 days",
  },
  {
    category: "as-is" as const,
    initials: "HV",
    avatar: "i",
    name: "[BRAND: Verified seller — name]",
    location: "Bartlett Park · 2023",
    quote: "[BRAND: Insert verified review here. Hoarder situation / cleanout testimonial — replace placeholder.]",
    tag: "As-is · Cleanout",
    source: "Verified · Google",
    closedIn: "Closed in 9 days",
  },
] as const;

export const REVIEWS_TRUST_SIGNALS = [
  {
    title: "Verifiable local address",
    body: "We're at PO Box 143, St Petersburg, FL 33731 — verifiable in public Florida business records.",
  },
  {
    title: "Direct phone line",
    body: "Reach a real person at (727) 477-8998 — no offshore call centers or third-party screeners.",
  },
  {
    title: "Public reviews",
    body: "Verified Google and BBB reviews from named local sellers. We're happy to share references on request.",
  },
  {
    title: "Proof of funds",
    body: "We provide written proof of funds before any offer is accepted. If a buyer can't, walk away.",
  },
] as const;

export const REVIEWS_PROCESS_STEPS = [
  { num: "01", title: "Initial inquiry", body: "Contact us by phone or online form and share basic details about your property." },
  { num: "02", title: "Property review", body: "We evaluate condition and local market factors — no formal inspection required for our offer." },
  { num: "03", title: "Offer presentation", body: "We present a no-obligation cash offer and clearly explain how we arrived at the price." },
  { num: "04", title: "Closing", body: "You pick the closing date. We close in as little as 7 days, or wait until you're ready." },
] as const;

export const REVIEWS_COMPARE_ROWS = [
  { factor: "Speed", us: "Close in as little as 7 days", other: "Typically 30–90+ days" },
  { factor: "Certainty", us: "No financing contingencies", other: "Buyer financing can fall through" },
  { factor: "Costs", us: "No commissions or fees", other: "5–6% agent commissions + closing costs" },
  { factor: "Repairs", us: "Sold as-is", other: "Often requires repairs & staging" },
  { factor: "Best for", us: "Time-pressured sellers · as-is properties", other: "Sellers with time & turnkey property" },
] as const;

export const REVIEWS_FAQ = [
  {
    q: "How fast can I get a cash offer in St Pete?",
    a: "You can typically receive a no-obligation cash offer within 24–72 hours after your inquiry. Once you share basic property details, we review the information and present an offer quickly so you can make an informed decision.",
  },
  {
    q: "Are there fees or commissions when selling to a cash buyer?",
    a: "No commissions or agent fees are charged when selling to We Buy St Pete Houses. The offer you receive is the amount you'll get at closing, with no hidden costs.",
  },
  {
    q: "What kinds of repairs are required for a cash offer?",
    a: "Most cash buyers purchase as-is, so repairs are not required for an offer. Some sellers choose to make minor fixes, but we buy homes in any condition — no repairs necessary.",
  },
  {
    q: "What if I have liens or other title issues?",
    a: "Cash buyers can work with you if there are title issues. A title company can help clear liens and facilitate closing, and we'll guide you through the process to resolve any complications.",
  },
  {
    q: "How do I compare cash offers vs listing with an agent?",
    a: "Compare speed, certainty, and costs. Cash offers are typically faster and avoid commissions; agent listings may yield a higher price but take longer and involve more costs. The best choice depends on your timeline and priorities.",
  },
  {
    q: "Is there a BBB rating for We Buy St Pete Houses?",
    a: "We encourage you to check BBB ratings and other reviews when evaluating credibility. Trust signals like customer testimonials and verified contact details help you make an informed decision.",
  },
  {
    q: "What is a cash home buyer in St Petersburg, FL?",
    a: "A cash home buyer is an investor who pays with cash, often purchasing quickly and buying homes as-is. This eliminates financing risks and allows for a faster, simpler transaction.",
  },
  {
    q: "What is the typical closing timeline for a cash sale in St Pete?",
    a: "Cash closings can happen quickly — often within 7 days, depending on title work and logistics. You choose the closing date that works for your schedule.",
  },
  {
    q: "Ready to explore a cash offer? How do I start?",
    a: "Start by submitting a simple form or calling us at (727) 477-8998 for a no-obligation cash offer. We'll guide you step by step through the process with full transparency.",
  },
] as const;

export const HOW_IT_WORKS_TOC = [
  { id: "what-is-a-cash-buyer", label: "What is a cash buyer?" },
  { id: "how-it-works", label: "How the process works" },
  { id: "benefits", label: "Benefits of cash offers" },
  { id: "who-should-consider", label: "Who should consider" },
  { id: "step-by-step", label: "Step-by-step guide" },
  { id: "are-cash-buyers-legit", label: "Are cash buyers legit?" },
  { id: "when-to-consider", label: "When to consider" },
  { id: "faq", label: "FAQ" },
] as const;

export const HOW_IT_WORKS_DETAILED_STEPS = [
  {
    num: "01",
    title: "Submit your inquiry",
    body: "Reach out by phone, online form, or email with your property address and a brief description of your situation. This takes just a few minutes.",
  },
  {
    num: "02",
    title: "Receive and review the offer",
    body: "We evaluate your property and typically provide a written cash offer within 24 hours. Review it at your own pace with no pressure.",
  },
  {
    num: "03",
    title: "Acceptance and escrow",
    body: "Once you accept, we open escrow and handle title work, inspections (for our due diligence only — not your responsibility), and paperwork.",
  },
  {
    num: "04",
    title: "Closing and possession",
    body: "We close on a date that works for you. After signing, you receive your proceeds and hand over the keys. The entire process from inquiry to close can happen in as little as 7 days.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    num: "01",
    title: "Initial inquiry",
    body: "You contact us with basic property details — address, condition, and your situation.",
  },
  {
    num: "02",
    title: "Property assessment",
    body: "We review the property (often remotely or with a brief walk-through) and evaluate it as-is.",
  },
  {
    num: "03",
    title: "Cash offer",
    body: "Within 24 hours, you receive a written, fair cash offer with no obligation to accept.",
  },
  {
    num: "04",
    title: "Closing",
    body: "Once you accept, we handle the paperwork and close on your timeline.",
  },
] as const;

export const HOW_IT_WORKS_BENEFITS = [
  { title: "Speed and certainty", body: "Close in as little as 7 days with no financing fall-through risk." },
  { title: "Sell as-is", body: "No repair costs, staging, or cosmetic improvements required." },
  { title: "No commissions or fees", body: "Sellers enjoy a hassle-free experience with $0 real estate commissions." },
  { title: "Fewer contingencies", body: "No appraisal or inspection contingencies that delay or derail the sale." },
  { title: "Flexible closing date", body: "Choose a timeline that works for your schedule — 7, 14, or 30+ days." },
  { title: "No showings or open houses", body: "Sell without strangers walking through your home." },
] as const;

export const HOW_IT_WORKS_SITUATIONS = [
  { title: "Foreclosure risk", body: "Stop the foreclosure process with a fast sale." },
  { title: "Divorce or separation", body: "Divide assets quickly without prolonged listing periods." },
  { title: "Inherited or probate property", body: "Settle estates without managing repairs or showings." },
  { title: "Tired landlord", body: "Exit rental property headaches and problem tenants immediately." },
  { title: "Relocation or job transfer", body: "Move on your schedule without waiting for a buyer." },
  { title: "Upside-down mortgage", body: "We can work with liens, unpaid balances, and complex situations." },
] as const;

export const HOW_IT_WORKS_FAQ = [
  {
    q: "Is selling to a cash buyer faster?",
    a: "Yes. Cash offers typically close faster because they don't rely on mortgage approvals. We can close in as little as 7 days.",
  },
  {
    q: "Are there fees or commissions?",
    a: "Typically no. You won't pay real estate agent commissions or seller fees when you sell to us.",
  },
  {
    q: "What is a cash offer, and is it fair?",
    a: "A cash offer is a price proposed by a buyer paid in cash that can close quickly. Fairness depends on property condition and market context, but reputable buyers provide offers based on honest evaluations.",
  },
  {
    q: "How fast can I close?",
    a: "Closes can occur in as little as 7 days, depending on title and escrow. We work on your timeline.",
  },
  {
    q: "Do I need to repair the house?",
    a: "No. Cash buyers often purchase as-is, with no repair requirements.",
  },
  {
    q: "What documents are needed to start?",
    a: "Proof of ownership and basic property details are usually sufficient to start. We guide you through the rest.",
  },
  {
    q: "How do I compare a cash offer to listing with an agent?",
    a: "Compare terms, closing speed, repairs, and commissions. Cash offers can save time and costs, though they may be lower than retail listing prices.",
  },
  {
    q: "Is a cash buyer legit?",
    a: "Yes. Legitimate cash buyers are investors who close with cash. Verify credibility by checking reviews and references.",
  },
  {
    q: "What is the next step?",
    a: "Contact us for a no-obligation cash offer and quick next steps. We'll walk you through the entire process.",
  },
] as const;

export const OFFER_MATH = {
  eyebrow: "Our Offer Math",
  lede:
    "We need to make a profit on the sale, but we promise not to take advantage of you or give you a lowball offer. Every cash offer follows a transparent formula, and we are happy to walk you through the math so you understand exactly how we arrived at your number.",
  formulaResult: { label: "Cash Offer Amount", value: "Your Offer" },
  cashAdvance: {
    badge: "Additional Benefit",
    lede:
      "Depending on your situation, we may be able to provide a cash advance against your future sale proceeds. People often use cash advances to cover:",
    cta: "Get a Cash Offer",
  },
} as const;

export const OFFER_FORMULA_PARTS = [
  { label: "After Repair Value", value: "ARV" },
  { label: "Holding & Selling", value: "10%" },
  { label: "Our Profit", value: "10%" },
  { label: "Repair Costs", value: "Actual" },
] as const;

export const OFFER_FORMULA_DETAILS = [
  {
    num: "01",
    title: "After Repair Value",
    body: "What your home would sell for in fully renovated, market-ready condition. We base this on recent comparable sales in your neighborhood, not a guess.",
  },
  {
    num: "02",
    title: "Holding & Selling (10%)",
    body: "Costs we cover after buying: property taxes, insurance, utilities while we hold it, and agent commissions and closing costs we pay when we resell.",
  },
  {
    num: "03",
    title: "Our Profit (10%)",
    body: "A reasonable margin that lets us stay in business and keep buying homes like yours. We do not maximize this at your expense.",
  },
  {
    num: "04",
    title: "Repair Costs",
    body: "The estimated cost to bring your home to market-ready condition. We absorb this risk so you do not pay for any repairs out of pocket.",
  },
] as const;

export const CASH_ADVANCE_BENEFITS = [
  "Moving expenses",
  "Deposits on a new home",
  "Catching up on bills",
  "Relocation costs",
] as const;

export const PROS_CONS = {
  eyebrow: "Cash Sale Tradeoffs",
  lede:
    "Cash offers close fast and require no repairs, but may come with a discount compared to a full-market listing. Here is the honest tradeoff.",
  advantagesTitle: "Advantages of cash sales",
  tradeoffsTitle: "Considerations to keep in mind",
} as const;

export const PROS_ADVANTAGES = [
  {
    label: "Speed.",
    text: "Close quickly without waiting for buyer financing or lengthy inspections.",
  },
  {
    label: "No repairs.",
    text: "Sell as-is — no fixing, cleaning, or staging required.",
  },
  {
    label: "No commissions.",
    text: "Keep more of your proceeds without paying agent fees.",
  },
  {
    label: "Certainty.",
    text: "Cash offers rarely fall through compared to financed deals.",
  },
  {
    label: "Convenience.",
    text: "No showings, open houses, or disruption to your life.",
  },
] as const;

export const PROS_TRADEOFFS = [
  {
    label: "Price.",
    text: "Cash offers may be below market value to account for the speed and convenience.",
  },
  {
    label: "Property assessment.",
    text: "Your home's condition and local market influence the final offer.",
  },
  {
    label: "Best-fit scenarios.",
    text: "Ideal for urgent relocations, inherited properties, foreclosure situations, or homes needing major repairs.",
  },
] as const;

export const PROS_COMPARE_ROWS = [
  { label: "Time to close", traditional: "60–90+ days to close", cash: "Close quickly" },
  { label: "Repairs & staging", traditional: "Repairs & staging required", cash: "Sell as-is" },
  { label: "Agent commissions", traditional: "Agent commissions (5–6%)", cash: "No commissions" },
  { label: "Financing contingencies", traditional: "Financing contingencies", cash: "Guaranteed cash" },
  { label: "Showings & open houses", traditional: "Showings & open houses", cash: "No showings" },
] as const;

export { CITY_AREA_LIST as AREA_CITIES };

export const AREA_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8396.837695282898!2d-82.64505577943609!3d27.76555673270129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e18481dc2ddf%3A0x2e71d28c72abcc7f!2sSt.%20Petersburg%2C%20FL%2033731%2C%20USA!5e0!3m2!1sen!2sin!4v1780317001513!5m2!1sen!2sin";

/** Google Maps embed URL centered on a given city (used on city location pages). */
export function buildCityMapEmbed(cityName: string): string {
  const query = encodeURIComponent(`${cityName}, FL, USA`);
  return `https://maps.google.com/maps?q=${query}&hl=en&z=12&ie=UTF8&iwloc=&output=embed`;
}

export function buildCityMapTitle(cityName: string): string {
  return `Map of ${cityName}, FL and the Tampa Bay service area`;
}

export const GUARANTEE_ASIDE_CHECKLIST = [
  "Written offer within 24 hours",
  "We cover all closing costs",
  "Local St Pete title company",
  "No obligation to accept",
] as const;

export const GUARANTEE_ITEMS = [
  {
    title: "Guaranteed cash offer",
    icon: "cash" as const,
    body: "A written offer based on your property's current condition. Firm — no last-minute renegotiations.",
  },
  {
    title: "No hidden fees",
    icon: "dollar" as const,
    body: "The offer you see is the offer you get. We cover closing costs, so you keep more of your sale price.",
  },
  {
    title: "Closing on your timeline",
    icon: "clock" as const,
    body: "Choose a closing date that works for you — 7 days, 30 days, or longer if needed.",
  },
  {
    title: "AS-IS purchase",
    icon: "repair" as const,
    body: "We buy in any condition. No repairs, no staging, no cleaning required. Leave what you don't want.",
  },
] as const;

export const MARKET_SECTION = {
  eyebrow: "Local Market",
  lede:
    "We analyze local neighborhoods, property types, and current market trends to calibrate cash offers that reflect St Petersburg realities.",
  neighborhoodsTitle: "Local neighborhoods we serve",
  neighborhoodsBody:
    "We buy homes throughout St Petersburg — from historic neighborhoods to established residential areas. Each one has unique characteristics that influence value, and we account for local conditions in every offer.",
  neighborhoods: [
    "Old Northeast",
    "Kenwood",
    "Greater Pinellas Point",
    "Lakewood Estates",
    "Shore Acres",
  ],
  conditionsTitle: "How market conditions affect cash offers",
  conditionsBody1:
    "Local market data grounds our offers in St Petersburg realities. We consider comparable sales, property condition, needed repairs, and how quickly you need to close. While cash offers provide speed and convenience, they typically reflect a discount to account for the certainty and immediacy we provide.",
  conditionsBody2:
    "Our approach is transparent: we share how we arrived at your offer and explain the factors that influenced the price. No surprises, no hidden calculations.",
} as const;

export const MARKET_FACTORS = [
  {
    letter: "A",
    title: "Recent price trends",
    body: "We track recent sale prices in St Pete neighborhoods — Historic Kenwood, Disston Heights, Old Northeast — to ground our offers in real comps, not generic formulas.",
  },
  {
    letter: "B",
    title: "Days on market",
    body: "How long homes sit on the market as-is matters. We factor in current absorption rates so our offers reflect what a property will actually transact for today.",
  },
  {
    letter: "C",
    title: "Property condition impact",
    body: "Repair scope changes the calculus. We estimate the realistic cost to bring a home to market — and pass through fair value to you without nickel-and-diming.",
  },
  {
    letter: "D",
    title: "Local demand signals",
    body: "Demand from owner-occupants vs. investors varies by neighborhood. We blend those signals into a single, transparent cash number for your home.",
  },
] as const;

export const RESOURCES = [
  {
    title: "St. Petersburg City Hall",
    sub: "Permits · zoning · city services",
    href: "https://www.stpete.org/",
  },
  {
    title: "Pinellas County Tax Collector",
    sub: "Property tax inquiries",
    href: "https://www.pinellascounty.org/",
  },
  {
    title: "Pinellas County Clerk of the Circuit Court",
    sub: "Property records · legal filings",
    href: "https://www.pinellasclerk.org/",
  },
  {
    title: "Florida Department of Revenue",
    sub: "Tax-related questions",
    href: "https://floridarevenue.com/",
  },
] as const;

export const BEFORE_AFTER = [
  {
    beforeLabel: "BEFORE · distressed property",
    afterLabel: "AFTER · renovated & resold",
    beforeImage: "/assets/images/before-building.webp",
    afterImage: "/assets/images/After-building.webp",
    beforeImageAlt:
      "Before: distressed inherited bungalow exterior in Disston Heights, St. Petersburg",
    afterImageAlt:
      "After: renovated bungalow exterior in Disston Heights following cash purchase and rehab",
    title: "Inherited bungalow — Disston Heights",
    body: "Estate full of contents, dated kitchen, leaking roof. Cash close in 9 days.",
    statHtml: "<b>9 day</b> close · <b>14 wk</b> renovation",
  },
  {
    beforeLabel: "BEFORE · vacant rental",
    afterLabel: "AFTER · move-in ready",
    beforeImage: "/assets/images/before-inner-house.webp",
    afterImage: "/assets/images/after-inner-house.webp",
    beforeImageAlt:
      "Before: vacant rental interior in Old Northeast, St. Petersburg — dated and worn",
    afterImageAlt:
      "After: refreshed rental interior in Old Northeast ready for new occupants",
    title: "Vacant rental — Old Northeast",
    body: "Tired landlord with tenant issues. Closed without eviction in 7 days.",
    statHtml: "<b>7 day</b> close · <b>11 wk</b> renovation",
  },
] as const;

export const FAQ_SECTION = {
  eyebrow: "FAQ",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Is it worth getting a cash offer for your house?",
    a: "Yes — cash offers can speed up your sale and reduce hassle, especially if you need to close quickly. They work best when your timeline matters more than maximizing sale price, or when your home needs repairs you'd prefer not to make.",
  },
  {
    q: "Should I accept a cash offer for my house?",
    a: "Consider your timeline, fees, and whether you prefer a quick, as-is close. Cash offers provide certainty and speed but may come at a lower price than a traditional listing. We can discuss your specific situation to help you decide.",
  },
  {
    q: "What is the cash offer process for my home in St Petersburg?",
    a: "Submit your property details, we review the information and local market conditions, you receive a cash offer, and we work toward a fast, stress-free close on your timeline.",
  },
  {
    q: "How long does it take to get a cash offer for my home in St Petersburg?",
    a: "Most sellers receive a cash offer within 24–48 hours after submitting details.",
  },
  {
    q: "Are cash home buyers in St Petersburg legit?",
    a: "Yes — We Buy St Pete Houses operates locally with a published service area and transparent terms.",
  },
  {
    q: "What is a cash offer compared to listing with an agent in St Petersburg?",
    a: "A cash offer can be faster and as-is, while listing with an agent may yield a higher price but involves longer timelines, repairs, showings, and commissions.",
  },
  {
    q: "What is a cash home buyer?",
    a: "A cash home buyer is a company or investor who pays in cash to purchase homes quickly, often without lender contingencies, inspections, or repair requirements.",
  },
  {
    q: "How do I start the cash-offer process?",
    a: "Submit your property details through our website or by calling us. We'll review the information and present a cash offer within 24–48 hours.",
  },
  {
    q: "Is there a risk of scams with cash buyers in St Petersburg?",
    a: "Work with local, established buyers and verify each offer through clear, written terms to minimize risk.",
  },
  {
    q: "How market conditions affect cash offers",
    a: "Local market data grounds our offers in St Petersburg realities. We consider comparable sales, property condition, needed repairs, and how quickly you need to close. While cash offers provide speed and convenience, they typically reflect a discount to account for the certainty and immediacy we provide.\n\nOur approach is transparent: we share how we arrived at your offer and explain the factors that influenced the price. No surprises, no hidden calculations.",
  },
  {
    q: "Local neighborhoods we serve",
    a: "We buy homes throughout St Petersburg — from historic neighborhoods to established residential areas. Each one has unique characteristics that influence value, and we account for local conditions in every offer.",
  },
] as const;
