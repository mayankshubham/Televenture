import React from 'react'
import Background from './BackgroundSection'
import styles from './index.module.scss'

const Investors = () => {
  return (
    <div className={styles.aboutContainer}>
      <Background content="ABOUT" />
    </div>
  )
}

Investors.displayName = 'InvestorsSection'
export default Investors
