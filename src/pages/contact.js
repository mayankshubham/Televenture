import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'
import ContactSection from '../components/ContactSection'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <ContactSection />
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
