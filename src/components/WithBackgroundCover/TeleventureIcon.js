import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const TeleventureIcon = ({
  className,
  children,
  style,
  tag = 'section',
}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "V_CIRCLE_televenture.webp" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
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
    >
      {children}
    </BackgroundImage>
  )
}

export default TeleventureIcon
