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
    siteUrl: 'https://envision2040.digital',
    title: 'Envision 2040',
    description: '',
    lang: 'en',
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
  pathPrefix: '/Envision-2040',
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
};
