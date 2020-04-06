import React from "react";

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
          href="http://facebook.com/glclbms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div>
        <small>&copy; Grace Lutheran Church {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}

export default Footer;
