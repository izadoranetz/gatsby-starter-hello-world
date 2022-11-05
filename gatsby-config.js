/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Teste Gastby Andorinea`,
    siteUrl: `https://www.andorinea.com`,
    description: `Um teste tem o seu valor`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#850E35`,
        // Disable the loading spinner.
        // showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/assets/icon.png'
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.(js)`],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
