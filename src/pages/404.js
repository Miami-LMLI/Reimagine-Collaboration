import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';

/**
 * [Insert comment here]
 */
class NotFound extends React.Component {
  /**
   * [Insert comment here]
   * @return {*}
   */
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <div className="wrapper">
            <h2 className="section-headline">Error 404: Page not found!</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

NotFound.propTypes = {
  location: PropTypes.any,
};

export default NotFound;
