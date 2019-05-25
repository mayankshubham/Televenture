import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styles from './teamImage.module.scss';

const TeamImage = ({ className, children, style, tag = 'section', backgroundColor = '#040e18' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Televenture-76.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag={tag}
      style={style}
      className={styles.teamImage}
      fluid={imageData}
      backgroundColor={backgroundColor}
    >
      <div className="imageOverlay dark" />
    </BackgroundImage>
  );
};

export default TeamImage;
