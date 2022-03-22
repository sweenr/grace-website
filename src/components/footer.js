import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer>
      <div className="contact">
        <small>Grace Lutheran Church</small>
        <small>19221 Pineville Road</small>
        <small>Long Beach, Mississippi 39560</small>
        <small>
          <a href="tel:1-228-864-4248">228.864.4248</a>
        </small>
        <a
          href="https://facebook.com/glclbms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC_pWyTkUdZ6P6MikKKM4nwA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div>
        <small>&copy; {new Date().getFullYear()} Grace Lutheran Church</small>
      </div>
    </footer>
  )
}

export default Footer
