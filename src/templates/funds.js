import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import FundSection from '../components/Funds'

const FundsTemplate = ({ data, pageContext }) => {
  const { slug, pages } = pageContext

  return (
    <Layout>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      <SEO pagePath={slug} />

      <Container>
        <FundSection tabs={pages} />
        <Footer />
      </Container>
    </Layout>
  )
}

export default FundsTemplate
