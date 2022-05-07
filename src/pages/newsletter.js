import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const Newsletter = ({
  data: {
    markdownRemark: { frontmatter },
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
              data={frontmatter.newsletter}
              type="application/pdf"
              width="800"
              height="600"
            >
              <p>
                This month's Newsletter - Download{" "}
                <a href={frontmatter.newsletter}>here</a>
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
    markdownRemark(frontmatter: { path: { eq: "/newsletter" } }) {
      frontmatter {
        newsletter
      }
    }
  }
`
