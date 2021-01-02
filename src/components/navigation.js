import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './navigation.module.css';

/**
 * [Insert comment here].
 */
class Navigation extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const { data, location } = this.props;

    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent " variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={location.pathname}>
            <Nav.Link eventKey="/" as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav className="mx-auto" activeKey={location.pathname}>
            {data.allContentfulCategory.edges.map(({ node }) => {
              return (
                <Nav.Link eventKey={`/${node.slug}`} as={Link} to={`/${node.slug}`}>
                  {node.title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ml-auto" activeKey={location.pathname}>
            <NavDropdown title="More" id="nav-dropdown">
              <Nav.Link eventKey="/about" as={Link} to="/about">About</Nav.Link>
              <Nav.Link eventKey="/contact" as={Link} to="/contact">Contact Us</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

/**
 * [Insert comment here]
 * @param {*} props [Insert comment here].
 * @return {*} [Insert comment here].
 */
export default function MyNavigation(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulCategory(sort: {fields: sortOrder}) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={(data) => <Navigation data={data} {...props} />}
    />
  );
}

Navigation.propTypes = {
  data: PropTypes.shape({
    allContentfulCategory: PropTypes.shape({
      edges: PropTypes.shape({
        map: PropTypes.func,
      }),
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.any,
  }),
};
