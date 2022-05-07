import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const Sermons = ({
  data: {
    allMarkdownRemark: { edges: sermons },
  },
}) => (
  <>
    <Helmet>
      <title>Sermons</title>
    </Helmet>
    <div className="content">
      <div className="info-block">
        <h2>Sermons</h2>
        {sermons.length === 0 ? (
          <p>There are currently no sermons to share.</p>
        ) : (
          ""
        )}
        {sermons.map(({ node }) => {
          return (
            <div className="sermon-listing">
              <a href={`/sermons${node.fields.slug}`}>
                <h3>{node.frontmatter.title}</h3>
              </a>
              <small>{node.frontmatter.date}</small>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
      </div>
    </div>
  </>
)

export default Sermons

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templatePath: { eq: "sermon-template.js" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
