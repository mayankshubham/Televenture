import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

import HomeSection from '../components/Home'

const Home = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <HomeSection />
        <Footer />
      </Container>
    </Layout>
  )
}

Home.displayName = 'Home'
export default Home
