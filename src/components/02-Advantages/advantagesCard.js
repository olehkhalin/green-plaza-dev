import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"

import {enableScroll, disableScroll} from "../showHide"

const AdvantagesCard = ({ advantageItem, icon, isFirst = false }) => {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const [shown, setShown] = useState(false)

  const handleClick = () => {
    if (shown) {
      enableScroll();
    } else {
      disableScroll();
    }
    setShown(!shown)
  }

  return (
    <>
      <div className={"advantages-card-wrapper" + (isFirst ? " full" : "")}>
        <div
          className="advantages-card"
          onClick={isTabletOrMobile ? () => handleClick() : null}
          onKeyDown={isTabletOrMobile ? () => handleClick() : null}
          tabIndex={0}
          role="button"
        >
          <div className="advantages-card-inner">
            <div
              className="hidden"
              dangerouslySetInnerHTML={{ __html: advantageItem.list }}
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
      {shown && isTabletOrMobile ? (
        <div
          className="advantages-card-mobile active"
          onClick={() => handleClick()}
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
