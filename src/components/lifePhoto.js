import React from "react"

export const LifePhoto = ({ image, alt, description }) => {
  return (
    <div className="photo">
      <img src={image} alt={alt} />
    </div>
  )
}
