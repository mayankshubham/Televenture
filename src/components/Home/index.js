import React from "react";
import HomeTagLine from "./HomeTagLine";
import PortFolio from "./PortFolio";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeTagLine />
      <PortFolio />
    </div>
  );
};

Home.displayName = "HomeSection";
export default Home;
