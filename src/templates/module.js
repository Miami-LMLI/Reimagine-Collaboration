import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import styles from '../components/hero.module.css';

/**
 * [Insert comment here].
 */
class ModuleTemplate extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const module = get(this.props, 'data.contentfulModule');

    return (
      <Layout title={module.title} description={module.description} location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Img
            className={styles.heroImage}
            alt={module.title}
            fluid={module.heroImage.fluid}
          />
          <div className="wrapper">
            <h1 className="section-headline">
              {module.category.title} - {module.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: module.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

ModuleTemplate.propTypes = {
  location: PropTypes.any,
};

export default ModuleTemplate;

export const pageQuery = graphql`
  query ModuleBySlug($slug: String!) {
    contentfulModule(slug: { eq: $slug }) {
      title
      category {
        title
      }
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
