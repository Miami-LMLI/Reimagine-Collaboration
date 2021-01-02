import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import CategoryPreview from '../components/category-preview';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * The class that represents the categories page.
 */
class Categories extends React.Component {
  /**
   * Returns the categories page content that is supposed to be rendered by a
   * user's browser inside a Layout component.
   * @return {*} The categories page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    // Gets the GraphQL page query. This gets the images, title, descriptions, and slugs
    // for all categories.
    const categories = get(this.props, 'data.allContentfulCategory.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header text={"Categories"} />
          <div className="wrapper">
            <ul className="list">
              {categories.map(({node}) => {
                return (
                  <li key={node.slug}>
                    <CategoryPreview category={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

// Defines the propTypes of Categories.
Categories.propTypes = {
  location: PropTypes.any
}

export default Categories;

// Performs a GraphQL query to get the image, description, title, and slug used above.
export const pageQuery = graphql`
  query Categories {
    allContentfulCategory {
      edges {
        node {
          heroImage {
            fluid(maxWidth: 700, maxHeight: 392, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          title
          slug
        }
      }
    }
  }
`;
