import PropTypes from 'prop-types';
import React from 'react';

/**
 * The class that represents the container component.
 */
class Container extends React.Component {
  /**
   * Returns the container component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The container component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const {children} = this.props;

    return (
      <div style={{maxWidth: 1180, margin: '0 auto'}}>{children}</div>
    );
  }
}

// Defines the propTypes of Container.
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
