module.exports = {
  siteMetadata: {
    title: 'GoodWithTech',
    description: 'Good with tech - a community of tech for good',
    author: '@jamescrowley'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: origin-when-cross-origin',
            "Content-Security-Policy: default-src \'self\'",
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: 'appvCzFGTRWLehiI9',
            tableName: 'Actions',
            tableView: 'PublishedWithOrgs',
            mapping: { "OrganisationLogo": 'fileNode' },
            tableLinks: ['Organisations']
          },
          {
            baseId: 'appvCzFGTRWLehiI9',
            tableName: 'Causes',
            tableView: 'Published',
            mapping: { "Image": 'fileNode' },
            tableLinks: ['Actions']
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        defautQuality: 75,
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
  ],
}
