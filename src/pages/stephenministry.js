import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

const StephenMinistry = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <>
    <Helmet>
      <title>Stephen Ministry</title>
    </Helmet>
    <div className="content about-content flip-layout">
      <div className="info-block">
        <div>
          <h2>{frontmatter.aboutTitle}</h2>
          <ReactMarkdown children={frontmatter.about} />
        </div>
        <StaticImage
          src="../images/Stephen_Ministry_Logo_Black.png"
          alt="Stephen Ministry Logo"
          layout="fixed"
          placeholder="blurred"
          width={200}
        />
      </div>

      <div className="info-block">
        <div>
          <h2 className="section-title">{frontmatter.contactTitle}</h2>
          <ReactMarkdown children={frontmatter.contact} />
        </div>
      </div>
    </div>
  </>
)

export default StephenMinistry

export const pageQuery = graphql`
  query StephenMinistryQuery {
    markdownRemark(frontmatter: { path: { eq: "/stephenministry" } }) {
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
