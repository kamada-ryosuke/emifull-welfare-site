/** @type {import('next').NextConfig} */
const isFilePreview = process.env.STATIC_FILE_PREVIEW === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: false,
  assetPrefix: isFilePreview ? "./" : undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
