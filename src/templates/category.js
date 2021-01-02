import PropTypes from 'prop-types';
import React from 'react';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/layout';
import Header from '../components/header';
import ModulePreview from '../components/module-preview';
import Img from 'gatsby-image';
import styles from '../components/hero.module.css';

/**
 * [Insert comment here].
 */
class CategoryTemplate extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const category = get(this.props, 'data.contentfulCategory');
    const modules = get(this.props, 'data.allContentfulModule.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header text={category.title} fluid={category.heroImage.fluid} colorNum={category.sortOrder}/>
          <div className="wrapper">
          {category.tagline && <h2 className="section-headline">{category.tagline}</h2>}
            <div
              dangerouslySetInnerHTML={{
                __html: category.body.childMarkdownRemark.html,
              }}
            />
            <ul className="list">
              {modules.map(({node}) => {
                return (
                  <li key={node.slug}>
                    <ModulePreview module={node} />
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

CategoryTemplate.propTypes = {
  location: PropTypes.any,
};

export default CategoryTemplate;

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
            fluid(maxWidth: 1400, maxHeight: 684, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          category {
            slug
          }
        }
      }
    }
  }
`;
