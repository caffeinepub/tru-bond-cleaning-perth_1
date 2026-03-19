import { useEffect } from "react";

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOMeta({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
}: SEOMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    if (ogImage) setMeta("og:image", ogImage, true);
    if (canonicalUrl) setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (ogImage) setMeta("twitter:image", ogImage);

    if (canonicalUrl) {
      let link = document.querySelector(
        "link[rel='canonical']",
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}
