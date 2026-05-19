import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomCta } from "@/components/layout/BottomCta";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "EMIFULL障がい福祉事業部 | 人生を、咲かせつづける福祉。",
    template: "%s | EMIFULL障がい福祉事業部"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  },
  openGraph: {
    title: "EMIFULL障がい福祉事業部 | 人生を、咲かせつづける福祉。",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    type: "website",
    locale: "ja_JP"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-warm-50 font-sans text-ink">
        <Analytics />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Header />
        {children}
        <Footer />
        <BottomCta />
      </body>
    </html>
  );
}
