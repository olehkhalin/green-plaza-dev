import React from "react"
import Button from "./Button"

const TourCard = ({ tourItem }) => (
  <div className="tour-card-wrapper">
    <div className="tour-card">
      <div className="tour-card-icon">
        <div className="tour-card-title">{tourItem.title}</div>
        <img src={tourItem.icon} alt="" />
      </div>
      <Button buttonType="arrow" targetType="blank" link="https://google.com">
        смотреть тур
      </Button>
      {/*<h3 className="advantages-card-header">{tourItem.title}</h3>*/}
    </div>
  </div>
)

export default TourCard
