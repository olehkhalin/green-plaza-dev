import React, { useEffect, useRef } from "react"
import Slider from "react-slick"
import Header from "../header"
import HomeContent from "./homeContent"
import HomePromotion from "./homePromotion"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FirstScreen = ({lang}) => {
  const data = useStaticQuery(graphql`
    query {
      mainScreenJson {
        promotion {
          enable
        }
        images {
          alt
          image {
            id
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const slider1 = useRef()

  const time = 3
  let isPause
  let timer
  let percentTime
  let progressBar
  let progressBarCurrent
  let progressBarAll
  let allSlidesCount

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    beforeChange: (currentSlide, nextSlide) => {
      let direction,
        slideCountZeroBased = slider1.current.props.children.length - 1

      if (nextSlide === currentSlide) {
        direction = "same"
      } else if (Math.abs(nextSlide - currentSlide) === 1) {
        direction = nextSlide - currentSlide > 0 ? "right" : "left"
      } else {
        direction = nextSlide - currentSlide > 0 ? "left" : "right"
      }

      progressBarCurrent = document.querySelector(
        ".home-carousel-progress-num.current"
      )
      if (progressBarCurrent) {
        progressBarCurrent.innerText = nextSlide+1 < 10 ? `0${nextSlide+1}` : nextSlide+1;
        startProgressbar()
      }

      if (direction === "right") {
        document
          .querySelector(
            '.slick-cloned[data-index="' +
              (nextSlide + slideCountZeroBased + 1) +
              '"]'
          )
          .classList.add("slick-current-clone-animate")
      }
      if (direction === "left") {
        document
          .querySelector(
            '.slick-cloned[data-index="' +
              (nextSlide - slideCountZeroBased - 1) +
              '"]'
          )
          .classList.add("slick-current-clone-animate")
      }
    },
    afterChange: (currentSlide, nextSlide) => {
      document
        .querySelector(".slick-current-clone-animate")
        .classList.remove("slick-current-clone-animate")
    },
  }

  const nextButtonClicked = () => {
    slider1.current.slickNext()
  }

  const prevButtonClicked = () => {
    slider1.current.slickPrev()
  }

  useEffect(() => {
    progressBar = document.querySelector(
      ".home-carousel-progress-bar-inner.dark"
    )

    progressBarAll = document.querySelector(".home-carousel-progress-num.last")
    allSlidesCount = slider1.current.props.children.length
    if(progressBarAll) {
      progressBarAll.innerText =
        allSlidesCount < 10 ? `0${allSlidesCount}` : allSlidesCount
    }

    progressBarCurrent = document.querySelector(
      ".home-carousel-progress-num.current"
    )

    startProgressbar()
  }, [])

  const startProgressbar = () => {
    resetProgressbar()
    percentTime = 0
    isPause = false
    timer = setInterval(interval, 10)
  }

  const interval = () => {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1)

      progressBar = document.querySelector(
        ".home-carousel-progress-bar-inner.dark"
      )
      if(progressBar)
        progressBar.style.height = `${percentTime}%`
      if (percentTime >= 100) {
        slider1.current.slickNext()
        startProgressbar()
      }
    }
  }

  const resetProgressbar = () => {
    progressBar = document.querySelector(
      ".home-carousel-progress-bar-inner.dark"
    )
    if(progressBar) {
      progressBar.style.height = `0%`
    }
    clearTimeout(timer)
  }

  return (
    <div className="first-screen">
      <Header lang={lang} />
      <HomeContent
        nxtBtnClk={() => nextButtonClicked()}
        prvBtnClk={() => prevButtonClicked()}
      />
      <div
        className="home-carousel"
      >
        <Slider {...settings} ref={slider => (slider1.current = slider)}>
          {data.mainScreenJson.images.map(image => (
            <div className="home-carousel-item" key={image.image.id}>
              <div className="home-carousel-item-image">
                <Img
                  fluid={image.image.childImageSharp.fluid}
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <HomePromotion />
    </div>
  )
}

export default FirstScreen
