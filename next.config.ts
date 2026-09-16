import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // The portraits and logo are transparent PNGs; both formats keep alpha.
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
