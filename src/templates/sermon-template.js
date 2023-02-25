import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { PortableText } from "@portabletext/react"

const SermonTemplate = ({
  data: {
    sanitySermon: { name, publishDate, videoUrl, _rawBody },
  },
}) => {
  let videoId = ""
  let timestamp = ""
  if (videoUrl) {
    const stripped = videoUrl.substring(videoUrl.lastIndexOf("/") + 1)
    if (stripped.indexOf("?") !== -1 && stripped.indexOf("=") !== -1) {
      videoId = stripped.substring(0, stripped.indexOf("?"))
      timestamp = stripped.substring(stripped.indexOf("=") + 1)
    } else {
      console.warn(`Video URL for '${name}' is missing or malformed`)
    }
  }
  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <article>
        <header>
          <h1>{name}</h1>
          <small>{publishDate}</small>
        </header>
        {videoId && timestamp ? (
          <section className="video">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?start=${timestamp}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <a
              href={`https://youtu.be/${videoId}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Watch full service on YouTube
            </a>
          </section>
        ) : (
          <p style={{ display: "none" }}>Video link missing or malformed</p>
        )}
        <PortableText value={_rawBody} />
      </article>
    </>
  )
}

export default SermonTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    sanitySermon(slug: { current: { eq: $slug } }) {
      _rawBody
      name
      publishDate(formatString: "MMMM DD, YYYY")
      videoUrl
    }
  }
`
