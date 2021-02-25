import {graphql} from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

// Sets up all FontAwesome used in the footer.
import {
  faFacebook,
  faLinkedin,
  faTwitter}
  from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
        <div style={{background: '#fff'}}>
          <Header text={module.title} bgImage={module.heroImage.fluid} />
          <div className="wrapper">
            <div className="section-headline">
            {module.tagLine &&
              <h1>
                {module.tagLine}
              </h1>
            }
            <p>
            Share on&nbsp;
            <TwitterShareButton url={this.props.location.href} 
                                title={module.title} 
                                hashtags={['Envision2040', 'Leadership', 'MiamiOH']}>
              <FontAwesomeIcon icon={faTwitter} />
            </TwitterShareButton>&nbsp;
            <FacebookShareButton url={this.props.location.href}
                                 quote={module.tagLine}
                                 hashtag={'#Envision2040 #Leadership #MiamiOH'}>
              <FontAwesomeIcon icon={faFacebook} />
            </FacebookShareButton>&nbsp;
            <LinkedinShareButton  url={this.props.location.href}
                                  title={module.title}
                                  summary={module.tagLine}>
              <FontAwesomeIcon icon={faLinkedin} />
            </LinkedinShareButton>
            </p>
            <p>
              <i>Time to read: {module.body.childMarkdownRemark.timeToRead} min</i>
            </p>
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
