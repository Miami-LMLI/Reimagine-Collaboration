// Setups React stuff.
import PropTypes from 'prop-types';
import React from 'react';

// Sets up GraphQL to retrieve all Contentful categories.
import {graphql, StaticQuery} from 'gatsby';

// Brings in Gatsby component for hyperlinks.
import {Link} from 'gatsby';

// Brings in Bootstrap components for navigation.
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

/**
 * The class that represents the navigation component.
 */
class Navigation extends React.Component {
  /**
   * Returns the navigation component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The navigation component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const {data, location} = this.props;

    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent " variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={location.pathname}>
            <Nav.Link eventKey="/" as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="mx-auto" activeKey={location.pathname}>
            {data.allContentfulCategory.edges.map(({node}) => {
              return (
                <Nav.Link
                  eventKey={`/${node.slug}`}
                  key={node.slug}
                  as={Link}
                  to={`/${node.slug}`}>
                  {node.title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ml-auto" activeKey={location.pathname}>
            <NavDropdown title="More" id="nav-dropdown">
              <Nav.Link eventKey="/about" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey="/contact" as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

/**
 * Performs a static query and feeds that into the Navigation component.
 * @param {*} props The properties of the Navigation component.
 * @return {*} The Navigation component content with the results from
 * the static query.
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

// Defines the propTypes of Navigation.
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
