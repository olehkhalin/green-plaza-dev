import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useMediaQuery } from "react-responsive"
import ArrowLeft from "../../icons/arrow-left.svg"
import ArrowRight from "../../icons/arrow-right.svg"
import ButtonArrow from "../../icons/button-arrow.svg"

const HomeContent = ({ nxtBtnClk, prvBtnClk }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

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
          {/*{!isTabletOrMobile ? (*/}
          {/*  <div className="home-carousel-more">*/}
          {/*    <button*/}
          {/*      className="button arrow-only"*/}
          {/*      onClick={() => scrollTo("#flats")}*/}
          {/*    >*/}
          {/*      смотреть еще*/}
          {/*      <ButtonArrow />*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*) : null}*/}
        </div>
      </div>
    </div>
  )
}

export default HomeContent
