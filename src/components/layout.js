import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/main.css";

export default ({ children }) => (
  <div id="root">
    <Header />
    {children}
    <Footer />
  </div>
);
