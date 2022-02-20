import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header-member';
import Layout from '../components/layout';
import { Col, Row } from 'react-bootstrap';

// Imports the share buttons for social media sharing the module.
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

// Sets up the fontawesome for the share buttons.
import {
  faFacebook,
  faLinkedin,
  faTwitter
}
from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brings in stuff needed for css.
import styles from '../css/member.module.css';

/**
 * The class that represents the template for a member page.
 */
class ModuleTemplate extends React.Component {
  /**
   * Returns the member page content that is supposed to be rendered
   * by a user's browser inside a Layout component.
   * @return {*} The a module page content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const member = get(this.props, 'data.contentfulMember');
    const tagLine = `Meet ${member.firstName} ${member.lastName}!`

    return (
      <Layout title={member.firstName}
        description={tagLine}
        image={member.ogImg.fluid.src}
        location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Header image={member.portrait.fluid} applyGradient={true}/>
          <div className="wrapper">
            <div className="section-headline">
              <h1>{tagLine}</h1>
            </div>
            <div className="section-headline">
            <Row className={styles.moduleDetails}>
              <Col  md={6}>
              <a href={member.linkedIn}><FontAwesomeIcon icon={faLinkedin} /> Connect with {member.firstName} {member.lastName} on LinkedIn</a>
              </Col>
              <Col md={6}>
                <p>
                  Share on&nbsp;
                    <TwitterShareButton className={styles.icon} url={this.props.location.href}
                    title={tagLine}
                    hashtags={['ReimagineCollaboration', 'Leadership', 'MiamiOH']}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </TwitterShareButton>&nbsp;
                    <FacebookShareButton className={styles.icon} url={this.props.location.href}
                    quote={tagLine}
                    hashtag={'#ReimagineCollaboration #Leadership #MiamiOH'}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </FacebookShareButton>&nbsp;
                    <LinkedinShareButton className={styles.icon} url={this.props.location.href}
                    title={member.title}
                    summary={tagLine}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </LinkedinShareButton>
                </p>
              </Col>
            </Row>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: member.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

// Defines the propTypes of Module.
ModuleTemplate.propTypes = {
  location: PropTypes.any,
};

export default ModuleTemplate;

// Performs a GraphQL query to get all
// module page's content based on the page's slug.
export const pageQuery = graphql`
  query MemberBySlug($slug: String!) {
    contentfulMember(slug: { eq: $slug }) {
      firstName
      lastName
      linkedIn
      portrait {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
          src
        }
      }
      ogImg {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
          src
        }
      }
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;
