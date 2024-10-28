/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'pma-s3-bucket.s3.eu-north-1.amazonaws.com',
                port : "",
                pathname : '/**',
            }
        ]
    }
};

export default nextConfig;
