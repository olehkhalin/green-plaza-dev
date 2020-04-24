import React, { useRef } from "react"

import Slider from "react-slick"
import Image from "../image"

const ComplexContent = () => {
  const slider1 = useRef();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: true,
    beforeChange: (currentSlide, nextSlide) => {
      let
        direction,
        slideCountZeroBased = slider1.current.props.children.length - 1;

      if (nextSlide === currentSlide) {
        direction = "same";
      } else if (Math.abs(nextSlide - currentSlide) === 1) {
        direction = (nextSlide - currentSlide > 0) ? "right" : "left";
      } else {
        direction = (nextSlide - currentSlide > 0) ? "left" : "right";
      }

      if (direction === 'right') {
        document.querySelector('.complex-flats .slick-cloned[data-index="' + (nextSlide + slideCountZeroBased + 1) + '"]').classList.add('slick-current-clone-animate2');
      }
      if (direction === 'left') {
        document.querySelector('.complex-flats .slick-cloned[data-index="' + (nextSlide - slideCountZeroBased - 1) + '"]').classList.add('slick-current-clone-animate2');
      }
    },
    afterChange: () => {
        document.querySelector('.complex-flats .slick-current-clone-animate2').classList.remove('slick-current-clone-animate2');
    }
  };

  return (
    <Slider {...settings} ref={slider => (slider1.current = slider)}>
      <div className="complex-flats-item">
        <div className="complex-flats-item-image">
          <Image/>
          <div className="complex-flats-item-content">
            <h3>3 ком. квартира 117.0м²</h3>
            <a href="#" className="button line">смотреть планировку</a>
          </div>
        </div>
      </div>
      <div className="complex-flats-item">
        <div className="complex-flats-item-image">
          <Image/>
          <div className="complex-flats-item-content">
            <h3>3 ком. квартира 117.0м²</h3>
            <a href="#" className="button line">смотреть планировку</a>
          </div>
        </div>
      </div>
      <div className="complex-flats-item">
        <div className="complex-flats-item-image">
          <Image/>
          <div className="complex-flats-item-promotion">Акция -20%</div>
          <div className="complex-flats-item-content">
            <h3>3 ком. квартира 117.0м²</h3>
            <a href="#" className="button line">смотреть планировку</a>
          </div>
        </div>
      </div>
      <div className="complex-flats-item">
        <div className="complex-flats-item-image">
          <Image/>
          <div className="complex-flats-item-content">
            <h3>3 ком. квартира 117.0м²</h3>
            <a href="#" className="button line">смотреть планировку</a>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default ComplexContent
