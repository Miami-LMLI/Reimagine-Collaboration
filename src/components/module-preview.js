import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

import styles from './module-preview.module.css';

/**
 * [Insert comment here].
 */
class ModulePreview extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const {module} = this.props;

    return (
      <Link to={`/modules/${module.slug}`}>
        <Img alt="" fluid={module.heroImage.fluid} />
        <h3 className={styles.previewTitle}>
          {module.title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: module.description,
          }}
        />
      </Link >
    );
  }
}

ModulePreview.propTypes = {
  module: PropTypes.shape({
    category: PropTypes.shape({
      slug: PropTypes.any,
    }),
    description: PropTypes.any,
    heroImage: PropTypes.shape({
      fluid: PropTypes.any,
    }),
    slug: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default ModulePreview;
