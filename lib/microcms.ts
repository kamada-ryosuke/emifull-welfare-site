export type MicroCMSImage = {
  url: string;
  width?: number;
  height?: number;
};

export type CMSService = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image?: MicroCMSImage;
};

export type CMSFacility = {
  id: string;
  name: string;
  slug: string;
  area: string;
  service: string;
  image?: MicroCMSImage;
};

export type CMSNews = { id: string; title: string; slug: string; publishedAt?: string };
export type CMSFaq = { id: string; question: string; answer: string; category?: string };
export type CMSStaff = { id: string; name: string; role: string; message: string; image?: MicroCMSImage };
export type CMSRecruit = { id: string; title: string; slug: string; description: string };
export type CMSColumn = { id: string; title: string; slug: string; body: string };

type EndpointMap = {
  services: CMSService;
  facilities: CMSFacility;
  news: CMSNews;
  faq: CMSFaq;
  staff: CMSStaff;
  recruit: CMSRecruit;
  column: CMSColumn;
};

export async function fetchMicroCMS<K extends keyof EndpointMap>(
  endpoint: K,
  query = ""
): Promise<{ contents: EndpointMap[K][] }> {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!domain || !apiKey) {
    return { contents: [] };
  }

  const url = `https://${domain}.microcms.io/api/v1/${endpoint}${query}`;
  const response = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": apiKey },
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(`microCMS request failed: ${endpoint}`);
  }

  return response.json();
}
