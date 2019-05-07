import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

  return (
    <div style={{ position: 'absolute', top: '100px' }}>
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

ContactSection.displayName = 'ContactSection'
export default ContactSection
