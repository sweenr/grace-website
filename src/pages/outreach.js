import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { PortableText } from "@portabletext/react"

const Outreach = ({
  data: {
    allSanityOutreach: { edges },
  },
}) => (
  <>
    <Helmet>
      <title>Outreach</title>
    </Helmet>
    <div className="content outreach-content">
      <div className="heading">
        <PortableText value={edges[0].node._rawBody} />
      </div>
      {edges[0].node.ministries.map(({ title, summary }) => {
        return (
          <section className="ministry">
            <h3>{title}</h3>
            <p>{summary}</p>
          </section>
        )
      })}
    </div>
  </>
)

export default Outreach

export const pageQuery = graphql`
  query Outreach {
    allSanityOutreach {
      edges {
        node {
          _rawBody
          ministries {
            title
            summary
          }
        }
      }
    }
  }
`
