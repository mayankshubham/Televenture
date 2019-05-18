import React from "react";
import HomeTagLine from "./HomeTagLine";
import PortFolio from "./PortFolio";
import TeamImage from "./TeamImage";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeTagLine />
      <PortFolio />
      <TeamImage />
    </div>
  );
};

Home.displayName = "HomeSection";
export default Home;
