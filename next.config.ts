import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // The portraits and logo are transparent PNGs; both formats keep alpha.
    formats: ["image/avif", "image/webp"],
    // Editorial imagery is hotlinked from Unsplash's CDN (see data/imagery.ts)
    // and optimised by Next like any other image.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default withNextIntl(nextConfig);
