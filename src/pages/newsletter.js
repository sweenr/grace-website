import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const Newsletter = ({
  data: {
    allSanityNewsletter: { edges },
  },
}) => (
  <>
    <Helmet>
      <title>Newsletter</title>
    </Helmet>
    <div className="content">
      <div className="info-block">
        <div>
          <h2>Newsletter</h2>
          <p>
            NOTE: To save a copy of the newsletter, right click on the
            newsletter and click Save or Save As.
          </p>
          <div class="newsletter-container">
            <object
              data={edges[0].node.newsletter.asset.url}
              type="application/pdf"
              width="800"
              height="600"
            >
              <p>
                This month's Newsletter - Download{" "}
                <a href={edges[0].node.newsletter.asset.url}>here</a>
              </p>
            </object>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Newsletter

export const pageQuery = graphql`
  query NewsletterQuery {
    allSanityNewsletter {
      edges {
        node {
          newsletter {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
