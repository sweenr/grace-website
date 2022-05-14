import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"

const Sermons = ({
  data: {
    allMarkdownRemark: { edges: sermons },
  },
  pageContext: { previousPagePath, nextPagePath },
}) => (
  <>
    <Helmet>
      <title>Sermons</title>
    </Helmet>
    <div className="content sermon-content">
      <div className="info-block">
        <h2>Sermons</h2>
        {sermons.length === 0 ? (
          <p>There are currently no sermons to share.</p>
        ) : (
          ""
        )}
        {sermons.map(({ node }) => {
          return (
            <article className="sermon-listing">
              <a href={`/sermons${node.fields.slug}`}>
                <h3>{node.frontmatter.title}</h3>
              </a>
              <small>{node.frontmatter.date}</small>
              <p>{node.excerpt}</p>
            </article>
          )
        })}
        <div className="page-links">
          {previousPagePath ? (
            <Link to={previousPagePath}>&lt; Previous Page</Link>
          ) : null}
          {nextPagePath ? <Link to={nextPagePath}>Next Page &gt;</Link> : null}
        </div>
      </div>
    </div>
  </>
)

export default Sermons

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templatePath: { eq: "sermon-template.js" } } }
      skip: $skip
      limit: $limit
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
