import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../sass/main.scss"
import Seo from "./seo"

export default function Layout(props) {
  return (
    <div id="root">
      <Seo title="Grace Lutheran Church" />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
