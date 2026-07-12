import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), priority: 1 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), priority: 0.8 },
  ];
}
