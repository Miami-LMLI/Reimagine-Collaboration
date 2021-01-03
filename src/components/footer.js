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
import styles from './footer.module.css';

/**
 * The class that represents the module preview component.
 */
class Footer extends React.Component {
  /**
   * Returns the module preview component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The module preview component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const {data} = this.props;

    return (
      <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.icon}>
            <a aria-label="Facebook"
              href={data.site.siteMetadata.social.facebook}>
              <FontAwesomeIcon icon={faFacebook} /></a>
          </li>
          <li className={styles.icon}>
            <a aria-label="Twitter"
              href={data.site.siteMetadata.social.twitter}>
              <FontAwesomeIcon icon={faTwitter} /></a>
          </li>
          <li className={styles.icon}>
            <a aria-label="Instagram"
              href={data.site.siteMetadata.social.instagram}>
              <FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          <li className={styles.icon}>
            <a aria-label="Youtube"
              href={data.site.siteMetadata.social.youtube}>
              <FontAwesomeIcon icon={faYoutube} /></a>
          </li>
          <li className={styles.icon}>
            <a aria-label="LinkedIn"
              href={data.site.siteMetadata.social.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} /></a>
          </li>
          <li className={styles.icon}>
            <a aria-label="Lockheed Martin Leadership Institute"
              href={data.site.siteMetadata.social.website}>
              <FontAwesomeIcon icon={faGlobe} /></a>
          </li>
        </ul>
      </nav>
    );
  }
}

/**
 * Performs a static query and feeds that into the Footer component.
 * @param {*} props The properties of the Footer component.
 * @return {*} The footer component content with the results from
 * the static query.
 */
export default function MyFooter(props) {
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
      render={(data) => <Footer data={data} {...props} />}
    />
  );
}

Footer.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        social: PropTypes.shape({
          facebook: PropTypes.string.isRequired,
          twitter: PropTypes.string.isRequired,
          instagram: PropTypes.string.isRequired,
          linkedin: PropTypes.string.isRequired,
          youtube: PropTypes.string.isRequired,
          website: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
