import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MemberPreview from '../components/member-preview';
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
    const categories = get(this.props, 'data.allContentfulMember.edges');

    return (
      <Layout
        title="Cohort IX"
        location={this.props.location}>

        <div className="content">
          <Header text={'Who is Cohort IX?'} applyGradient={true} />
          <div className="wrapper">
            <h2 className="section-headline">
              Meet the Cohort behind Envision 2040!
              </h2>
            <p>
              Envision 2040 was made possible by a dedicate team of students from
              Lockheed Martin Leadership Institute's Cohort IX. Take a moment to learn
                  about them and why they think Envision 2040 matters!</p>
          </div>
        </div>

        <div className="break" />

        <div className="content">
          <div className="wrapper">
            <Row>
              {categories.map(({ node }) => {
                return (
                  <Col key={node.slug} md={4}>
                    <MemberPreview author={node} />
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
  query Members {
    allContentfulMember(sort: {fields: lastName, order: ASC}) {
      edges {
        node {
          portrait {
            fluid(maxWidth: 700, maxHeight: 392, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          firstName
          lastName
          slug
        }
      }
    }
  }
`;
