import React, { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import { EqualHeightElement } from "react-equal-height"

let scrollPosition = 0

const AdvantagesCard = ({ advantageItem, icon, isFirst = false }) => {
  let body = null

  useEffect(() => {
    body = document.querySelector("body")
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  let advToShow = useRef(null)

  const [shown, setShown] = useState(false)

  const handleClick = () => {
    if(shown) {
      document.getElementsByTagName("html")[0].style = ""
      body.style.removeProperty("overflow")
      body.style.removeProperty("position")
      body.style.removeProperty("top")
      body.style.removeProperty("width")
      window.scrollTo(0, scrollPosition)
    } else {
      scrollPosition = window.pageYOffset
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      body.style.overflow = "hidden"
      body.style.position = "fixed"
      body.style.top = `-${scrollPosition}px`
      body.style.width = "100%"
    }
    setShown(!shown)
  }

  return (
    <>
      <div className={"advantages-card-wrapper" + (isFirst ? " full" : "")}>
        <div className="advantages-card" onClick={isTabletOrMobile ? () => handleClick() : null}>
          <div className="advantages-card-inner">
            {/*<EqualHeightElement name="Name">*/}
            <div
              className="hidden"
              dangerouslySetInnerHTML={{ __html: advantageItem.list }}
            ></div>
            {/*</EqualHeightElement>*/}
            <div className="advantages-card-front">
              <div className="advantages-card-icon">{icon}</div>
              <h3 className="advantages-card-header">{advantageItem.title}</h3>
            </div>
            <div
              className="advantages-card-back"
              dangerouslySetInnerHTML={{ __html: advantageItem.list }}
            ></div>
          </div>
        </div>
      </div>
      {shown && isTabletOrMobile ? (
        <div className="advantages-card-mobile active" onClick={() => handleClick()} ref={el => (advToShow = el)}>
          <div
            className="advantages-card-back"
            dangerouslySetInnerHTML={{ __html: advantageItem.list }}
          ></div>
        </div>
      ) : null}
    </>
  )
}

export default AdvantagesCard
