// Sets up React stuff.
import PropTypes from 'prop-types';
import React from 'react';

// Sets up stuff for header images.
import Img from 'gatsby-image'
import Image from 'react-bootstrap/Image';

// Brings in stuff needed for css.
import { Animated } from 'react-animated-css';
import styles from './hero.module.css';

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
    const { image, bgImage, text, applyGradient } = this.props;

    return (
      <div className={styles.hero}>
        <div className={
          applyGradient && styles.heroGradient || styles.heroSolid
        }>
          {image != null && bgImage == null &&
            <Animated animationIn="fadeIn" animationOut="fadeOut">
              <Image className={styles.heroImage}
                alt={text}
                src={image} fluid />
            </Animated>
          }
          {image == null && bgImage != null &&
            <Img className={styles.heroImageGradient}
              alt={text}
              fluid={bgImage} />
          }
          {text != null &&
            <Animated animationIn="fadeIn" animationOut="fadeOut">
              <h1 className=
                {bgImage != null || image != null ?
                  styles.heroOverlayText : styles.heroText}>
                {text}
              </h1>
            </Animated>
          }
        </div>
      </div>
    );
  }
}

// Defines the propTypes of Header.
Header.propTypes = {
  colorNum: PropTypes.number,
  fluid: PropTypes.any,
  image: PropTypes.any,
  text: PropTypes.any,
};

export default Header;
