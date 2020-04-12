import React from "react"

function Newsletter({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <>
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
                  June Newsletter - Download{" "}
                  <a href={frontmatter.newsletter}>here</a>
                </p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        newsletter
      }
    }
  }
`