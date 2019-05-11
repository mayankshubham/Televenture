import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './contactSection.module.scss'
import ContactBackgroundSection from './ContactBackgroundSection'

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query ContactSection {
      contentfulContact {
        address
        email
        phone
        orgNr
      }
    }
  `)

  const scrollToContactForm = () => {
    console.log('scrolling to bottom')
  }

  const { contentfulContact } = data
  return (
    <div className={styles.contactSection}>
      <ContactBackgroundSection className={'backgroundImage'}>
        <div className={'imageOverlay hovereffect'} />
      </ContactBackgroundSection>
      <div className={styles.card}>
        <div className={styles.header}>{'CONTACT'}</div>
        <div className={styles.info}>{'TELEVENTURE MANAGEMENT AS'}</div>
        <div>
          <div className={styles.listItem}>
            <a
              href="https://www.google.no/search?q=televenture+capital+as+address&amp;stick=H4sIAAAAAAAAAOPgE-LWT9c3LMkpyzNOztCSzU620s_JT04syczPgzOsElNSilKLiwEziTQZLgAAAA&amp;ludocid=13011333457258383551&amp;sa=X&amp;ved=2ahUKEwiFifqPlsreAhUCWCwKHZzdBG4Q6BMwEnoECAQQAw"
              target="_blank"
              data-content="https://www.google.no/search?q=televenture+capital+as+address&amp;stick=H4sIAAAAAAAAAOPgE-LWT9c3LMkpyzNOztCSzU620s_JT04syczPgzOsElNSilKLiwEziTQZLgAAAA&amp;ludocid=13011333457258383551&amp;sa=X&amp;ved=2ahUKEwiFifqPlsreAhUCWCwKHZzdBG4Q6BMwEnoECAQQAw"
              data-type="external"
              rel="undefined"
              className={styles.cardKey}
            >
              {`ADDRESS`}
            </a>
            {`: ${contentfulContact.address}`}
          </div>
          <div className={styles.listItem}>
            <span className={styles.cardKey}>
              {`EMAIL: `}
              <a href={`mailto:${contentfulContact.email}`}>{`${
                contentfulContact.email
              }`}</a>
            </span>
          </div>
          <div className={styles.listItem}>
            <span className={styles.cardKey}>{`TEL: `}</span>
            <a
              href={`tel:${contentfulContact.phone.replace(/\(|\)/g, '')}`}
            >{`${contentfulContact.phone}`}</a>
          </div>
          <div className={styles.listItem}>
            <span className={styles.cardKey}>{`ORG NR: `}</span>
            <span>{`${contentfulContact.orgNr}`}</span>
          </div>
        </div>
        <div className={styles.fillFormInfo} onClick={scrollToContactForm}>
          {'YOU ARE WELCOME TO FILL IN OUR CONTACT FORM BELOW >'}
        </div>
      </div>
    </div>
  )
}

ContactSection.displayName = 'ContactSection'
export default ContactSection
