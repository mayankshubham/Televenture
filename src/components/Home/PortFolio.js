import React from "react";
import BackgroundSection from "../ContactBackgroundSection";
import { useStaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import Image from "gatsby-image";
import styles from "./portFolio.module.scss";

const PortFolio = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     desktop
  //   }
  // `)
  return (
    <div className={styles.portFolioContainer}>
      <BackgroundSection className={"backgroundImage"}>
        <div className={classnames("imageOverlay", "green")} />
      </BackgroundSection>
      <div className={styles.backgroundTriangle} />
      <div className={styles.content}>
        {/* <Image className={styles.logoImage} />
        <div className={styles.textContent}>Televenture</div>
        <Image className={styles.logoIcon} /> */}
      </div>
    </div>
  );
};

export default PortFolio;
