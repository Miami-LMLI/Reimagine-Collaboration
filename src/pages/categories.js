import {graphql} from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
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
   * @return {*} The categories page content that is supposed to be rendered
   * by a browser.
   */
  render() {
    // Gets the GraphQL page query. This gets the images, title, descriptions,
    // and slugs for all categories.
    const categories = get(this.props, 'data.allContentfulCategory.edges');

    return (
      <Layout title="Categories" location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header text={'Categories'} />
          <div className="wrapper">
            <Row>
              {categories.map(({node}) => {
                return (
                  <Col key={node.slug} md={4}>
                    <CategoryPreview category={node}
                      colorNum={node.sortOrder}
                    />
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

// Defines the propTypes of Categories.
Categories.propTypes = {
  location: PropTypes.any,
};

export default Categories;

// Performs a GraphQL query to get the image, description, title,
// and slug used above.
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
          sortOrder
        }
      }
    }
  }
`;
