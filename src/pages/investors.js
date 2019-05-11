import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

import InvestorsSection from '../components/Investors'

const Investors = () => {
  const postNode = {
    title: `Investors - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Investors - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="investors" customTitle />
      <Container>
        <InvestorsSection />
        <Footer />
      </Container>
    </Layout>
  )
}

export default Investors
