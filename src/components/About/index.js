import React from 'react'
import Background from './BackgroundSection'
import styles from './index.module.scss'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Background content="ABOUT" />
    </div>
  )
}

About.displayName = 'AboutSection'
export default About
