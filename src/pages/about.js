import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

const About = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <div className="content about-content flip-layout">
      <div className="info-block">
        <div>
          <h2>{frontmatter.aboutTitle}</h2>
          <ReactMarkdown children={frontmatter.about} />
        </div>
      </div>
      <div className="info-block">
        <div>
          <h2>{frontmatter.missionTitle}</h2>
          <ReactMarkdown children={frontmatter.mission} />
        </div>
        <StaticImage
          src="../images/luther_rose.png"
          alt="Grace Logo"
          className="img-circle img-responsive"
          layout="fixed"
          placeholder="blurred"
          width={250}
        />
      </div>
      <div className="info-block">
        <div>
          <h2>{frontmatter.messageTitle}</h2>
          <ReactMarkdown children={frontmatter.message} />
        </div>
        <StaticImage
          src="../images/pastordave.jpg"
          alt="Pastor Dave Parr"
          className="img-circle img-responsive"
          layout="fixed"
          placeholder="blurred"
          width={250}
        />
      </div>
      <div className="info-block">
        <div>
          <h2>{frontmatter.believeTitle}</h2>
          <ReactMarkdown children={frontmatter.believe} />
        </div>
        <StaticImage
          src="../images/grace_front_cross_square.jpg"
          alt="Grace Church Cross"
          className="img-circle img-responsive"
          layout="fixed"
          placeholder="blurred"
          width={250}
        />
      </div>
    </div>
  </>
)

export default About

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
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
