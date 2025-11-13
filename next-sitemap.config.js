// next-sitemap.config.js

const noIndexPages = [

];

export default {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    exclude: noIndexPages,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: noIndexPages,
            },
        ],
    },
    changefreq: 'daily',
};
