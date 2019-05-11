import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({
  className,
  children,
  style,
  tag = 'section',
  backgroundColor = '#040e18',
}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "televenture_gre_small.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 170) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag={tag}
      style={style}
      className={className}
      fluid={imageData}
      backgroundColor={backgroundColor}
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
