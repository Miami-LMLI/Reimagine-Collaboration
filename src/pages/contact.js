import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Layout from '../components/layout';
import Header from '../components/header';
import {StaticQuery, graphql} from 'gatsby';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin}
  from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

/**
 * [Insert comment here].
 */
class Contact extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const {data} = this.props;

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <Header text={"Contact Us"}/>
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
                <a aria-label="Facebook"
                  href={data.site.siteMetadata.social.facebook}>
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
                <br />
                <a aria-label="Twitter"
                  href={data.site.siteMetadata.social.twitter}>
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
                <br />
                <a aria-label="Instagram"
                  href={data.site.siteMetadata.social.instagram}>
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <br />
                <a aria-label="Youtube"
                  href={data.site.siteMetadata.social.youtube}>
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
                <br />
                <a aria-label="LinkedIn"
                  href={data.site.siteMetadata.social.linkedin}>
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </Col>
              <Col lg>
                <h3>Website</h3>
                <a aria-label="Miami University"
                  href={data.site.siteMetadata.social.website}>
                  <FontAwesomeIcon icon={faGlobe} /> Main Website
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
 * [Insert comment here].
 * @param {*} props [Insert comment here].
 * @return {*} [Insert comment here].
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
