import React from 'react'
import Background from './TitleHeaderBackground'
import classnames from 'classnames'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Background className={classnames('backgroundImage dark')}>
        <div className={'imageOverlay'} />
      </Background>
    </div>
  )
}

Home.displayName = 'HomeSection'
export default Home
