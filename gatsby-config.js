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
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'limelight',
          'Open Sans\:300,400,600'
        ],
        display: 'swap'
      }
    },
  ],
};
