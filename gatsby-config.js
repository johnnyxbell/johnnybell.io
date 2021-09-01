module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Open Sans',
              variants: ['200', '400', '600']
            }
          ]
        }
      }
    },
  ],
};
