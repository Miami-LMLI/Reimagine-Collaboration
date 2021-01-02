import PropTypes from 'prop-types';
import React from 'react';
import { Animated } from 'react-animated-css';
import Image from 'react-bootstrap/Image';
import Img from 'gatsby-image';

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
    const { fluid, image, text, colorNum } = this.props;

    return (
      <div className={
        // If a color num is defined, pick a specific gradient color.
        // The color num should be based on the sortOrder of the category.
        colorNum == 1 ? styles.heroGradientColorBlue : {} &&
        colorNum == 2 ? styles.heroGradientColorPurple : {} &&
        colorNum == 3 ? styles.heroGradientColorOrange : {} &&
        styles.heroGradient
      }>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          {image != null && fluid == null &&
            <Image className={styles.heroImage}
              alt={text}
              src={image} fluid />
          }
          {image == null && fluid != null &&
            <Img className={styles.heroImageGradient}
              alt={text}
              fluid={fluid} />
          }
          {text != null && <h1 className={styles.heroText}>{text}</h1>}
        </Animated>
      </div>
    );
  }
}

Header.propTypes = {
  image: PropTypes.any,
  text: PropTypes.any,
};

export default Header;
