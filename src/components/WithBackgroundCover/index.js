import React from 'react'
import TeleventureIcon from './TeleventureIcon'
import styles from './index.module.scss'
import classNames from 'classnames'

const WithBackgroundCover = (Background, displayName) => {
  const component = props => {
    const { content, ...rest } = props
    return (
      <div className={styles.withBackgroundCover}>
        <Background
          {...rest}
          className={classNames('backgroundImage', styles.investorBackground)}
        >
          <div className={'imageOverlay dark'} />
          <div className={styles.imageContent}>{content}</div>
        </Background>
        <TeleventureIcon
          style={{ position: 'absolute' }}
          className={styles.televentureIcon}
        />
      </div>
    )
  }
  component.displayName = displayName
  return component
}

export default WithBackgroundCover
