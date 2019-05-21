import React from 'react';
import classNames from 'classnames';
import TeleventureIcon from '../TeleventureIcon';
import styles from './index.module.scss';

const WithBackgroundCover = (Background, displayName) => {
  const coverComponent = props => {
    const { content, ...rest } = props;
    return (
      <div className={styles.withBackgroundCover}>
        <Background {...rest} className={classNames('backgroundImage', styles.investorBackground)}>
          <div className="imageOverlay dark" />
          <div className={styles.imageContent}>{content}</div>
        </Background>
        <TeleventureIcon style={{ position: 'absolute' }} className={styles.televentureIcon} />
      </div>
    );
  };
  coverComponent.displayName = displayName;
  return coverComponent;
};

export default WithBackgroundCover;
