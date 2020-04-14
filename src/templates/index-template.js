import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

function HomeTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Img
        fluid={data.graceWide.childImageSharp.fluid}
        alt="Front of Grace Lutheran Church"
      />

      <div className="content home-content">
        <div className="home-info">
          <div className="info-block">
            <h2>About Grace Lutheran Church</h2>
            <ReactMarkdown source={frontmatter.about} />
          </div>

          <div className="info-block images">
            <a href="http://elca.org" target="_blank" rel="noopener noreferrer">
              <Img
                fixed={data.elcaLogo.childImageSharp.fixed}
                alt="ELCA Logo"
              />
            </a>
            <a
              href="http://stevenministry.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fixed={data.smLogo.childImageSharp.fixed}
                alt="Stepen Ministry Logo"
              />
            </a>
          </div>

          <div className="info-block">
            <h2>{frontmatter.newsHeadline}</h2>
            <ReactMarkdown source={frontmatter.newsBody} />
          </div>
        </div>

        <div className="info-block">
          <h2>Worship Times</h2>
          <table className="table-striped">
            <tbody>
              <tr>
                <td>Sunday School (All Ages)</td>
                <td>8:45 AM</td>
              </tr>
              <tr>
                <td>Sunday Worship</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Wednesday Holy Communion</td>
                <td>Noon</td>
              </tr>
              <tr>
                <td>Wednesday Evening Service</td>
                <td>7:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default HomeTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        about
        newsHeadline
        newsBody
      }
    }
    graceWide: file(relativePath: { eq: "grace_wide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elcaLogo: file(relativePath: { eq: "ELCA_Logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    smLogo: file(relativePath: { eq: "Stephen_Ministry_Logo_Blue.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
