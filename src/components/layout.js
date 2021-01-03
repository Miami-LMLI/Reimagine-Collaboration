import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React from 'react';
import './base.css';
import Container from './container';
import Footer from './footer';
import Navigation from './navigation';
import Metadata from './metadata.js';

/**
 * The class that represents the layout component.
 * This is used to generate the overlay layout of every page
 * on the website.
 */
class Layout extends React.Component {
  /**
   * Returns the layout component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The layout component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const {title, description, children, location} = this.props;

    return (
      <Container>
        <Metadata 
          title={title} 
          description={description} 
          location={location}
        />
        <Navigation location={location} />
        {children}
        <Footer />
      </Container>
    );
  }
}

// Defines the propTypes of Layout.
Layout.propTypes = {
  children: PropTypes.any,
  description: PropTypes.any,
  location: PropTypes.any,
  title: PropTypes.any
}

export default Layout;
