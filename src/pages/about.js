import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { PortableText } from "@portabletext/react"

const About = ({
  data: {
    allSanityAbout: { edges },
  },
}) => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <div className="content about-content flip-layout">
      <div className="info-block">
        <div>
          <h2>{edges[0].node.aboutTitle}</h2>
          <PortableText value={edges[0].node._rawAbout} />
        </div>
      </div>
      <div className="info-block">
        <div>
          <h2>{edges[0].node.missionTitle}</h2>
          <PortableText value={edges[0].node._rawMission} />
        </div>
        <GatsbyImage
          image={edges[0].node.missionImage.asset.gatsbyImageData}
          alt={edges[0].node.missionImage.alt}
          objectFit="contain"
          className="img-circle img-responsive"
          style={{ width: "250px" }}
        />
      </div>
      <div className="info-block">
        <div>
          <h2>{edges[0].node.messageTitle}</h2>
          <PortableText value={edges[0].node._rawMessage} />
        </div>
        <GatsbyImage
          image={edges[0].node.messageImage.asset.gatsbyImageData}
          alt={edges[0].node.messageImage.alt}
          objectFit="contain"
          className="img-circle img-responsive"
          style={{ width: "250px" }}
        />
      </div>
      <div className="info-block">
        <div>
          <h2>{edges[0].node.believeTitle}</h2>
          <PortableText value={edges[0].node._rawBelieve} />
        </div>
        <GatsbyImage
          image={edges[0].node.believeImage.asset.gatsbyImageData}
          alt={edges[0].node.believeImage.alt}
          objectFit="contain"
          className="img-circle img-responsive"
          style={{ width: "250px" }}
        />
      </div>
    </div>
  </>
)

export default About

export const pageQuery = graphql`
  query AboutQuery {
    allSanityAbout {
      edges {
        node {
          _rawAbout
          _rawBelieve
          _rawMessage
          _rawMission
          missionTitle
          messageTitle
          believeTitle
          aboutTitle
          missionImage {
            alt
            asset {
              gatsbyImageData(layout: FIXED, width: 250)
            }
          }
          messageImage {
            alt
            asset {
              gatsbyImageData(layout: FIXED, width: 250)
            }
          }
          believeImage {
            alt
            asset {
              gatsbyImageData(layout: FIXED, width: 250)
            }
          }
        }
      }
    }
  }
`
