import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';

/**
 * The class that represents the not found page.
 */
class NotFound extends React.Component {
  /**
   * Returns the not found page content that is supposed to be rendered by a
   * user's browser inside a Layout component.
   * @return {*} The not found page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    return (
      <Layout title="Page Not Found!"
        description="The requested page could not be found"
        location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Header text={'404'} applyGradient={true} />
          <div className="wrapper">
            <h2 className="section-headline">Error 404: Page Not Found!</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

// Defines the propTypes of NotFound.
NotFound.propTypes = {
  location: PropTypes.any,
};

export default NotFound;
