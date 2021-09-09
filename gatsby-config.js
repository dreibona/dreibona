module.exports = {
  siteMetadata: {
    url: 'https://dreibona.design',
    title: 'Dreibona',
    description: "Dreibona's Portfolio",
    author: 'Dreibona',
    keywords: 'design, ux, ui, gatsby',
    image: 'src/images/dreibona.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://dreibona.design`,
      },
    },
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
