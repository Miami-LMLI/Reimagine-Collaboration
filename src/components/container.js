import PropTypes from 'prop-types';
import React from 'react';

/**
 * [Insert comment here].
 */
class Container extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const {children} = this.props;

    return (
      <div style={{maxWidth: 1180, margin: '0 auto'}}>{children}</div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
