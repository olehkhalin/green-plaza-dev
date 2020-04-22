// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import GreenPlazaLogo from "../icons/logo.svg"

// const Header = ({ siteTitle }) => (
const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row v-center space-between">
        <div className="logo">
          <GreenPlazaLogo />
        </div>
        <div className="contacts">
          <a href="#" target="_blank">г. Актау, 17 мкр., д. 6 </a>
          <a href="tel:+77292470001">+7 (7292) 470 001</a>
        </div>
        <div className="nav-toggle">
          <div
            className="hamburger-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
