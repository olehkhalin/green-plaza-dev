import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import { Link } from "gatsby"

import GreenPlazaLogo from "../icons/logo.svg"
import Hamburger from "./00-Menu/hamburger"
import { disableScroll, enableScroll } from "./showHide"

const Header = ({ lang }) => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  })

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuClass: "",
  })

  const [menuClosed, setMenuClosed] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y || currPos.y > -50
      if (state.clicked !== true) {
        setTimeout(
          () => {
            const shouldBeStyle = {
              transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
              transform: isVisible
                ? "none"
                : `translate(0, -${
                    document.querySelector(".header").offsetHeight
                  }px)`,
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle))
              return

            if (menuClosed) {
              setMenuClosed(false)
            }
            setHeaderStyle(shouldBeStyle)
          },
          menuClosed ? 1000 : 0
        )
      }
    },
    [headerStyle, state]
  )

  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuClass: "close",
      })
      disableScroll()
      const shouldBeStyle = {
        transition: `all 200ms ease-in`,
        transform: "none",
        top: "0px",
      }
      setHeaderStyle(shouldBeStyle)
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuClass: "",
      })
      setMenuClosed(true)
      enableScroll()
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuClass: "close",
      })
      disableScroll()
      const shouldBeStyle = {
        transition: `all 200ms ease-in`,
        transform: "none",
        top: "0px",
      }
      setHeaderStyle(shouldBeStyle)
    }
  }

  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  let address = 'г. Актау, 17 мкр., д. 6'
  if(lang === 'kk') {
    address = 'Ақтау, 17 ш., 6-п'
  }

  return (
    <header className="header" style={{ ...headerStyle }}>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <GreenPlazaLogo />
          </div>
          <div className="contacts">
            <a
              href="https://yandex.ru/maps/29575/aktau/?lang=ru&ll=51.137828%2C43.675237&mode=search&oid=30538012683&ol=biz&sll=30.523460%2C50.450458&sspn=0.328217%2C0.136785&text=%D0%B3.%20%D0%90%D0%9A%D0%A2%D0%90%D0%A3%2C%2017%20%D0%9C%D0%9A%D0%A0.%2C%207%20%D0%94%D0%9E%D0%9C%2C%20%D0%96%2F%D0%9A%20%22GREEN%20PLAZA%22%2C%202%20%D0%91%D0%90%D0%A8%D0%9D%D0%AF%2C%201%20%D0%AD%D0%A2%D0%90%D0%96&z=17"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
            <a href="tel:+77292470001">+7 (7292) 470 001</a>
          </div>
          <div className="left-side">
            <div className="langs">
              <Link
                to="/"
                className={"langs-item " + (lang !== "kk" ? "active" : "")}
              >
                Ru
              </Link>
              <span>|</span>
              <Link
                to={"/kk"}
                className={"langs-item " + (lang === "kk" ? "active" : "")}
              >
                Kz
              </Link>
            </div>
            <div className="nav-toggle">
              <button
                disabled={disabled}
                className={"hamburger-menu " + state.menuClass}
                onClick={() => handleMenu()}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} clicked={handleMenu} lang={lang} />
    </header>
  )
}

export default Header
