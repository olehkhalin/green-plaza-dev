import React, { useRef } from "react"
import Header from "./header"
import HomeContent from "./homeContent"
import Image from "./image"
import Slider from "react-slick"
import HomePromotion from "./homePromotion"
// import HomeCarousel from "./homeCarousel"

const FirstScreen = () => {
  // const [buttonNextState, setButtonNextState] = useState(false)
  // const [buttonPrevState, setButtonPrevState] = useState(false)
  const slider1 = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
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
        document.querySelector('.slick-cloned[data-index="' + (nextSlide + slideCountZeroBased + 1) + '"]').classList.add('slick-current-clone-animate');
      }
      if (direction === 'left') {
        document.querySelector('.slick-cloned[data-index="' + (nextSlide - slideCountZeroBased - 1) + '"]').classList.add('slick-current-clone-animate');
      }
    },
    afterChange: (currentSlide, nextSlide) => {
      document.querySelector('.slick-current-clone-animate').classList.remove('slick-current-clone-animate');
      // document.querySelector('.slick-current-clone-animate').classList.remove('slick-current-clone-animate');
      // $('.slick-current-clone-animate', $carousel).removeClass('slick-current-clone-animate');
    }
  };

  const nextButtonClicked = () => {
    slider1.current.slickNext();
    // setButtonNextState(true)
    // setTimeout(() => {
    //   setButtonNextState(false)
    // }, 100)
  }

  const prevButtonClicked = () => {
    slider1.current.slickPrev();
    // setButtonPrevState(true)
    // setTimeout(() => {
    //   setButtonPrevState(false)
    // }, 100)
  }

  return (
    <div className="first-screen">
      <Header />
      <HomeContent
        nxtBtnClk={() => nextButtonClicked()}
        prvBtnClk={() => prevButtonClicked()}
      />
      <div className="home-carousel">
        <Slider {...settings} ref={slider => (slider1.current = slider)}>
          <div className="home-carousel-item">
            <div className="home-carousel-item-image">
              <Image/>
            </div>
          </div>
          <div className="home-carousel-item">
            <div className="home-carousel-item-image">
              <Image/>
            </div>
          </div>
          <div className="home-carousel-item">
            <div className="home-carousel-item-image">
              <Image/>
            </div>
          </div>
          <div className="home-carousel-item">
            <div className="home-carousel-item-image">
              <Image/>
            </div>
          </div>
        </Slider>
      </div>
      <HomePromotion/>
    </div>
  )
}

export default FirstScreen
