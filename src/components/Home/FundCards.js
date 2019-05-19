import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import TeleventureIconGold from '../TeleventureIconGold';
import styles from './fundCards.module.scss';

const FundCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFundsDetails(sort: { fields: [shortName] }) {
        edges {
          node {
            shortName
            fullName
            background {
              fluid(quality: 70, maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const funds = data.allContentfulFundsDetails.edges;
  console.log(funds);
  return (
    <div className={styles.fundsDetailContainer}>
      <div className={styles.cardsWrapper}>
        {funds.map(({ node: fund }) => {
          console.log({ fund });
          return (
            <div className={styles.card}>
              {fund.background ? (
                <BackgroundImage
                  Tag="div"
                  fluid={fund.background.fluid}
                  className={classnames(styles.cardBackgroundImage, 'backgroundImage')}
                >
                  <div className={classnames('imageOverlay', 'dark')} />
                </BackgroundImage>
              ) : (
                <div className={styles.backgroundDiv} />
              )}
              <div className={styles.cardInner}>
                <TeleventureIconGold className={styles.icon} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FundCards;
