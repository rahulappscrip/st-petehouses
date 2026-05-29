import type { Metadata, Viewport } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { dmSerif, manrope } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "We Buy Houses In St Petersburg FL | Cash Offer in 24 Hours",
  description:
    "Sell your St Petersburg house fast for cash. No repairs, no fees, no commissions. Get a fair cash offer today and close on your timeline—as-is, hassle-free.",
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "We Buy Houses In St Petersburg FL | Cash Offer in 24 Hours",
    description:
      "Sell your St Petersburg house fast for cash. No repairs, no fees, no commissions. Close on your timeline.",
    url: SITE.url,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1F3D2E",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "We Buy St Pete Houses",
  legalName: "We Buy St Pete Houses, LLC",
  description:
    "A real estate solutions and investment firm specializing in helping homeowners sell burdensome houses at a fair price.",
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "143",
    addressLocality: "St Petersburg",
    addressRegion: "FL",
    postalCode: "33731",
  },
  telephone: SITE.phone,
  email: SITE.email,
  areaServed:
    "St. Petersburg, Clearwater, Tampa, Largo, Pinellas Park, Seminole, Dunedin, Bradenton, Brandon, and the greater Tampa Bay area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
