import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ReactMarkdown from "react-markdown"

const Outreach = ({
  data: {
    markdownRemark: {
      frontmatter: { ministries },
      html,
    },
  },
}) => (
  <>
    <Helmet>
      <title>Outreach</title>
    </Helmet>
    <div className="content outreach-content">
      <div className="heading" dangerouslySetInnerHTML={{ __html: html }} />
      {ministries.map(({ title, summary }) => {
        return (
          <section className="ministry">
            <h3>{title}</h3>
            <ReactMarkdown children={summary} />
          </section>
        )
      })}
    </div>
  </>
)

export default Outreach

export const pageQuery = graphql`
  query Outreach {
    markdownRemark(frontmatter: { path: { eq: "/outreach" } }) {
      frontmatter {
        ministries {
          title
          summary
        }
      }
      html
    }
  }
`
