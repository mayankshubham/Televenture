import React from 'react'
import { StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({
  className,
  children,
  query,
  tag = 'section',
  backgroundColor = '#040e18',
}) => {
  console.log(query)
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "Televenture-69.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        console.log(data)
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag={tag}
            className={className}
            fluid={imageData}
            backgroundColor={backgroundColor}
          >
            {children}
          </BackgroundImage>
        )
      }}
    />
  )
}

export default BackgroundSection
