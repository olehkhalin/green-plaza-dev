import React, { useState } from "react"

import { enableScroll, disableScroll } from "../showHide"

const AdvantagesCard = ({ advantageItem, icon, isFirst = false, listMaxLength }) => {
  const [shown, setShown] = useState(false)

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      if (shown) {
        enableScroll()
      } else {
        disableScroll()
      }
      setShown(!shown)
    }
  }

  return (
    <>
      <div className={"advantages-card-wrapper" + (isFirst ? " full" : "")}>
        <div
          className="advantages-card"
          onClick={() => handleClick()}
          onKeyDown={() => handleClick()}
          tabIndex={0}
          role="button"
        >
          <div className="advantages-card-inner">
            <div
              className="hidden"
              dangerouslySetInnerHTML={{ __html: listMaxLength }}
            ></div>
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
      {shown ? (
        <div
          className="advantages-card-mobile active"
          onClick={() => handleClick()}
          onKeyDown={() => handleClick()}
          tabIndex={0}
          role="button"
        >
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
