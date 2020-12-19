import PropTypes from 'prop-types';
import React from 'react';
import Image from 'react-bootstrap/Image';

import styles from './hero.module.css';

/**
 * [Insert comment here].
 */
class Header extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const {image, text} = this.props;

    return (
      <div className={styles.heroGradient}>
        <Image
          className={styles.heroImage}
          src={image} fluid
        />
        {text != null && <h1 className={styles.heroText}>{text}</h1>}
      </div>
    );
  }
}

Header.propTypes = {
  image: PropTypes.any,
};

export default Header;
