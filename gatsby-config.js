module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Space Website",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/assets/destination`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "destination",
        path: `./src/data/data.json`,
      },
    },
  ],
};
