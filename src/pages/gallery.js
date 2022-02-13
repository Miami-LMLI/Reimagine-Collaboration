import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MemberPreview from '../components/member-preview';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * The class that represents the categories page.
 */
class Categories extends React.Component {
  /**
   * Returns the categories page content that is supposed to be rendered by a
   * user's browser inside a Layout component.
   * @return {*} The categories page content that is supposed to be rendered
   * by a browser.
   */
  render() {
    // Gets the GraphQL page query. This gets the images, title, descriptions,
    // and slugs for all categories.
    const categories = get(this.props, 'data.allContentfulMember.edges');

    return (
      <Layout
        title="Gallery"
        location={this.props.location}>

        <div className="content">
          <Header text={'Gallery'} applyGradient={true} />
          <div className="wrapper">
            <h2 className="section-headline">
              Photo Gallery
              </h2>
          </div>
        </div>
        <div className="break" />
        <div className="content">
          <div className="wrapper">

          </div>
        </div>

      </Layout>
    );
  }
}

// Defines the propTypes of Categories.
Categories.propTypes = {
  location: PropTypes.any,
};

export default Categories;

