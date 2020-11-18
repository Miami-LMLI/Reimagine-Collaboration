import React from 'react'
import { Link } from 'gatsby'

import styles from './navigation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.icon}><a href="https://www.facebook.com/cecleadership/"><FontAwesomeIcon icon={faFacebook} /></a></li>
      <li className={styles.icon}><a href="https://twitter.com/MUEngLdrInst"><FontAwesomeIcon icon={faTwitter} /></a></li>
      <li className={styles.icon}><a href="https://www.instagram.com/muleadershipinstitute/"><FontAwesomeIcon icon={faInstagram} /></a></li>
      <li className={styles.icon}><a href="https://www.youtube.com/channel/UCF9Pze8Ma2RiYjRupxNC_dQ"><FontAwesomeIcon icon={faYoutube} /></a></li>
      <li className={styles.icon}><a href="https://miamioh.edu/cec/about/centers-institutes/lockheed-martin/index.html"><FontAwesomeIcon icon={faGlobe} /></a></li>
    </ul>
  </nav>
);

export default Footer;