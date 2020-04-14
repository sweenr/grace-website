import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
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
          <Img
            fixed={data.stephenMinistry.childImageSharp.fixed}
            alt="Stephen Ministry Logo"
          />
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
    stephenMinistry: file(
      relativePath: { eq: "Stephen_Ministry_Logo_Black.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
