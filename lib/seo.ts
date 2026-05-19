import type { Metadata } from "next";
import { facilityAreas, facilities, services } from "@/data/site";

export const siteConfig = {
  name: "EMIFULL障がい福祉事業部",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://emifull-welfare.jp",
  description:
    "発達、学び、働く、暮らす。EMIFULLは、子どもから大人まで一人ひとりの人生に寄り添います。",
  ogImage: "/images/hero-life-01.webp"
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "ja_JP",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: facilityAreas.map((area) => `${area.prefecture}${area.area}`),
    knowsAbout: services.map((service) => service.title)
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/facilities?keyword={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function serviceJsonLd(service: (typeof services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: siteConfig.name },
    areaServed: facilityAreas.map((area) => `${area.prefecture}${area.area}`)
  };
}

export function localBusinessJsonLd(facility: (typeof facilities)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: facility.name,
    description: facility.description,
    image: new URL(facility.image, siteConfig.url).toString(),
    address: {
      "@type": "PostalAddress",
      addressRegion: facility.prefecture,
      addressLocality: facility.area,
      addressCountry: "JP"
    },
    telephone: "確認中",
    parentOrganization: { "@type": "Organization", name: siteConfig.name }
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, siteConfig.url).toString()
    }))
  };
}

export const staticRoutes = [
  "/",
  "/services",
  "/facilities",
  "/consultation",
  "/recruit",
  "/about",
  "/life-stage",
  "/faq",
  "/brands",
  ...services.map((service) => service.href),
  ...facilities.map((facility) => `/facilities/${facility.slug}`),
  ...facilityAreas.map((area) => `/areas/${area.slug}`),
  "/brands/sorato",
  "/brands/umie",
  "/brands/karada-kids",
  "/brands/job-college",
  "/brands/bloom",
  "/brands/hinode-sharehome",
  "/brands/nojigiku"
];
