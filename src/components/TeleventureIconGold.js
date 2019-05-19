import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const TeleventureIconGold = ({ className, children, style, tag = 'div' }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Televenture_v_icon_gold.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;
  return <Image Tag={tag} style={style} className={className} fluid={imageData} />;
};

export default TeleventureIconGold;