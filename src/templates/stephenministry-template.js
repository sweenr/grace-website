import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import StephenMinistryLogo from "../images/Stephen_Ministry_Logo_Black.png"
import { Helmet } from "react-helmet"

function StephenMinistryTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <>
      <Helmet>
        <title>Stephen Ministry</title>
      </Helmet>
      <div className="content about-content flip-layout">
        <div className="info-block">
          <div>
            <h2>{frontmatter.aboutTitle}</h2>
            <ReactMarkdown source={frontmatter.about} />
          </div>
          <img src={StephenMinistryLogo} alt="Stephen Ministry Logo" />
        </div>

        <div className="info-block">
          <div>
            <h2 className="section-title">{frontmatter.contactTitle}</h2>
            <ReactMarkdown source={frontmatter.contact} />
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
