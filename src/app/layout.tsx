import type { Metadata, Viewport } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { dmSerifDisplay, inter } from "@/lib/fonts";
import { ASSETS, SITE } from "@/lib/constants";
import { REAL_ESTATE_AGENT_JSON_LD } from "@/lib/schema";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <link rel="icon" href={ASSETS.favicon} type="image/png" />
        <link rel="shortcut icon" href={ASSETS.favicon} type="image/png" />
        <link rel="apple-touch-icon" href={ASSETS.favicon} type="image/png" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(REAL_ESTATE_AGENT_JSON_LD) }}
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
