import React from "react";
import Background from "./TitleHeaderBackground";
import classnames from "classnames";
import TagLine from "./TagLine";
import TabLinks from "./TabLinks";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Background
        className={classnames("backgroundImage", styles.tagBackground)}
      >
        <div className={"imageOverlay dark"} />
      </Background>
      <TagLine />
      <TabLinks />
    </div>
  );
};

Home.displayName = "HomeSection";
export default Home;
