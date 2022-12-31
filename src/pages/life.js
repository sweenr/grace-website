import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { LifePhoto } from "../components/lifePhoto"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { PortableText } from "@portabletext/react"

const LifeAtGrace = ({
  data: {
    allSanityLife: { edges },
    allMarkdownRemark: { edges: photos },
  },
}) => (
  <>
    <Helmet>
      <title>Life at Grace</title>
    </Helmet>
    <div className="content life-content">
      <PortableText value={edges[0].node._rawBody} />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3, 1000: 4 }}
      >
        <Masonry gutter="10px">
          {photos.map((p) => {
            return (
              <LifePhoto
                image={p.node.frontmatter.image}
                alt={p.node.frontmatter.alt}
              />
            )
          })}
          {photos.map((p) => {
            return (
              <LifePhoto
                image={p.node.frontmatter.image}
                alt={p.node.frontmatter.alt}
              />
            )
          })}
          {photos.map((p) => {
            return (
              <LifePhoto
                image={p.node.frontmatter.image}
                alt={p.node.frontmatter.alt}
              />
            )
          })}
          {photos.map((p) => {
            return (
              <LifePhoto
                image={p.node.frontmatter.image}
                alt={p.node.frontmatter.alt}
              />
            )
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  </>
)

export default LifeAtGrace

export const pageQuery = graphql`
  query LifeAtGraceQuery {
    allSanityLife {
      edges {
        node {
          _rawBody
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { image: { ne: null } } }) {
      edges {
        node {
          frontmatter {
            alt
            image
          }
          html
        }
      }
    }
  }
`
