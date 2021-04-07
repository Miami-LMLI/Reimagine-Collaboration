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
 * The class that represents the template for a module page.
 */
class ModuleTemplate extends React.Component {
  /**
   * Returns the module page content that is supposed to be rendered
   * by a user's browser inside a Layout component.
   * @return {*} The a module page content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const author = get(this.props, 'data.contentfulMember');
    const tagLine = `Meet ${author.firstName} ${author.lastName}!`

    return (
      <Layout title={author.firstName}
        description={tagLine}
        image={author.ogImg.fluid.src}
        location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Header image={author.portrait.fluid} applyGradient={true}/>
          <div className="wrapper">
            <div className="section-headline">
              <h1>{tagLine}</h1>
            </div>
            <div className="section-headline">
            <Row className={styles.moduleDetails}>
              <Col  md={6}>
              <a href={author.linkedIn}><FontAwesomeIcon icon={faLinkedin} /> Connect with {author.firstName} {author.lastName} on LinkedIn</a>
              </Col>
              <Col md={6}>
                <p>
                  Share on&nbsp;
                    <TwitterShareButton className={styles.icon} url={this.props.location.href}
                    title={tagLine}
                    hashtags={['Envision2040', 'Leadership', 'MiamiOH']}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </TwitterShareButton>&nbsp;
                    <FacebookShareButton className={styles.icon} url={this.props.location.href}
                    quote={tagLine}
                    hashtag={'#Envision2040 #Leadership #MiamiOH'}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </FacebookShareButton>&nbsp;
                    <LinkedinShareButton className={styles.icon} url={this.props.location.href}
                    title={author.title}
                    summary={tagLine}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </LinkedinShareButton>
                </p>
              </Col>
            </Row>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: author.body.childMarkdownRemark.html,
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
