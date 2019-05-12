import React from 'react'
import classnames from 'classnames'
import Background from './BackgroundSection'
import Tabs from './Tabs'
import TabLink from './Tab'
import styles from './index.module.scss'

const Funds = ({ tabs }) => {
  return (
    <div className={styles.fundsContainer}>
      <Background
        className={classnames('backgroundImage', styles.fundsBackground)}
      >
        <div className={classnames('imageOverlay', 'dark')} />
      </Background>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>FUNDS</div>
        <Tabs>
          {tabs.map(tab => (
            <TabLink key={tab} slug={`/Funds/${tab.replace(/\s+/g, '-')}`}>
              {tab}
            </TabLink>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

Funds.displayName = 'FundsSection'
export default Funds