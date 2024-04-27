/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "unsplash.com",
            "plus.unsplash.com",
            "images.unsplash.com",
            "source.unsplash.com",
            "res.cloudinary.com"
        ],
    },
};

export default nextConfig;
