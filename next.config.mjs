/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/transactions",
      permanent: true, // Use 301 redirect
    },
  ],
};

export default nextConfig;
