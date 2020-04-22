import React from "react"
import ArrowLeft from "../icons/arrow-left.svg"
import ArrowRight from "../icons/arrow-right.svg"
import Button from "./Button"

const HomeContent = ({nxtBtnClk, prvBtnClk}) => (
  <div className="home-content">
    <div className="container">
      <div className="row v-center space-between">
        <div className="home-content-title">
          <h1>Green plaza</h1>
          <h4>жилой комплекс</h4>
          <h5>в 17-м микрорайоне г. Актау</h5>
          <Button buttonType="bordered">посмотреть квартиры</Button>
        </div>
        <div className="home-carousel-arrows">
          <div className="home-carousel-arrow left" onClick={()=>prvBtnClk()}><ArrowLeft/></div>
          <div className="home-carousel-arrow right"><ArrowRight onClick={() => nxtBtnClk()}/></div>
        </div>
        <div className="home-carousel-more">
          <Button buttonType="arrow-only">смотреть еще</Button>
        </div>
      </div>
    </div>
  </div>
)

export default HomeContent
