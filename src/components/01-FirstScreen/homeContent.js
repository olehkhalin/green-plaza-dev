import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import ArrowLeft from "../../icons/arrow-left.svg"
import ArrowRight from "../../icons/arrow-right.svg"

const HomeContent = ({ nxtBtnClk, prvBtnClk }) => {

  return (
    <div className="home-content">
      <div className="container">
        <div className="row v-center space-between">
          <div className="home-content-title">
            <h1>Green plaza</h1>
            <h4>жилой комплекс</h4>
            <h5>в 17-м микрорайоне г. Актау</h5>
            <button
              className="button bordered"
              onClick={() => scrollTo("#flats")}
            >
              смотреть квартиры
            </button>
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
            <button
              className="home-carousel-arrow left"
              onClick={() => prvBtnClk()}
            >
              <ArrowLeft />
            </button>
            <button
              className="home-carousel-arrow right"
              onClick={() => nxtBtnClk()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
