require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Grace Lutheran Church`,
    description: `Website for Grace Lutheran Church in Long Beach, MS`,
    author: `@_RichardSween`,
    image: `/luther_rose.png`,
    siteUrl: `https://gracelongbeach.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `omeca2a9`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grace-website`,
        short_name: `Grace Lutheran Church`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/luther_rose.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
