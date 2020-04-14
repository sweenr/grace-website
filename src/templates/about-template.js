import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import GraceLogo from "../images/luther_rose.png"
import PastorDave from "../images/pastordave.jpg"
import GraceFrontCross from "../images/grace_front_cross_square.jpg"
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
          <img
            className="img-circle img-responsive"
            src={GraceLogo}
            alt="Grace Logo"
          />
        </div>
        <div className="info-block">
          <div>
            <h2>{frontmatter.messageTitle}</h2>
            <ReactMarkdown source={frontmatter.message} />
          </div>
          <img
            className="img-circle img-responsive"
            src={PastorDave}
            alt="Pastor Dave Parr"
          />
        </div>
        <div className="info-block">
          <div>
            <h2>{frontmatter.believeTitle}</h2>
            <ReactMarkdown source={frontmatter.believe} />
          </div>
          <img
            className="img-circle img-responsive"
            src={GraceFrontCross}
            alt="Grace Church Cross"
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
  }
`
