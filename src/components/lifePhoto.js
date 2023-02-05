import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const LifePhoto = ({ image, alt, description }) => {
  return (
    <div className="photo">
      <GatsbyImage image={image} alt={alt} />
      <div className="desc">{alt}</div>
    </div>
  )
}
