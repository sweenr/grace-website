import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const toggleMenu = () => {
    var x = document.getElementById("menuList")
    if (x.className === "menu") {
      x.className += " responsive"
    } else {
      x.className = "menu"
    }
  }

  return (
    <header className="site-header">
      <Link to="/" className="branding">
        <StaticImage
          src={"../images/luther_rose.png"}
          alt="Grace Lutheran Church Logo"
          placeholder="blurred"
          layout="fixed"
          width={100}
        />
        <h1>Grace Lutheran Church</h1>
        <p className="text-uppercase">Long Beach, MS</p>
      </Link>

      <nav className="main-navigation">
        <ul id="menuList" className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/stephenministry">Stephen Ministry</Link>
          </li>
          <li className="menu-item">
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="menu-item">
            <Link to="/sermons">Sermons</Link>
          </li>
          <li className="menu-item">
            <Link to="/newsletter">Newsletter</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="icon">
            <button onClick={toggleMenu}>Toggle Menu</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
