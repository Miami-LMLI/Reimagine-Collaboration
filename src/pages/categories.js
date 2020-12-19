import PropTypes from 'prop-types';
import React from 'react';
import { graphql} from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/layout';
import CategoryPreview from '../components/category-preview';

import styles from '../components/hero.module.css';

/**
 * [Insert comment here].
 */
class Categories extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const categories = get(this.props, 'data.allContentfulCategory.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <h1 className={styles.heroGradient}>Categories</h1>
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

Categories.propTypes = {
  location: PropTypes.any
}

export default Categories;

export const pageQuery = graphql`
  query AllCategories {
    allContentfulCategory {
      edges {
        node {
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
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
