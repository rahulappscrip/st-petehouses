import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { RudderAnalyticsProvider } from "@/components/analytics/RudderAnalyticsProvider";
import { RudderStackScript } from "@/components/analytics/RudderStackScript";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Main } from "@/components/layout/Main";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { ASSETS, SITE } from "@/lib/constants";
import { REAL_ESTATE_AGENT_JSON_LD, SITE_PUBLISHER, SITE_PUBLISHER_JSON_LD } from "@/lib/schema";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = localFont({
  src: "../../public/fonts/Inter-Variable-Font.ttf",
  variable: "--font-inter-next",
  display: "swap",
});

const dmSerifDisplay = localFont({
  src: "../../public/fonts/DMSerifDisplay-Italic.ttf",
  weight: "400",
  style: "italic",
  variable: "--font-dm-serif-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE.name,
    template: "%s",
  },
  description:
    "We buy houses in St. Petersburg and Tampa Bay for cash. Fair offers, fast closings, no repairs required.",
  publisher: SITE_PUBLISHER.name,
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: ASSETS.favicon, sizes: "32x32", type: "image/png" },
      { url: ASSETS.faviconPng, sizes: "240x240", type: "image/png" },
    ],
    shortcut: ASSETS.favicon,
    apple: [{ url: ASSETS.faviconPng, sizes: "180x180", type: "image/png" }],
  },
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
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <RudderStackScript />
        <RudderAnalyticsProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [REAL_ESTATE_AGENT_JSON_LD, SITE_PUBLISHER_JSON_LD],
            }),
          }}
        />
        <div className="site-chrome">
          <TopBar />
          <Header />
        </div>
        <Main>{children}</Main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}