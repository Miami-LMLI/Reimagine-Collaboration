import {
  faApple,
  faGooglePlay,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryPreview from '../components/category-preview';
import Header from '../components/header';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import AllSpeakers from '../assets/images/AllSpeakers.jpg';

// Brings in stuff needed for css.
import styles from '../css/index.module.css';

import headerImg from '../assets/images/header-white.svg';

/**
 * The class that represents the home page.
 */
class Home extends React.Component {
  /**
   * Returns the homepage content that is supposed to be rendered by a user's
   * browser inside a Layout component.
   * @return {*} The home page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    const categories = get(this.props, 'data.allContentfulCategory.edges');
    const cohort10 = get(this.props, 'data.file.childImageSharp.fluid');

    return (
      <Layout
        description="Join the Lockheed Martin Leadership Institute as we Reimagine Collaboration. As we adapt our ways of working, how we collaborate has to adapt, too."
        location={this.props.location}>
        <div className="content">
          <Header image={headerImg} alt={"Reimagine Collaboration"} applyGradient={true} />
          <div className="wrapper">
            <h2 className="section-headline" style={{ fontSize: "1.75em" }}>
              As we adapt our ways of working, how we collaborate has to adapt, too.
            </h2>
            <Row>
              <Col>
                <p>
                  After the world went virtual, organizations across the globe
                  had to quickly adapt to a new work environment in which there
                  was little to no in-person communication. This transition has
                  reinvented the way we interact with people. Cohort X’s Reimagine
                  Collaboration Conference seeks to analyze and interpret this new
                  way of living through the lenses of diversity, equity, and
                  inclusion; tools and technology; and engagement and mindset.
                  Through your attendance in this conference, you will hear about
                  the research and investments we as a cohort have made, and how we
                  believe that our generation can bring a new and innovative perspective
                  into the ever-changing world of work.
                </p>
                <p>
                  We are excited to see you at <a href="/livestream">our conference</a> on March 11, 2022!
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="break" />
        <div className="content">
          <div className="wrapper">
          <h2 className="section-headline">
            Meet the Speakers of Reimagine Collaboration
          </h2>
            <Row>
              <img src={AllSpeakers} style={{ width: "75%", margin: "auto" }} alt="Reimagine Collaboration Speakers Amy Leschke-Kahle (Vice President of Performance Acceleration at The Marcus Buckingham Company), Bryce Williams (Advisor + Workforce Collaboration at Eli Lily and Company), Jeff Wilcox (Former Vice President of Digital Transformation at Lockheed Martin)" />
            </Row>
          </div>
        </div>
        <div className="break" />

        {/* <div className="content">
          <div className="wrapper">
            <h2 className="section-headline">
              Start Exploring
            </h2>
            <Row>
              {categories.map(({ node }) => {
                return (
                  <Col key={node.slug} md={4}>
                    <CategoryPreview category={node} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>

        <div className="break" /> */}

        <div className="content">
          <div className="wrapper">
            <h2 className="section-headline">
              Meet the Cohort Behind Reimagine Collaboration
            </h2>
            <Row>
              <Col md={6}>
                <Img fluid={cohort10} />
              </Col>
              <Col md={6}>
                <p>
                  Reimagine Collaboration is made possible by a dedicated team of students from
                  Lockheed Martin Leadership Institute's Cohort X. Take a moment to learn
                  about them!</p>
                <p style={{ textAlign: "center" }}><Link to={`/cohortx`}>Meet Cohort X!</Link></p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="break" />

        <div className="content">
          <div className="wrapper">
            <h2 className="section-headline">
              Who We Are
            </h2>
            <p>
              We are Miami University&apos;s Lockheed Martin Leadership
              Institute! The Lockheed Martin Leadership is a three-year
              intensive cohort certification program that focuses on
              Transformational Leadership for students in Miami
              University&apos;s College of Engineering and Computing. The
              purpose of the Lockheed Martin Leadership Institute is simple,
              yet powerful: to cultivate leaders who will flourish in their
              professions and lives by thinking strategically, working
              collaboratively with others, effectively communicating their
              ideas, and finding innovative solutions to society&apos;s most
              complex problems.
            </p>
            <p>
              To learn more about us, you can check out our
              <a href="/about"> about page</a> or our
              <a href="/contact"> contact page</a>.
            </p>
          </div>
        </div>
      </Layout >
    );
  }
}

Home.propTypes = {
  location: PropTypes.any,
};

export default Home;

// Performs a GraphQL query to get the image, description, title, and slug used above.
export const pageQuery = graphql`
  query Home {
    allContentfulCategory(sort: {fields: sortOrder}) {
      edges {
        node {
          title
          slug
          heroImage {
            fluid(maxWidth: 700, maxHeight: 392, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          sortOrder
        }
      }
    }
    file(relativePath: {eq: "images/cohort10.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

