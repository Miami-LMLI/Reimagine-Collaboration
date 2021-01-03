import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './category-preview.module.css';

/**
 * The class that represents the category preview component.
 */
class CategoryPreview extends React.Component {
  /**
   * Returns the category preview component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The category preview component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const { category } = this.props;

    return (
      <Link to={`/${category.slug}`}>
        <Img alt={category.title}
          className={styles.previewImg}
          fluid={category.heroImage.fluid}
        />
        <h3 className={styles.previewTitle}>
          {category.title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: category.description.childMarkdownRemark.html,
          }}
        />
      </Link>
    );
  }
}

// Defines the propTypes of CategoryPreview.
CategoryPreview.propTypes = {
  category: PropTypes.shape({
    description: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.any,
      }),
    }),
    heroImage: PropTypes.shape({
      fluid: PropTypes.any,
    }),
    slug: PropTypes.any,
    title: PropTypes.any,
  }),
  colorNum: PropTypes.number,
};

export default CategoryPreview;
