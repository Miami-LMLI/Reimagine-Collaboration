import PropTypes from 'prop-types';
import React from 'react';
import Image from 'react-bootstrap/Image';
import {Animated} from 'react-animated-css';

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
    const {image, text} = this.props;

    return (
      <div className={styles.heroGradient}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          {image != null &&
            <Image className={styles.heroImage}
              alt="Envision 2040"
              src={image} fluid />
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
