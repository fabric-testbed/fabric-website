/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.fabric-testbed.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
