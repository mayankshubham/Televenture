import React from 'react'
import styles from './tabs.module.scss'

const FundsTabs = ({ children }) => {
  return <div className={styles.tabsContainer}>{children}</div>
}

FundsTabs.displayName = 'FundTabs'
export default FundsTabs
