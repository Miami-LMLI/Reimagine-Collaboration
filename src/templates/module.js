import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

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
      <Layout title={module.title} description={module.description.description} location={this.props.location}>
        <div style={{background: '#fff'}}>
        <Header text={module.title} bgImage={module.heroImage.fluid} />
          <div className="wrapper">
            {module.tagLine && 
              <h1 className="section-headline">
                {module.tagLine}
              </h1>
            }
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
      tagLine
      category {
        title
      }
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
