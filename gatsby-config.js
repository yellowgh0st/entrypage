module.exports = {
  siteMetadata: {
    title: `Aldana`,
    description: `Empowering The Stellar Network. To infinity and beyond.`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      //icon: `atoms/png/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
