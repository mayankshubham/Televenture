import React from 'react';
import classnames from 'classnames';
import Background from './TitleHeaderBackground';
import TagLine from './TagLine';
import TabLinks from './TabLinks';
import styles from './homeTagLine.module.scss';

const HomeTagline = () => {
  return (
    <div className={styles.taglineContainer}>
      <Background className={classnames('backgroundImage', styles.tagBackground)}>
        <div className="imageOverlay dark" />
      </Background>
      <TagLine />
      <TabLinks />
    </div>
  );
};

HomeTagline.displayName = 'HomeTagline';
export default HomeTagline;
