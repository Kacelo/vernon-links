/** @type {import('next').NextConfig} */
const nextConfig = {

        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn-icons-png.flaticon.com',
              port: '',
              pathname: '512/**',
            },
          ],
          domains: ['cdn-icons-png.flaticon.com','img.icons8.com'],

        },
}

module.exports = nextConfig
