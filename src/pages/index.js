import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

const Home = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <StaticImage
      src="../images/grace_wide.jpg"
      alt="Front of Grace Lutheran Church"
      placeholder="blurred"
      width={1170}
    />
    <div className="content home-content">
      <div className="home-info">
        <div className="info-block">
          <h2>About Grace Lutheran Church</h2>
          <ReactMarkdown children={frontmatter.about} />
        </div>
        <div className="info-block images">
          <a href="http://elca.org" target="_blank" rel="noopener noreferrer">
            <StaticImage
              src="../images/ELCA_Logo.png"
              alt="ELCA Logo"
              placeholder="blurred"
            />
          </a>
          {/* <a
            href="http://stevenministry.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../images/Stephen_Ministry_Logo_Blue.png"
              alt="Stepen Ministry Logo"
              placeholder="blurred"
            />
          </a> */}
        </div>
        <div className="info-block">
          <h2>{frontmatter.newsHeadline}</h2>
          <ReactMarkdown children={frontmatter.newsBody} />
        </div>
      </div>
      <div className="info-block">
        <h2>Worship Times</h2>
        <table className="table-striped">
          <tbody>
            {frontmatter.worshipTimes.map(({ label, time }) => {
              return (
                <tr>
                  <td>{label}</td>
                  <td>{time}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  </>
)

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      frontmatter {
        path
        title
        about
        newsHeadline
        newsBody
        worshipTimes {
          label
          time
        }
      }
    }
  }
`
