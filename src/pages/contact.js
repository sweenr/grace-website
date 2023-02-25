import React from "react"
import { graphql } from "gatsby"
import { PortableText } from "@portabletext/react"
import { Seo } from "../components/seo"

const Contact = ({
  data: {
    allSanityContact: { edges },
  },
}) => (
  <>
    <div className="content">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.6218672871605!2d-89.1660045062235!3d30.36169472043424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c3ca225a3355f%3A0xb85cf0e62fc22d12!2sGrace+Lutheran+Church!5e0!3m2!1sen!2sus!4v1482095554365"
            width="600"
            height="450"
            frameborder="0"
            title="Map of Grace Lutheran Church"
            style={{ border: 0 }}
            allowfullscreen
          ></iframe>
        </div>
        <div className="sidebar">
          <div>
            <h3>Address</h3>
            <p>Grace Lutheran Church</p>
            <p>19221 Pineville Rd. </p>
            <p>Long Beach, MS 39560</p>
          </div>
          <div>
            <h3>Church Office</h3>
            <p>
              Phone:{" "}
              <a href={`tel:1-${edges[0].node.officePhone}`}>
                {edges[0].node.officePhone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${edges[0].node.officeEmail}`}>
                {edges[0].node.officeEmail}
              </a>
            </p>
          </div>
          <div>
            <h3>Office Hours</h3>
            <PortableText value={edges[0].node._rawOfficeHours} />
          </div>
          <div>
            <h3>Pastor Dave Parr</h3>
            <PortableText value={edges[0].node._rawPastorHours} />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    allSanityContact {
      edges {
        node {
          _rawOfficeHours
          _rawPastorHours
          officeEmail
          officePhone
        }
      }
    }
  }
`

export const Head = () => <Seo title="Contact" />
