import {graphql, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Header from '../components/header';
import Layout from '../components/layout';

/**
 * The class that represents the about page.
 */
class About extends React.Component {
  /**
   * Returns the about page content that is supposed to be rendered by a
   * user's browser inside a Layout component.
   * @return {*} The about page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    const {data} = this.props;

    return (
      <Layout title="About"
        description="Learn more about us!"
        location={this.props.location}>
        <div className="content">
          <Header text={'About'} applyGradient={true}/>
          <div className="wrapper">
            <Row>
              <Col lg>
                <h3>Who Are We?</h3>
                <p>
                The Lockheed Martin Leadership Institute was established to
                address the need for a new kind of transformational leadership
                development for a new kind of world. The rigorous curriculum of
                six classes over three years is designed to challenge the
                students to step out of their comfort zone and think
                strategically, collaborate successfully with others, and
                effectively communicate ideas.
                </p>
                <p>
                The Lockheed Martin Leadership Institute is a 3-year leadership
                development program – we’re continuously looking to learn and
                improve ourselves. Below is a list of some of our favorite
                leadership resources.
                </p>
                <p>
                  To learn more about the leadership institute, check out the
                  Institute&apos;s <a
                    aria-label="Lockheed Martin Leadership Institute's Website"
                    href={data.site.siteMetadata.social.website}
                  >
                    website
                  </a>
                  !
                </p>
              </Col>
              <Col lg>
                <h3>Who is Supporting Us?</h3>
                <p>
                  <i>Envision 2040</i> is made possible by Lockheed Martin and
                  Miami University&apos;s College of Engineering and Computing.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

About.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        social: PropTypes.shape({
          website: PropTypes.any,
        }),
      }),
    }),
  }),
  location: PropTypes.any,
};

/**
 * Performs a static query and feeds that into the About component.
 * @param {*} props The properties of the about page.
 * @return {*} The about page content with the results from the
 * static query.
 */
export default function MyAbout(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              social {
                website
              }
            }
          }
        }
      `}
      render={(data) => <About data={data} {...props} />}
    />
  );
}
