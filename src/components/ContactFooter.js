import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styles from './contactFooter.module.scss'
import Menu from './Menu'
import ContactForm from './ContactForm'

const ContactFooter = () => {
  const data = useStaticQuery(graphql`
    query ContactFooter {
      contentfulContact {
        email
        phone
      }
    }
  `)

  console.log(data)

  const { email, phone } = data.contentfulContact
  console.log(email, phone)
  return (
    <div className={styles.contactContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <Link to="/">Televenture</Link>
        </div>
        <div className={styles.contentBox}>
          <Menu className={styles.menu} />
          <div className={styles.contactDetails}>
            <div className={styles.title}>Contact Us:</div>
            <div className={styles.details}>
              <div className={styles.label}>
                <span>Email:</span>
                <a
                  href={`mailto:${email}`}
                  target="_self"
                  data-content={email}
                  data-type="mail"
                >
                  {email}
                </a>
              </div>
              <div className={styles.label}>
                <span>Telephone:</span>
                <a
                  href={`tel:${phone}`}
                  target="_self"
                  data-content={phone}
                  data-type="phone"
                >
                  {phone}
                </a>
              </div>
            </div>
            <div className={styles.title}>Making Venture Happen</div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.title}>Contact Form:</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

ContactFooter.displayName = 'ContactFooter'
export default ContactFooter
