/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:80/:path*'
            },
        ]
    },
}

module.exports = nextConfig