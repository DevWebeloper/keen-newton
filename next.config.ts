import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo>; the workflow sets GITHUB_PAGES=true.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /* config options here */
  // PPR-based features can't be combined with static export.
  ...(isPages
    ? {
        output: "export" as const,
        basePath: "/keen-newton",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
