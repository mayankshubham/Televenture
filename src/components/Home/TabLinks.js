import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Tabs from "../Tabs";
import Tab from "../Tab";
import styles from "./tabLinks.module.scss";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "V_CIRCLE_blue_televenture.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 40) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const iconData = data.desktop.childImageSharp.fluid;
  return (
    <div className={styles.tabLinkContainer}>
      <Tabs>
        <Tab slug={"/Funds/"}>
          <div className={styles.tabContent}>
            <Image tag="div" fluid={iconData} className={styles.iconImage} />
            <div>FUNDS</div>
          </div>
        </Tab>
        <Tab slug={"/about/"}>
          <div className={styles.tabContent}>
            <Image tag="div" fluid={iconData} className={styles.iconImage} />
            <div>ABOUT</div>
          </div>
        </Tab>
        <Tab slug={"/contact/"}>
          <div className={styles.tabContent}>
            <Image tag="div" fluid={iconData} className={styles.iconImage} />
            <div>CONTACT</div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};