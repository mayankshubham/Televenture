import React from 'react'
import Background from './BackgroundSection'
import styles from './index.module.scss'

const Investors = () => {
  return (
    <div className={styles.investorsContainer}>
      <Background content="INVESTORS" />
    </div>
  )
}

Investors.displayName = 'InvestorsSection'
export default Investors
