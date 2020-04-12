import React from "react"
import StephenMinistryLogo from "../images/Stephen_Ministry_Logo_Black.png"

function StephenMinistryTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <div className="content about-content flip-layout">
        <div className="info-block">
          <div>
            <h2>{frontmatter.aboutTitle}</h2>
            <p>{frontmatter.about}</p>
          </div>
          <img src={StephenMinistryLogo} alt="Stephen Ministry Logo" />
        </div>

        <div className="info-block">
          <div>
            <h2 className="section-title">{frontmatter.contactTitle}</h2>
            <p>{frontmatter.contact}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StephenMinistryTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        aboutTitle
        about
        contactTitle
        contact
      }
    }
  }
`
