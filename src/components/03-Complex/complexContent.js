import React, { useEffect, useRef, useState } from "react"

import Slider from "react-slick"
import ArrowLeft from "../../icons/arrow-left.svg"
import ArrowRight from "../../icons/arrow-right.svg"
import ComplexItem from "./complexFlatsItem"
import ComplexItemMore from "./complexFlatsItemMore"
import ComplexFlatsFloor from "./complexFlatsFloor"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import { orderBy } from "lodash"

let scrollPosition = 0

const ComplexContent = ({ complex }) => {
  const data = useStaticQuery(graphql`
    query {
      directusFlats911141617 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats101519 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats1213 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats18 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats20 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
        }
      }
    }
  `)

  let cplxArray, flatsArr

  if (complex === `9, 11, 14, 16, 17`) {
    cplxArray = data.directusFlats911141617
  } else if (complex === `10, 15, 19`) {
    cplxArray = data.directusFlats101519
  } else if (complex === `12, 13`) {
    cplxArray = data.directusFlats1213
  } else if (complex === `18`) {
    cplxArray = data.directusFlats18
  } else if (complex === `20`) {
    cplxArray = data.directusFlats20
  }
  flatsArr = orderBy(
    cplxArray.flats,
    // eslint-disable-next-line
    [object => new moment(object.sort)],
    ["asc"]
  )

  let body = null

  useEffect(() => {
    body = document.querySelector("body")
  })

  const [state, setState] = useState({
    initial: false,
    clicked: null,
  })
  const [currentFlat, setCurrentFlat] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const handleComplex = (flat = null) => {
    disableComplex()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
      setCurrentFlat(flat)
      scrollPosition = window.pageYOffset
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      body.style.overflow = "hidden"
      body.style.position = "fixed"
      body.style.top = `-${scrollPosition}px`
      body.style.width = "100%"
    } else if (state.clicked === true) {
      setState({
        clicked: !state,
      })
      document.getElementsByTagName("html")[0].style = ""
      body.style.removeProperty("overflow")
      body.style.removeProperty("position")
      body.style.removeProperty("top")
      body.style.removeProperty("width")
      window.scrollTo(0, scrollPosition)
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      })
      setCurrentFlat(flat)
      scrollPosition = window.pageYOffset
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      body.style.overflow = "hidden"
      body.style.position = "fixed"
      body.style.top = `-${scrollPosition}px`
      body.style.width = "100%"
    }
  }
  const disableComplex = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  const [stateFlats, setStateFlats] = useState({
    initial: false,
    clicked: null,
  })
  const [disabledFlats, setDisabledFlats] = useState(cplxArray.flats[0])
  const handleFlats = () => {
    disableFlats()
    if (stateFlats.initial === false) {
      setStateFlats({
        initial: null,
        clicked: true,
      })
      scrollPosition = window.pageYOffset
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      body.style.overflow = "hidden"
      body.style.position = "fixed"
      body.style.top = `-${scrollPosition}px`
      body.style.width = "100%"
    } else if (stateFlats.clicked === true) {
      setStateFlats({
        clicked: !stateFlats,
      })
      document.getElementsByTagName("html")[0].style = ""
      body.style.removeProperty("overflow")
      body.style.removeProperty("position")
      body.style.removeProperty("top")
      body.style.removeProperty("width")
      window.scrollTo(0, scrollPosition)
    } else if (stateFlats.clicked === false) {
      setStateFlats({
        clicked: !stateFlats.clicked,
      })
      scrollPosition = window.pageYOffset
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
      body.style.overflow = "hidden"
      body.style.position = "fixed"
      body.style.top = `-${scrollPosition}px`
      body.style.width = "100%"
    }
  }
  const disableFlats = () => {
    setDisabledFlats(!disabledFlats)
    setTimeout(() => {
      setDisabledFlats(false)
    }, 1200)
  }

  const slider1 = useRef()

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    arrows: false,
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

      if (direction === "right") {
        document
          .querySelector(
            '.complex-flats .slick-cloned[data-index="' +
              (nextSlide + slideCountZeroBased + 1) +
              '"]'
          )
          .classList.add("slick-current-clone-animate2")
      }
      if (direction === "left") {
        document
          .querySelector(
            '.complex-flats .slick-cloned[data-index="' +
              (nextSlide - slideCountZeroBased - 1) +
              '"]'
          )
          .classList.add("slick-current-clone-animate2")
      }
    },
    afterChange: () => {
      document
        .querySelector(".complex-flats .slick-current-clone-animate2")
        .classList.remove("slick-current-clone-animate2")
    },
  }

  const nextButtonClicked = () => {
    slider1.current.slickNext()
  }

  const prevButtonClicked = () => {
    slider1.current.slickPrev()
  }

  return (
    <div className="complex-flats-items-wrapper">
      <div className="complex-flats-items-arrows">
        <button
          className="complex-flats-items-arrow left"
          onClick={() => prevButtonClicked()}
        >
          <ArrowLeft />
        </button>
        <button
          className="complex-flats-items-arrow right"
          onClick={() => nextButtonClicked()}
        >
          <ArrowRight />
        </button>
      </div>
      <Slider {...settings} ref={slider => (slider1.current = slider)}>
        {flatsArr.map(flat => (
          <ComplexItem
            key={flat.id}
            flat={flat}
            clicked={() => handleComplex(flat)}
          />
        ))}
      </Slider>
      <div className="button-wrapper">
        <button className="button bordered" onClick={() => handleFlats()}>
          планировка этажа
        </button>
      </div>
      <ComplexItemMore
        state={state}
        disabled={disabled}
        clicked={() => handleComplex()}
        flat={currentFlat}
        building={complex}
      />
      <ComplexFlatsFloor
        state={stateFlats}
        disabled={disabledFlats}
        clicked={() => handleFlats()}
        image={cplxArray.floor_image}
        title={complex}
      />
    </div>
  )
}

export default ComplexContent
