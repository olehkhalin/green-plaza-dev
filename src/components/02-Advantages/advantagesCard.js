import React, { useState } from "react"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
// import { EqualHeightElement } from "react-equal-height"

const AdvantagesCard = ({ advantageItem, icon, isFirst = false }) => {
  const [shown, setShown] = useState(false)

  const handleClick = () => {
    setShown(!shown)
    document.querySelector('html').classList.toggle('lock-scroll');
  }

  return (
    <>
      <div className={"advantages-card-wrapper" + (isFirst ? " full" : "")}>
        <div className="advantages-card" onClick={() => handleClick()}>
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
      {shown && isMobile ? (
        <div className="advantages-card-mobile active" onClick={() => handleClick()}>
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
