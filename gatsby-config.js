module.exports = {
  siteMetadata: {
    title: `Aldana`,
    description: `Empowering The Stellar Network.`,
    author: `@ylwghst`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portable-network-graphics`,
        path: `${__dirname}/src/atoms/png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        name: `scalable-vector-graphics`,
        rule: {
          include: `${__dirname}/src/atoms/svg`
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-aldana-default`,
        short_name: `starter`,
        start_url: `/`,
      //icon: `atoms/png/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
