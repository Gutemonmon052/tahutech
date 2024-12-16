import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    formats:["image/avif","image/webp"],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"x8ki-letl-twmt.n7.xano.io"
      },
      {
        protocol:"https",
        hostname:"plus.unsplash.com"
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      },
    ]
  }
};

export default nextConfig;
