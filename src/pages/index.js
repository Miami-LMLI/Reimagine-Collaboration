import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * The class that represents the home page.
 */
class Home extends React.Component {
  /**
   * Returns the homepage content that is supposed to be rendered by a user's
   * browser inside a Layout component.
   * @return {*} The home page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    const headerImg = require('../../static/header-white.svg');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header image={headerImg} />
          <div className="wrapper">
            <h2 className="section-headline">
              Why wait for the world of tomorrow when it could be the world of
              today?
            </h2>
            <p>
              As a result of a global health crisis, heightened social rights
              tension, and a polarized political environment, the world faces an
              uncertain future. This is where 2040 comes into play. Join us in
              the near future as we take a deep dive into how we can prepare for
              what the next 20 years will bring as we explore the intersections
              of technology, social rights, and what it means to be human.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  location: PropTypes.any,
};

export default Home;
