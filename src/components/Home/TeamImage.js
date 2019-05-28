import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import Plx from 'react-plx';
import { Parallax } from 'react-scroll-parallax';
import styles from './teamImage.module.scss';

const parallaxData = [
  {
    start: 'self',
    duration: '100vh',
    properties: [
      {
        startValue: 0.8,
        endValue: 1.3,
        property: 'scale',
      },
    ],
  },
];

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
    <Parallax y={[-60, 50]} tagOuter="figure" className={styles.teamImageWrapper}>
      <Plx parallaxData={parallaxData}>
        <BackgroundImage
          Tag={tag}
          style={style}
          className={classnames('teamImage', { [styles.teamImage]: true })}
          fluid={imageData}
          backgroundColor={backgroundColor}
        >
          <div className="imageOverlay dark" />
        </BackgroundImage>
      </Plx>
    </Parallax>
  );
};

export default TeamImage;
