import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import FundSection from '../components/Funds';

const FundsTemplate = ({ data, pageContext }) => {
  const { slug, pages } = pageContext;
  const fundDetails = data.allContentfulFunds.edges;

  return (
    <Layout>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      <SEO pagePath={slug} />

      <Container>
        <FundSection tabs={pages} fundDetails={fundDetails} />
        <Footer />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allContentfulFunds(sort: { fields: [order] }, filter: { fundName: { eq: $slug } }) {
      edges {
        node {
          id
          order
          fundName
          title
          founded
          url
          sector
          orgNo
          description {
            description
          }
          img {
            fixed(quality: 60, width: 250, height: 170) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

export default FundsTemplate;
