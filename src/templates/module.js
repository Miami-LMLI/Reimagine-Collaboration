import {graphql} from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * The class that represents the template for a module page.
 */
class ModuleTemplate extends React.Component {
  /**
   * Returns the module page content that is supposed to be rendered
   * by a user's browser inside a Layout component.
   * @return {*} The a module page content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const module = get(this.props, 'data.contentfulModule');

    return (
      <Layout title={module.title}
        description={module.description.description}
        location={this.props.location}>
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

// Defines the propTypes of Module.
ModuleTemplate.propTypes = {
  location: PropTypes.any,
};

export default ModuleTemplate;

// Performs a GraphQL query to get all
// module page's content based on the page's slug.
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
