import {graphql} from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Header from '../components/header';
import Layout from '../components/layout';
import ModulePreview from '../components/module-preview';

/**
 * The class that represents the template for a category page.
 */
class CategoryTemplate extends React.Component {
  /**
   * Returns the category page content that is supposed to be rendered
   * by a user's browser inside a Layout component.
   * @return {*} The a category page content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const category = get(this.props, 'data.contentfulCategory');
    const modules = get(this.props, 'data.allContentfulModule.edges');

    return (
      <Layout title={category.title}
        description={category.description.description}
        location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header text={category.title} bgImage={category.heroImage.fluid} />
          <div className="wrapper">
            {category.tagline &&
              <h2 className="section-headline">
                {category.tagline}
              </h2>
            }
            <div
              dangerouslySetInnerHTML={{
                __html: category.body.childMarkdownRemark.html,
              }}
            />
            <Row>
              {modules.map(({node}) => {
                return (
                  <Col key={node.slug} md={6}>
                    <ModulePreview module={node} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

// Defines the propTypes of Category.
CategoryTemplate.propTypes = {
  location: PropTypes.any,
};

export default CategoryTemplate;

// Performs a GraphQL query to get all
// category page's content based on the page's slug.
export const pageQuery = graphql`
  query CategoryBySlug($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      title
      tagline
      heroImage {
        fluid(maxWidth: 1920, maxHeight: 1080, resizingBehavior: SCALE) {
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
      sortOrder
    }
    allContentfulModule(filter: {category: {slug: {eq: $slug}}}, 
                        sort: {fields: title}) {
    edges {
        node {
          title
          slug
          heroImage {
            fluid(maxWidth: 960, maxHeight: 540, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          category {
            sortOrder
          }
        }
      }
    }
  }
`;
