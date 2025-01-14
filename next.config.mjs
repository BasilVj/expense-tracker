/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/transaction",
      permanent: true, // Use 301 redirect
    },
  ],
};

export default nextConfig;
