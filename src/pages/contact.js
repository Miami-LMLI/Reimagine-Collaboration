import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube}
  from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {graphql, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * The class that represents the contact page.
 */
class Contact extends React.Component {
  /**
   * Returns the contact page content that is supposed to be rendered by a
   * user's browser inside a Layout component.
   * @return {*} about contact content that is supposed to be rendered by a
   * browser.
   */
  render() {
    const {data} = this.props;

    return (
      <Layout title="Contact Us" 
              description="Learn how to contact us." 
              location={this.props.location}>
        <div className="content">
          <Header text={'Contact Us'} applyGradient={true}/>
          <div className="wrapper">
            <Row>
              <Col lg>
                <h3>Address</h3>
                <p>
                  College of Engineering &amp; Computing
                  <br />
                  Benton Hall, 205Y
                  <br />
                  510 E High Street
                  <br />
                  Oxford, OH 45056
                </p>
              </Col>
              <Col lg>
                <h3>Louise M. Morman</h3>
                <p>
                  <strong>Executive Director and Instructor</strong>
                  <br />
                  <a href="mailto:mormanlm@miamioh.edu">mormanlm@miamioh.edu</a>
                  <br />
                  (513) 529-0759
                </p>
              </Col>
              <Col lg>
                <h3>Karen Moss</h3>
                <p>
                  <strong>Assistant Director</strong>
                  <br />
                  <a href="mailto:mosskp@miamioh.edu">mosskp@miamioh.edu</a>
                  <br />
                  (513) 529-0342
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg>
                <h3>Social Media</h3>
                <a
                  aria-label="Facebook"
                  href={data.site.siteMetadata.social.facebook}
                >
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
                <br />
                <a
                  aria-label="Twitter"
                  href={data.site.siteMetadata.social.twitter}
                >
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
                <br />
                <a
                  aria-label="Instagram"
                  href={data.site.siteMetadata.social.instagram}
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <br />
                <a
                  aria-label="Youtube"
                  href={data.site.siteMetadata.social.youtube}
                >
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
                <br />
                <a
                  aria-label="LinkedIn"
                  href={data.site.siteMetadata.social.linkedin}
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </Col>
              <Col lg>
                <h3>Website</h3>
                <a
                  aria-label="Lockheed Martin Leadership Institute's Website"
                  href={data.site.siteMetadata.social.website}
                >
                  <FontAwesomeIcon icon={faGlobe} /> Lockheed Martin Leadership
                  Institute&apos;s Website
                </a>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

// Defines the propTypes of Contact.
Contact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        social: PropTypes.shape({
          facebook: PropTypes.any,
          instagram: PropTypes.any,
          linkedin: PropTypes.any,
          twitter: PropTypes.any,
          website: PropTypes.any,
          youtube: PropTypes.any,
        }),
      }),
    }),
  }),
  location: PropTypes.any,
};

/**
 * Performs a static query and feeds that into the Contact component.
 * @param {*} props The properties of the contact page.
 * @return {*} The contact page content with the results from the static query.
 */
export default function MyContact(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              social {
                facebook
                twitter
                instagram
                youtube
                linkedin
                website
              }
            }
          }
        }
      `}
      render={(data) => <Contact data={data} {...props} />}
    />
  );
}
