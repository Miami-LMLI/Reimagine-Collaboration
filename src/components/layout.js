import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import Container from './container';
import Navigation from './navigation';
import Footer from './footer';
import PropTypes from 'prop-types';

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
    const {data, children, location} = this.props;

    return (
      <Container>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description"
            content={data.site.siteMetadata.description}
          />
          <html lang={data.site.siteMetadata.lang} />
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
              title
              description
              lang
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
        description: PropTypes.any,
        title: PropTypes.any,
      }),
    }),
  }),
  location: PropTypes.any,
};
