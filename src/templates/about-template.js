import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

function AboutTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="content about-content flip-layout">
        <div className="info-block">
          <div>
            <h2>{frontmatter.aboutTitle}</h2>
            <ReactMarkdown source={frontmatter.about} />
          </div>
        </div>
        <div className="info-block">
          <div>
            <h2>{frontmatter.missionTitle}</h2>
            <ReactMarkdown source={frontmatter.mission} />
          </div>
          <Img
            fixed={data.lutherRose.childImageSharp.fixed}
            alt="Grace Logo"
            className="img-circle img-responsive"
          />
        </div>
        <div className="info-block">
          <div>
            <h2>{frontmatter.messageTitle}</h2>
            <ReactMarkdown source={frontmatter.message} />
          </div>
          <Img
            fixed={data.pastorDave.childImageSharp.fixed}
            alt="Pastor Dave Parr"
            className="img-circle img-responsive"
          />
        </div>
        <div className="info-block">
          <div>
            <h2>{frontmatter.believeTitle}</h2>
            <ReactMarkdown source={frontmatter.believe} />
          </div>
          <Img
            fixed={data.churchCross.childImageSharp.fixed}
            alt="Grace Church Cross"
            className="img-circle img-responsive"
          />
        </div>
      </div>
    </>
  )
}

export default AboutTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        aboutTitle
        about
        missionTitle
        mission
        messageTitle
        message
        believeTitle
        believe
      }
    }
    lutherRose: file(relativePath: { eq: "luther_rose.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pastorDave: file(relativePath: { eq: "pastordave.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    churchCross: file(relativePath: { eq: "grace_front_cross_square.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
