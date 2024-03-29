/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL
	},
	sassOptions: {
		includePaths: ['./src'],
		prependData: `@import "@/assets/styles/variables/index.scss";`
	},
	images: {
		domains: ['localhost', 'cloudflare-ipfs.com']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		];
	}
};

module.exports = nextConfig;
