import React, { useRef, useState } from "react"

import Slider from "react-slick"
import Image from "../image"
import { TabPanel } from "react-tabs"
import ArrowLeft from "../../icons/arrow-left.svg"
import ArrowRight from "../../icons/arrow-right.svg"
import ComplexItem from "./complexFlatsItem"
import ComplexItemMore from "./complexFlatsItemMore"
import ComplexFlats from "./complexFlats"
import ComplexFlatsFloor from "./complexFlatsFloor"

const complexesArray = [1, 2, 3, 4, 5];

const ComplexContent = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });
  const [disabled, setDisabled] = useState(false)
  const handleComplex = () => {
    disableComplex();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked
      })
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
  });
  const [disabledFlats, setDisabledFlats] = useState(false)
  const handleFlats = () => {
    disableFlats();
    if (stateFlats.initial === false) {
      setStateFlats({
        initial: null,
        clicked: true,
      })
    } else if (stateFlats.clicked === true) {
      setStateFlats({
        clicked: !stateFlats
      })
    } else if (stateFlats.clicked === false) {
      setStateFlats({
        clicked: !stateFlats.clicked
      })
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
    draggable: true,
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
    slider1.current.slickNext();
  }

  const prevButtonClicked = () => {
    slider1.current.slickPrev();
  }

  return (
    <div className="complex-flats-items-wrapper">
      <div className="complex-flats-items-arrows">
        <div className="complex-flats-items-arrow left" onClick={() => prevButtonClicked()}>
          <ArrowLeft />
        </div>
        <div className="complex-flats-items-arrow right" onClick={() => nextButtonClicked()}>
          <ArrowRight />
        </div>
      </div>
      <Slider {...settings} ref={slider => (slider1.current = slider)}>
        { complexesArray.map(el => (
          <ComplexItem clicked={() => handleComplex()}/>
        ))}
      </Slider>
      <div className="button-wrapper">
        <a className="button bordered" onClick={() => handleFlats()}>
          планировка этажа
        </a>
      </div>
      <ComplexItemMore state={state} disabled={disabled} clicked={() => handleComplex()} />
      <ComplexFlatsFloor state={stateFlats} disabled={disabledFlats} clicked={() => handleFlats()} />
    </div>
  )
}

export default ComplexContent
