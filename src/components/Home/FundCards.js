import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import BackgroundImage from "gatsby-background-image";
import TeleventureIconGold from "../TeleventureIconGold";
import Tab from "../Tab";
import styles from "./fundCards.module.scss";

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
  return (
    <div className={styles.fundsDetailContainer}>
      <div className={styles.cardsWrapper}>
        {funds.map(({ node: fund }, index) => {
          console.log({ fund });
          return (
            <div className={styles.card}>
              {fund.background ? (
                <BackgroundImage
                  Tag="div"
                  fluid={fund.background.fluid}
                  className={classnames("backgroundImage", {
                    [styles.cardBackgroundImage]: true
                  })}
                >
                  <div className={classnames("imageOverlay", "dark")} />
                </BackgroundImage>
              ) : (
                <div className={styles.backgroundDiv} />
              )}
              <div className={styles.cardInner}>
                <div className={styles.title}>
                  <TeleventureIconGold className={styles.icon} />
                  <h2 className={styles.label}>{fund.shortName}</h2>
                  <div
                    className={classnames({
                      [styles.fundLabel]: true,
                      [styles.light]: index % 2 == 0
                    })}
                  >
                    FUND
                  </div>
                </div>
                <Tab
                  className={styles.tabButton}
                  slug={`/Funds/${fund.shortName.replace(/\s+/g, "-")}`}
                >
                  Explore {fund.shortName} Funds &gt;&gt;
                </Tab>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FundCards;
