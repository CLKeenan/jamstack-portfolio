require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `dc3448e91cba6fc8bc403afa07d174`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
