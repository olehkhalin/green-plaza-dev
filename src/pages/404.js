import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "../styles/404.sass"

import RhombusIcon from "../icons/rhombus.svg"
import SEO from "../components/seo"

const NotFoundPage = () => {
  function debounce(fn, ms) {
    let timer
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    }
  }

  const [dimensions, setDimensions] = useState({
    height: null,
  })

  useEffect(() => {
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })

  return (
    <>
      <SEO title="404: Not found" />
      <main className="error-page">
        <div className="container">
          <div className="row v-center space-between">
            <div className="error-container">
              <div className="error-icon">
                4{" "}
                <span>
                  <RhombusIcon />
                </span>{" "}
                4
              </div>
              <h1>Страница не найдена</h1>
              <p>
                Извините, мы не можем найти страницу,
                <br />
                которую вы искали
              </p>
              <Link to="/" className="button bordered">
                вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
