import React from "react"
import ArrowLeft from "../../icons/arrow-left.svg"
import ArrowRight from "../../icons/arrow-right.svg"
import ButtonArrow from "../../icons/button-arrow.svg"

const HomeContent = ({nxtBtnClk, prvBtnClk}) => (
  <div className="home-content">
    <div className="container">
      <div className="row v-center space-between">
        <div className="home-content-title">
          <h1>Green plaza</h1>
          <h4>жилой комплекс</h4>
          <h5>в 17-м микрорайоне г. Актау</h5>
          <a href="#" className="button bordered">посмотреть квартиры</a>
          <div className="home-carousel-progress">
            <div className="home-carousel-progress-num current">01</div>
            <div className="home-carousel-progress-bar">
              <div className="home-carousel-progress-bar-inner light"></div>
              <div className="home-carousel-progress-bar-inner dark"></div>
            </div>
            <div className="home-carousel-progress-num last">04</div>
          </div>
        </div>
        <div className="home-carousel-arrows">
          <div className="home-carousel-arrow left" onClick={()=>prvBtnClk()}><ArrowLeft/></div>
          <div className="home-carousel-arrow right" onClick={() => nxtBtnClk()}><ArrowRight /></div>
        </div>
        <div className="home-carousel-more">
          <a href="#" className="button arrow-only">смотреть еще<ButtonArrow/></a>
        </div>
      </div>
    </div>
  </div>
)

export default HomeContent
