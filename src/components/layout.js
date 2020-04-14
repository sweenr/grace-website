import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/main.css"
import SEO from "./seo"

export default function Layout(props) {
  return (
    <div id="root">
      <SEO title="Grace Lutheran Church" />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
