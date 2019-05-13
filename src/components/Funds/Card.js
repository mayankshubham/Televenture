import React from 'react'
import styles from './card.module.scss'

const Card = ({ details }) => {
  const { title, founded, sector, description, orgNo, url } = details
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.field}>
            <div className={styles.founded}>
              <span className={styles.heading}>Founded:</span>
              <span className={styles.value}>{founded}</span>
            </div>
            <div className={styles.sector}>
              <span className={styles.heading}>Sector:</span>
              <span className={styles.value}>{sector}</span>
            </div>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardData}>
            <div className={styles.description}>
              {description.description ? (
                <p>BUSINESS DESCRIPTION: {description.description}</p>
              ) : null}
            </div>
            <div className={styles.cardFooter}>
              <h4>
                <span className={styles.heading}>ORG.NO:</span>
                <span className={styles.orgValue}>{orgNo}</span>
              </h4>
              <h4>
                <span className={styles.heading}>Website:</span>{' '}
                <a href={url}>{url}</a>
              </h4>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

Card.displayName = 'Card'
export default Card
