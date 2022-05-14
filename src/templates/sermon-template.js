import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SermonTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  let videoId = ""
  let timestamp = ""
  if (frontmatter.videoUrl) {
    const stripped = frontmatter.videoUrl.substring(
      frontmatter.videoUrl.lastIndexOf("/") + 1
    )
    if (stripped.indexOf("?") !== -1 && stripped.indexOf("=") !== -1) {
      videoId = stripped.substring(0, stripped.indexOf("?"))
      timestamp = stripped.substring(stripped.indexOf("=") + 1)
    } else {
      console.warn(
        `Video URL for '${frontmatter.title}' is missing or malformed`
      )
    }
  }
  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{frontmatter.title}</h1>
          <small>{frontmatter.date}</small>
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
        <section className="notes" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  )
}

export default SermonTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        videoUrl
      }
    }
  }
`
