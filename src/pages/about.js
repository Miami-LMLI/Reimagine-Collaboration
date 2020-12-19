import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * [Insert comment here]
 */
class About extends React.Component {
  /**
   * [Insert comment here]
   * @return {*} [Insert comment here]
   */
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header text={"About"} />
          <div className="wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </Layout>
    );
  }
}

About.propTypes = {
  location: PropTypes.any,
};

export default About;