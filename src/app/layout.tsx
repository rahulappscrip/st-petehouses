import type { Metadata, Viewport } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Main } from "@/components/layout/Main";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { ASSETS, SITE } from "@/lib/constants";
import { REAL_ESTATE_AGENT_JSON_LD, SITE_PUBLISHER, SITE_PUBLISHER_JSON_LD } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s",
  },
  description: "We buy houses in St. Petersburg and Tampa Bay for cash. Fair offers, fast closings, no repairs required.",
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
    <html lang="en">
      <body>
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
