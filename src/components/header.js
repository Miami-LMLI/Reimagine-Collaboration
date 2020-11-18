import React from 'react'
import Image from 'react-bootstrap/Image'

import styles from './hero.module.css'

export default ({ image, text }) => (
  <div className={styles.hero}>
    <Image
      className={styles.heroImage}
      src={image} fluid
    />
    {/* <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p>{text}</p>
    </div> */}
  </div>
)
