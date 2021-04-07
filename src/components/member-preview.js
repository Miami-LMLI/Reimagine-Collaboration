// Sets up React stuff.
import PropTypes from 'prop-types';
import React from 'react';

// Brings stuff in for Gatsby hyperlinks and images.
import {Link} from 'gatsby';
import Img from 'gatsby-image';

// Brings in stuff needed for css.
import styles from '../css/member-preview.module.css';

/**
 * The class that represents the category preview component.
 */
class AuthorPreview extends React.Component {
  /**
   * Returns the category preview component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The category preview component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const {author} = this.props;

    return (
      <Link to={`/cohortix/${author.slug}`}>
        <Img alt={author.firstName}
          className={styles.previewImg}
          fluid={author.portrait.fluid}
        />
        <h3 className={styles.previewTitle}>
          {author.firstName} {author.lastName} 
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: author.description.childMarkdownRemark.html,
          }}
        />
      </Link>
    );
  }
}

export default AuthorPreview;
