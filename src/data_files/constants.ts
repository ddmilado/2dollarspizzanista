import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "PIZZANISTA!",
  tagline: "PIZZANISTA Tuesdays ",
  description: "PIZZANISTA Tuesdays NFT",
  description_short: "PIZZANISTA Tuesdays NFT",
  url: "https://pizzanista.com",
  author: "Dami Adebayo",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : PIZZANISTA Tuesdays`,
  description: "PIZZANISTA Tuesdays NFT",
  image: ogImageSrc,
};
