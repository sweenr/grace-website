import React from "react"
import { Helmet } from "react-helmet"

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
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
                Phone: <a href="tel:1-228-864-4248">228-864-4248</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:gracelutheran4248@gmail.com">
                  gracelutheran4248@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3>Office Hours</h3>
              <p>
                <a href="tel:1-228-864-4248">Please call ahead</a> to make sure
                someone is in the office before dropping by!
              </p>
              <p>Tuesday 9:00am - 4:30pm</p>
              <p>Wednesday 8:00am - noon</p>
              <p>Thursday 12:30pm - 4:30pm</p>
              <p>Friday 12:30pm - 4:30pm</p>
            </div>
            <div>
              <h3>Pastor Dave Parr</h3>
              <p>Office Hours: Tuesday - Friday 9:00am - noon</p>
              <p>
                Cell Phone: <a href="tel:1-423-620-1284">423-620-1284</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:gracepastordave1@gmail.com">
                  gracepastordave1@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
