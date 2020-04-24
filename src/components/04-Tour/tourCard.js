import React from "react"
import ButtonArrow from "../../icons/button-arrow.svg"

const TourCard = ({ tourItem }) => (
  <div className="tour-card-wrapper">
    <div className="tour-card">
      <div className="tour-card-icon">
        <div className="tour-card-title">{tourItem.title}</div>
        <img src={tourItem.icon} alt="" />
      </div>
      <a className="button arrow" target="_blank" href="https://google.com">
        смотреть тур
        <ButtonArrow />
      </a>
    </div>
  </div>
)

export default TourCard
