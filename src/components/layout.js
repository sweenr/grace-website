import React from "react"
import Header from "./Header"
import Footer from "./Footer"
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
