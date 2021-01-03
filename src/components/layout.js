import 'bootstrap/dist/css/bootstrap.min.css';
import {graphql, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import './base.css';
import Container from './container';
import Footer from './footer';
import Navigation from './navigation';

/**
 * The class that represents the layout component.
 * This is used to generate the overlay layout of every page
 * on the website.
 */
class Layout extends React.Component {
  /**
   * Returns the layout component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The layout component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const {title, description, data, children, location} = this.props;

    return (
      <Container>
        <Helmet>
          <title>{`${title ? title + ' | ' : ''}Envision 2040`}</title>
          <meta name="description" content={description} />
          <html lang={data.site.siteMetadata.lang} />
          <link rel="canonical" href={location.href} />
          <meta property="og:url" content={location.href} />
          <meta property="og:type" content={data.site.siteMetadata.type} />
          <meta property="og:title"
            content={`${title ? title + ' | ' : ''}Envision 2040`}
          />
          <meta property="og:description" content={description} />
        </Helmet>
        <Navigation location={location} />
        {children}
        <Footer />
      </Container>
    );
  }
}

/**
 * Performs a static query and feeds that into the Layout component.
 * @param {*} props The properties of the layout component.
 * @return {*} The layout component content with the results from
 * the static query.
 */
export default function MyLayout(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              lang
              type
            }
          }
        }
      `}
      render={(data) => <Layout data={data} {...props} />}
    />
  );
}

// Defines the propTypes of Layout.
Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        lang: PropTypes.any,
        type: PropTypes.any,
      }),
    }),
  }),
  description: PropTypes.any,
  location: PropTypes.shape({
    href: PropTypes.any,
  }),
  title: PropTypes.string,
};
