import React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/seo"

const Sermons = ({
  data: {
    allSanitySermon: { edges: sermons },
  },
  pageContext: { previousPagePath, nextPagePath },
}) => (
  <>
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
              <a href={`/sermons/${node.slug.current}`}>
                <h3>{node.name}</h3>
              </a>
              <small>{node.publishDate}</small>
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
    allSanitySermon(sort: { publishDate: DESC }, skip: $skip, limit: $limit) {
      edges {
        node {
          publishDate(formatString: "MMMM DD, YYYY")
          name
          slug {
            current
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Sermons" />
