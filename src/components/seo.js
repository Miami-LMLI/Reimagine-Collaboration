// Setups React stuff.
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';

// Sets up GraphQL to retrieve the metadata for metadata tags.
import {graphql, StaticQuery} from 'gatsby';

// Setups the default image for OpenGraph.
import ogImg from '../assets/images/og-image.png';

/**
 * The class that represents the Metadata component.
 * This is used to generate the overlay Metadata of every page
 * on the website.
 */
class SEO extends React.Component {
  /**
     * Returns the Metadata component's content that is
     * supposed to be rendered by a user's browser inside a Metadata component.
     * @return {*} The Metadata component content that is supposed to
     * be rendered by a browser.
     */
  render() {
    const {title, description, image, data, location} = this.props;

    const metaTitle = title;
    const siteName = data.site.siteMetadata.title;
    const metaDescription = description || data.site.siteMetadata.description;
    const lang = data.site.siteMetadata.lang;
    const metaLocale = data.site.siteMetadata.locale;
    const metaUrl = location.href;
    const metaImage = image || `https://envision2040.com/${ogImg}`;
    const metaType = data.site.siteMetadata.type;

    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={metaTitle ? metaTitle : `${siteName}`}
        titleTemplate={metaTitle ? `%s | ${siteName}` : null}
        meta={[
          {
            property: `og:url`,
            content: metaUrl,
          },
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle ? metaTitle : `${siteName}`,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content: metaImage,
          },
          {
            property: `og:locale`,
            content: metaLocale,
          },
          {
            property: `og:type`,
            content: metaType,
          },
          {
            property: `twitter:image`,
            content: metaImage,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:title`,
            content: metaTitle ? metaTitle : `${siteName}`,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ]}
      />
    );
  }
}

// Defines the propTypes of SEO.
SEO.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.any,
        lang: PropTypes.any,
        locale: PropTypes.any,
        title: PropTypes.any,
        type: PropTypes.any,
      }),
    }),
  }),
  description: PropTypes.any,
  location: PropTypes.shape({
    href: PropTypes.any,
  }),
  title: PropTypes.any,
};

/**
 * Performs a static query and feeds that into the Metadata component.
 * @param {*} props The properties of the Metadata component.
 * @return {*} The Metadata component content with the results from
 * the static query.
 */
export default function MySEO(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              title
              description
              type
              lang
              locale
              type
            }
          }
        }
      `}
      render={(data) => <SEO data={data} {...props} />}
    />
  );
}
