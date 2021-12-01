import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
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
import styles from '../css/module.module.css';
import { Fragment } from 'react';

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
    const module = get(this.props, 'data.contentfulModule');

    return (
      <Layout title={module.title}
        description={module.tagLine}
        image={module.heroImage.fluid.src}
        location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Header text={module.title} bgImage={module.heroImage.fluid} />
          <div className="wrapper">
            <div className="section-headline">
              {module.tagLine &&
                <h1>
                  {module.tagLine}
                </h1>
              }
            </div>
            <div className="section-headline">
              <Row className={styles.moduleDetails}>
                <Col md={4}>
                  <span>By </span>
                  {module.author.map((val, idx) => {
                    return (
                      <Link to={`/cohortx/${val.slug}`}>
                        {val.firstName} {val.lastName}
                        {idx < module.author.length - 1 && <span>, </span>}
                      </Link>
                    );
                  })}
                </Col>
                <Col md={4}>
                  <p>Time to read: {module.body.childMarkdownRemark.timeToRead} min</p>
                </Col>
                <Col md={4}>
                  <p>
                    Share on&nbsp;
                    <TwitterShareButton className={styles.icon} url={this.props.location.href}
                      title={module.title}
                      hashtags={['ReimagineCollaboration', 'Leadership', 'MiamiOH']}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </TwitterShareButton>&nbsp;
                    <FacebookShareButton className={styles.icon} url={this.props.location.href}
                      quote={module.tagLine}
                      hashtag={'#ReimagineCollaboration #Leadership #MiamiOH'}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </FacebookShareButton>&nbsp;
                    <LinkedinShareButton className={styles.icon} url={this.props.location.href}
                      title={module.title}
                      summary={module.tagLine}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </LinkedinShareButton>
                  </p>
                </Col>
              </Row>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: module.body.childMarkdownRemark.html,
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
  query ModuleBySlug($slug: String!) {
    contentfulModule(slug: { eq: $slug }) {
      title
      tagLine
      author {
        firstName
        lastName
        slug
      }
      category {
        title
      }
      heroImage {
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
