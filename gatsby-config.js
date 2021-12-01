require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const {spaceId, accessToken} = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
      'Contentful spaceId and the access token need to be provided.',
  );
}

module.exports = {
  siteMetadata: {
    siteUrl: 'https://reimagine-collaboration.com',
    title: 'Reimagine Collaboration',
    description: 'After the world went virtual, organizations across the globe had to quickly adapt to a new work environment in which there was little to no in-person communication. Cohort X’s Reimagine Collaboration Conference seeks to analyze and interpret this new way of living through the lenses of diversity, equity, and inclusion, tools and technology, and engagement and mindset.',
    lang: 'en',
    locale: 'en_US',
    type: 'website',
    social: {
      facebook: 'https://www.facebook.com/cecleadership',
      twitter: 'https://twitter.com/MUEngLdrInst',
      youtube: 'https://www.youtube.com/channel/UCF9Pze8Ma2RiYjRupxNC_dQ',
      instagram: 'https://www.instagram.com/muleadershipinstitute/',
      linkedin: 'https://www.linkedin.com/groups/4276871/',
      website: 'https://miamioh.edu/cec/about/centers-institutes/lockheed-martin/index.html',
    },
  },
  pathPrefix: '/Reimagine-Collaboration',
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-194668804-1',
        ],
      },
    },
  ],
};
