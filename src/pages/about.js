import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
        <StaticImage
          src="../images/luther_rose.png"
          alt="Grace Logo"
          className="img-circle img-responsive"
          layout="fixed"
          placeholder="blurred"
          width={250}
        />
      </div>
      <div className="info-block">
        <div>
          <h2>{edges[0].node.messageTitle}</h2>
          <PortableText value={edges[0].node._rawMessage} />
        </div>
        <StaticImage
          src="../images/pastordave.jpg"
          alt="Pastor Dave Parr"
          className="img-circle img-responsive"
          layout="fixed"
          placeholder="blurred"
          width={250}
        />
      </div>
      <div className="info-block">
        <div>
          <h2>{edges[0].node.believeTitle}</h2>
          <PortableText value={edges[0].node._rawBelieve} />
        </div>
        <StaticImage
          src="../images/grace_front_cross_square.jpg"
          alt="Grace Church Cross"
          className="img-circle img-responsive"
          layout="fixed"
          placeholder="blurred"
          width={250}
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
        }
      }
    }
  }
`
