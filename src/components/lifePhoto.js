import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const LifePhoto = ({ image, alt, onclick }) => {
  return (
    <button className="photo" onClick={onclick}>
      <GatsbyImage image={image} alt={alt} />
      <div className="desc">{alt}</div>
    </button>
  )
}
