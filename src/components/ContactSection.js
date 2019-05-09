import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './contactSection.module.scss'
import BackgroundSection from './BackgroundSection'

const ContactSection = () => {
  // const data = useStaticQuery(graphql`
  //   query ContactSection {
  //     contentfulContact {
  //       address
  //       email
  //       phone
  //       orgNr
  //     }
  //   }
  // `)

  return (
    <div className={styles.contactSection}>
      <BackgroundSection
        className={styles.backgroundImage}
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "Televenture-69.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
      />
      <div className={styles.card} />
    </div>
  )
}

ContactSection.displayName = 'ContactSection'
export default ContactSection
