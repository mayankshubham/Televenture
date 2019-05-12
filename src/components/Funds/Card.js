import React from 'react'
import styles from './card.module.scss'

const Card = ({ details }) => {
  const { title, founded, sector } = details
  console.log(details)
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.field}>
            <div>
              <span className={styles.heading}>Founded:</span>
              <span className={styles.value}>{founded}</span>
            </div>
            <div>
              <span className={styles.heading}>Sector:</span>
              <span className={styles.value}>{sector}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.displayName = 'Card'
export default Card
