import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import CategoryPreview from '../components/category-preview';
import Header from '../components/header';
import Layout from '../components/layout';
import styles from './index.module.css';

/**
 * The class that represents the home page.
 */
class Home extends React.Component {
  /**
   * Returns the homepage content that is supposed to be rendered by a user's
   * browser inside a Layout component.
   * @return {*} The home page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    const headerImg = require('../../static/header-white.svg');
    const categories = get(this.props, 'data.allContentfulCategory.edges');

    return (
      <Layout location={this.props.location}>
        <div className="content">
          <Header image={headerImg} />
          <div className="wrapper">
            <h2 className="section-headline">
              Why wait for the world of tomorrow when it could be the world of
              today?
            </h2>
            <p>
              As a result of a global health crisis, heightened social rights
              tension, and a polarized political environment, the world faces an
              uncertain future. This is where 2040 comes into play. Join us in
              the near future as we take a deep dive into how we can prepare for
              what the next 20 years will bring as we explore the intersections
              of technology, social rights, and what it means to be human.
            </p>
          </div>
        </div>

        <div className="break" />

        <div className="content">
          <div class="wrapper">
            <h2 className="section-headline">
              Start Exploring
            </h2>
            <ul className={styles.list}>
              {categories.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <CategoryPreview category={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout >
    );
  }
}

Home.propTypes = {
  location: PropTypes.any,
};

export default Home;

// Performs a GraphQL query to get the image, description, title, and slug used above.
export const pageQuery = graphql`
  query Home {
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

