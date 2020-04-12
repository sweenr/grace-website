import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import GraceLogo from "../images/luther_rose.png"
import PastorDave from "../images/pastordave.jpg"
import GraceFrontCross from "../images/grace_front_cross_square.jpg"

function AboutTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <div className="content about-content flip-layout">
        <div className="info-block">
          <div>
            <h2>{frontmatter.aboutTitle}</h2>
            {ReactHtmlParser(frontmatter.about)}
          </div>
        </div>
        <div className="info-block">
          <div>
            <h2>{frontmatter.missionTitle}</h2>
            {ReactHtmlParser(frontmatter.mission)}
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
            {ReactHtmlParser(frontmatter.message)}
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
            {ReactHtmlParser(frontmatter.believe)}
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
      html
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
