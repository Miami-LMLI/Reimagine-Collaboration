import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import Container from './container';
import Footer from './footer';
import Navigation from './navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css';

/**
 * [Insert comment here].
 */
class Layout extends React.Component {
  /**
   * [Insert comment here].
   * @return {*}
   */
  render() {
    const {title, description, data, children, location} = this.props;

    return (
      <Container>
        <Helmet>
          <title>{`${title ? title + ' | ' : ''}Envision 2040`}</title>
          <meta name="description" content={description}/>
          <html lang={data.site.siteMetadata.lang} />

          <link rel="canonical" href={location.href} />
          <meta property="og:url" content={location.href} />
          <meta property="og:type" content={data.site.siteMetadata.type} />
          <meta property="og:title" content={`${title ? title + ' | ' : ''}Envision 2040`} />
          <meta property="og:description" content={description} />
          {/* <meta property="og:image" content={ogImg} /> */}
        </Helmet>
        <Navigation location={location}/>
        {children}
        <Footer />
      </Container>
    );
  }
}

/**
 * [Insert comment here].
 * @param {*} props [Insert comment here].
 * @return {*} [Insert comment here].
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

Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        lang: PropTypes.any
      })
    })
  }),
  description: PropTypes.any,
  location: PropTypes.any,
  title: PropTypes.any
}
