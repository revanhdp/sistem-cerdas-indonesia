import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#eef1f4",
    theme_color: "#1b2a3a",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
