import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.css"
import Amplify from "aws-amplify"

export default function Layout(props) {
  Amplify.configure(props.awsconfig)
  return (
    <div id="root">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
