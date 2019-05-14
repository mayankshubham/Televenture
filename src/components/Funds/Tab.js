import React from 'react'
import { Link } from 'gatsby'
import styles from './tab.module.scss'

const Tab = ({ slug, children }) => {
  return (
    <div className={styles.tabPill}>
      <Link className={styles.tabLink} to={slug}>
        {children}
      </Link>
    </div>
  )
}
Tab.displayName = 'Tab'
export default Tab
