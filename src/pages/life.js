import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { LifePhoto } from "../components/lifePhoto"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { PortableText } from "@portabletext/react"
import { Seo } from "../components/seo"

const LifeAtGrace = ({
  data: {
    allSanityLife: { edges },
  },
}) => {
  const dialogRef = useRef()
  const [imageData, setImageData] = useState({})

  const onclick = (image) => {
    console.log("showing image...")
    setImageData(image)
    dialogRef.current.showModal()
  }

  return (
    <>
      <div className="content life-content">
        <PortableText value={edges[0].node._rawBody} />
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 500: 2, 750: 3, 1000: 4 }}
        >
          <Masonry gutter="10px">
            {edges[0].node.gallery.images.map((p) => {
              return (
                <LifePhoto
                  image={p.asset.gatsbyImageData}
                  alt={p.alt}
                  onclick={() =>
                    onclick({ image: p.asset.gatsbyImageData, alt: p.alt })
                  }
                />
              )
            })}
            {edges[0].node.gallery.images.map((p) => {
              return (
                <LifePhoto
                  image={p.asset.gatsbyImageData}
                  alt={p.alt}
                  onclick={() =>
                    onclick({ image: p.asset.gatsbyImageData, alt: p.alt })
                  }
                />
              )
            })}
            {edges[0].node.gallery.images.map((p) => {
              return (
                <LifePhoto
                  image={p.asset.gatsbyImageData}
                  alt={p.alt}
                  onclick={() =>
                    onclick({ image: p.asset.gatsbyImageData, alt: p.alt })
                  }
                />
              )
            })}
            {edges[0].node.gallery.images.map((p) => {
              return (
                <LifePhoto
                  image={p.asset.gatsbyImageData}
                  alt={p.alt}
                  onclick={() =>
                    onclick({ image: p.asset.gatsbyImageData, alt: p.alt })
                  }
                />
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
        <dialog id="imageDialog" ref={dialogRef}>
          <div className="dialogPhoto">
            <GatsbyImage
              image={imageData.image}
              alt={imageData.alt}
              className="image"
              objectFit="contain"
              style={{ maxHeight: "75vh" }}
            />
            <div className="desc">{imageData.alt}</div>
            <button id="close" onClick={() => dialogRef.current.close()}>
              X
            </button>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default LifeAtGrace

export const pageQuery = graphql`
  query LifeAtGraceQuery {
    allSanityLife {
      edges {
        node {
          _rawBody
          gallery {
            images {
              alt
              asset {
                gatsbyImageData(layout: CONSTRAINED, fit: CLIP, width: 1000)
              }
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Life at Grace" />
