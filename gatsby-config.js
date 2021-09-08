module.exports = {
  siteMetadata: {
    siteUrl: 'https://dreibona.design',
    title: 'Dreibona',
    description: "Dreibona's Portfolio",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    'gatsby-plugin-mdx',
  ],
};
