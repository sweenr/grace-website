import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Outreach = ({
  data: {
    markdownRemark: { html },
  },
}) => (
  <>
    <Helmet>
      <title>Outreach</title>
    </Helmet>
    <div className="content">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </>
)

export default Outreach

export const pageQuery = graphql`
  query OutreachQuery {
    markdownRemark(frontmatter: { path: { eq: "/outreach" } }) {
      html
    }
  }
`
