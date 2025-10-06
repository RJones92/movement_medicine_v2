const path = require(`path`);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `COP Clinic`,
    description: `Clacton Osteopathy and Physiotherapy`,
    siteUrl: `https://www.clacton-osteopathy-and-physiotherapy.co.uk`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: [
          `https://www.clacton-osteopathy-and-physiotherapy.co.uk/sitemap/sitemap-index.xml`,
          `https://www.clacton-osteopathy-and-physiotherapy.co.uk/sitemap/sitemap-indexed-0.xml`,
        ],
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
