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
      <Link to={`/${category.slug}`} className={styles.preview}>
        <Img alt="" fluid={category.heroImage.fluid} />
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
