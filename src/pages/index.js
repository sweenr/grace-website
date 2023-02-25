import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

const Home = ({
  data: {
    allSanityHome: { edges },
  },
}) => (
  <>
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
          <PortableText value={edges[0].node._rawAbout} />
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
          <h2>{edges[0].node.newsHeadline}</h2>
          <PortableText value={edges[0].node._rawNewsBody} />
        </div>
      </div>
      <div className="info-block">
        <h2>Worship Times</h2>
        <table className="table-striped">
          <tbody>
            {edges[0].node.worshipTimes.map(({ label, time }) => {
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
    allSanityHome {
      edges {
        node {
          _rawNewsBody
          worshipTimes {
            time
            label
          }
          newsHeadline
          _rawAbout
        }
      }
    }
  }
`

export const Head = () => <Layout />
