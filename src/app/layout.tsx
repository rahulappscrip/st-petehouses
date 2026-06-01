import type { Metadata, Viewport } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { ASSETS, SITE } from "@/lib/constants";
import { REAL_ESTATE_AGENT_JSON_LD } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s",
  },
  description: "We buy houses in St. Petersburg and Tampa Bay for cash. Fair offers, fast closings, no repairs required.",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: ASSETS.favicon, type: "image/png" }],
    shortcut: [{ url: ASSETS.favicon, type: "image/png" }],
    apple: [{ url: ASSETS.favicon, type: "image/png" }],
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
      <head>
        <link rel="icon" href={ASSETS.favicon} type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href={ASSETS.favicon} type="image/png" />
        <link rel="apple-touch-icon" href={ASSETS.favicon} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(REAL_ESTATE_AGENT_JSON_LD) }}
        />
        <div className="site-chrome">
          <TopBar />
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
