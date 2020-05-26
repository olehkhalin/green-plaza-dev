import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import ArrowLeft from "../../icons/arrow-left.svg"
import ArrowRight from "../../icons/arrow-right.svg"

const HomeContent = ({ nxtBtnClk, prvBtnClk, lang, currentSlide, allSlides }) => {


  let title2 = `жилой комплекс`
  let title3 = `в 17-м микрорайоне г. Актау`
  let buttonText = `смотреть квартиры`
  if (lang === "kk") {
    title2 = `тұрғын үй кешені`
    title3 = `Ақтау қаласы, 17-ші шағын ауданда орналасқан`
    buttonText = `пәтерлерді қарау`
  }

  return (
    <div className="home-content">
      <div className="container">
        <div className="row v-center space-between">
          <div className="home-content-title">
            <h1>Green plaza</h1>
            <h4>{title2}</h4>
            <h5>{title3}</h5>
            <button
              className="button bordered"
              onClick={() => scrollTo("#flats")}
            >
              {buttonText}
            </button>
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
