import React from 'react';
import classNames from 'classnames';
import Image from 'gatsby-image';
import styles from './teamMemberDetail.module.scss';

const colors = [
  {
    backgroundColor: '#d2a756',
    color: '#EEF3F6',
  },
  {
    backgroundColor: '#b4cad6',
    color: '#40667C',
  },
  {
    backgroundColor: '#ffffff',
    color: '#BC9B5D',
  },
  {
    backgroundColor: '#72a0ba',
    color: '#F9F9F9',
  },
];

const TeamMemberDetail = props => {
  const { name, designation, selfDescription, heroImage, index } = props;
  const colorData = colors[index % 4];
  return (
    <div
      className={classNames(styles.teamMemberContainer, {
        [styles.left]: index % 2 === 0,
        [styles.right]: index % 2 === 1,
      })}
    >
      <div
        style={{
          backgroundColor: colorData.backgroundColor,
          position: 'relative',
        }}
      >
        <Image tag="div" fluid={heroImage.fluid} className={styles.image} />
        <div className={styles.iconContainer} />
        <div className={styles.description}>
          <div className={styles.header}>
            <h6 className={styles.name}>{name}</h6>
            <h6 style={{ color: colorData.color }} className={styles.designation}>
              {designation}
            </h6>
          </div>
          <p className={styles.info}>{selfDescription.selfDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
