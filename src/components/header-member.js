// Sets up React stuff.
import PropTypes from 'prop-types';
import React from 'react';

// Sets up stuff for header images.
import Img from 'gatsby-image';
import Image from 'react-bootstrap/Image';

// Brings in stuff needed for css.
import {Animated} from 'react-animated-css';
import styles from '../css/header-member.module.css';

/**
 * The class that represents the header component.
 */
class Header extends React.Component {
  /**
   * Returns the headere content that is supposed to be rendered by a
   * user's browser.
   * @return {*} The content of the header component that is rendered
   * by a browser
   */
  render() {
    const {image, alt, applyGradient} = this.props;

    return (
      <div className={styles.hero}>
        <div className={
          applyGradient && styles.heroGradient || styles.heroSolid
        }>
            <Animated animationIn="fadeIn" animationOut="fadeOut">
              <Img className={styles.heroImageGradient}
                alt={alt}
                fluid={image} />
            </Animated>
        </div>
      </div>
    );
  }
}

// Defines the propTypes of Header.
Header.propTypes = {
  applyGradient: PropTypes.any,
  bgImage: PropTypes.any,
  image: PropTypes.any,
  text: PropTypes.any,
};

export default Header;
