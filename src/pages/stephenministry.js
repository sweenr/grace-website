import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { PortableText } from "@portabletext/react"

const StephenMinistry = ({
  data: {
    allSanityStephenministry: { edges },
  },
}) => (
  <>
    <Helmet>
      <title>Stephen Ministry</title>
    </Helmet>
    <div className="content about-content flip-layout">
      <div className="info-block">
        <div>
          <h2>{edges[0].node.aboutTitle}</h2>
          <PortableText value={edges[0].node._rawAbout} />
        </div>
        <StaticImage
          src="../images/Stephen_Ministry_Logo_Black.png"
          alt="Stephen Ministry Logo"
          layout="fixed"
          placeholder="blurred"
          width={200}
        />
      </div>

      <div className="info-block">
        <div>
          <h2 className="section-title">{edges[0].node.contactTitle}</h2>
          <PortableText value={edges[0].node._rawContact} />
        </div>
      </div>
    </div>
  </>
)

export default StephenMinistry

export const pageQuery = graphql`
  query StephenMinistryQuery {
    allSanityStephenministry {
      edges {
        node {
          _rawAbout
          _rawContact
          aboutTitle
          contactTitle
        }
      }
    }
  }
`
