import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import Header from "../header"
import HomeContent from "./homeContent"
import HomePromotion from "./homePromotion"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { orderBy } from "lodash"
import moment from "moment"

const FirstScreen = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query {
      directusHome {
        is_promotion
        photos {
          id
          title
          uploaded_on
          localFile {
            childImageSharp {
              fluid(maxHeight: 560) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const isPromotion = data.directusHome.is_promotion
  const imagesArr = orderBy(
    data.directusHome.photos,
    // eslint-disable-next-line
    [object => new moment(object.uploaded_on)],
    ["desc"]
  )

  const slider1 = useRef()
  // const progressBar = useRef()

  const time = 3
  // let isPause
  let timer
  let percentTime
  // let progressBar
  // let progressBarCurrent
  // let progressBarAll
  // let allSlidesCount

  // const [progress, setProgress] = useState(0)

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
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

      // progressBarCurrent = document.querySelector(
      //   ".home-carousel-progress-num.current"
      // )
      // if (progressBarCurrent) {
      //   progressBarCurrent.innerText = nextSlide+1 < 10 ? `0${nextSlide+1}` : nextSlide+1;
      //   startProgressbar()
      // }
      setCurrentSlide(nextSlide + 1 < 10 ? `0${nextSlide + 1}` : nextSlide + 1)
      // startProgressbar()

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
    afterChange: () => {
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

  // const startProgressbar = () => {
  //   resetProgressbar()
  //   percentTime = 0
  // //   isPause = false
  //   timer = setInterval(interval, 10)
  // }
  // //
  // const interval = () => {
  // //   if (isPause === false) {
  //   if (percentTime <= 100) {
  //     percentTime += 1 / (time + 0.1)
  //     setProgress(percentTime)
  //   }
  //     // if (percentTime >= 100) {
  // //       slider1.current.slickNext()
  // //       startProgressbar()
  // //     }
  // //   }
  // }
  // //
  // const resetProgressbar = () => {
  //   setProgress(0)
  //   clearTimeout(timer)
  // }

  const [currentSlide, setCurrentSlide] = useState("01")
  const [allSLides, setAllSLides] = useState("00")

  useEffect(() => {
    // progressBar = document.querySelector(
    //   ".home-carousel-progress-bar-inner.dark"
    // )
    // progressBarAll = document.querySelector(".home-carousel-progress-num.last")

    const allSlidesCount = slider1.current.props.children.length
    setAllSLides(allSlidesCount < 10 ? `0${allSlidesCount}` : allSlidesCount)

    // if(progressBarAll) {
    //   progressBarAll.innerText =
    //     allSlidesCount < 10 ? `0${allSlidesCount}` : allSlidesCount
    // }
    //
    // progressBarCurrent = document.querySelector(
    //   ".home-carousel-progress-num.current"
    // )

    // startProgressbar()
  }, [])

  return (
    <div className="first-screen">
      <Header lang={lang} />
      <HomeContent
        lang={lang}
        currentSlide={currentSlide}
        allSlides={allSLides}
        nxtBtnClk={() => nextButtonClicked()}
        prvBtnClk={() => prevButtonClicked()}
      />

      <div className="home-carousel-progress-wrapper">
        <div className="container">
          <div className="home-carousel-progress">
            <div className="home-carousel-progress-num current">
              {currentSlide}
            </div>
            <div className="home-carousel-progress-bar">
              <div className="home-carousel-progress-bar-inner"></div>
            </div>
            <div className="home-carousel-progress-num last">{allSLides}</div>
          </div>
        </div>
      </div>

      <div className="home-carousel">
        <Slider {...settings} ref={el => (slider1.current = el)}>
          {imagesArr.map(item => (
            <div className="home-carousel-item" key={item.id}>
              <div className="home-carousel-item-image">
                <Img
                  fluid={item.localFile.childImageSharp.fluid}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {isPromotion ? <HomePromotion lang={lang} /> : null}
    </div>
  )
}

export default FirstScreen
