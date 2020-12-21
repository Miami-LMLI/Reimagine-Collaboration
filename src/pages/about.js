import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Layout from '../components/layout';
import Header from '../components/header';
import { StaticQuery, graphql } from 'gatsby';

/**
 * [Insert comment here].
 */
class About extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const { data } = this.props;

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Header text={"About"} />
          <div className="wrapper">
          <Row>
            <Col lg>
            <h3>Who Are We?</h3>
            <p>We are Miami University's Lockheed Martin Leadership Institute!
              The Lockheed Martin Leadership is a three year intensive cohort certification program that
              focuses on Transformational Leadership for Students in Miami University's College of Engineering
              and Computing. The purpose of the Lockheed Martin Leadership Institute is simple, yet
              powerful: to cultivate leaders who will flourish in their professions and lives by:
              thinking strategically; working collaboratively with others; effectively communicating
              their ideas; finding innovative solutions to society's most complex problems.</p>
              <p>To learn more about the leadership institute, check out the Institute's <a aria-label="Lockheed Martin Leadership Institute's Website" href={data.site.siteMetadata.social.website}>website</a>!</p>
            </Col>
            <Col lg>
            <h3>Who is Supporting Us?</h3>
            <p><i>Envision 2040</i> is made possible by Lockheed Martin and Miami University's College of Engineering and Computing.</p>
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
 * [Insert comment here].
 * @param {*} props [Insert comment here].
 * @return {*} [Insert comment here].
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
