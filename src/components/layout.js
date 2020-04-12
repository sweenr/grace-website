import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/main.css"

export default function Layout(props) {
  return (
    <div id="root">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
