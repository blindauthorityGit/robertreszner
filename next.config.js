/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
};
