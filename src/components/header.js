// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import GreenPlazaLogo from "../icons/logo.svg"
import Hamburger from "./00-Menu/hamburger"

// const Header = ({ siteTitle }) => (
const Header = () => {

  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  })
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y || currPos.y > -50

      const shouldBeStyle = {
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        transform: isVisible
          ? "none"
          : `translate(0, -${
            document.querySelector(".header").offsetHeight
          }px)`,
      }

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuClass: "",
  })

  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuClass: "close",
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuClass: "",
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuClass: "close",
      })
    }
  }

  const disableMenu = () => {
    document.querySelector('html').classList.toggle('lock-scroll');
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)

  }

  return (
    <header className="header" style={{ ...headerStyle }}>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <GreenPlazaLogo />
          </div>
          <div className="contacts">
            <a href="#" target="_blank">
              г. Актау, 17 мкр., д. 6{" "}
            </a>
            <a href="tel:+77292470001">+7 (7292) 470 001</a>
          </div>
          <div className="left-side">
            <div className="langs">
              <a href="#" className="langs-item active">
                Ru
              </a>
              <span>|</span>
              <a href="#" className="langs-item">
                Kz
              </a>
            </div>
            <div className="nav-toggle">
              <button disabled={disabled} className={"hamburger-menu " + state.menuClass} onClick={() => handleMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} clicked={handleMenu} />
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
