import React from "react";
import Background from "./TitleHeaderBackground";
import classnames from "classnames";
import TagLine from "./TagLine";
import TabLinks from "./TabLinks";
import styles from "./homeTagLine.module.scss";

const HomeTagline = () => {
  return (
    <div className={styles.taglineContainer}>
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

HomeTagline.displayName = "HomeTagline";
export default HomeTagline;
