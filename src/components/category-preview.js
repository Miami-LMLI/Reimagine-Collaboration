import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './category-preview.module.css';

/**
 * [Insert comment here].
 */
class CategoryPreview extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const {category} = this.props;

    return (
      <Link to={`/${category.slug}`}>
        <div className={
          // If a sortOrder is defined, pick a specific gradient color.
          category.sortOrder == 1 ? styles.previewBackgroundColorBlue : {} && 
          category.sortOrder == 2 ? styles.previewBackgroundColorPurple : {} && 
          category.sortOrder == 3 ? styles.previewBackgroundColorOrange : {}
        }>    
          <Img alt={category.title} className={styles.previewImg} fluid={category.heroImage.fluid} />
        </div>
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

CategoryPreview.propTypes = {
  category: PropTypes.shape({
    description: PropTypes.any,
    heroImage: PropTypes.shape({
      fluid: PropTypes.any,
    }),
    slug: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default CategoryPreview;
