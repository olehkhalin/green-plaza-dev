import React from "react"

import TourCard from "./tourCard"

import RhombusIcon from "../../icons/rhombus.svg"
import { graphql, useStaticQuery } from "gatsby"

const Tour = () => {
  const data = useStaticQuery(graphql`
    query {
      directusTour {
        left_link
        left_title_ru
        right_link
        right_title_ru
      }
    }
  `)

  const leftLink = data.directusTour.left_link;
  const leftTitle = data.directusTour.left_title_ru;
  const rightLink = data.directusTour.right_link;
  const rightTitle = data.directusTour.right_title_ru;

  return (
    <section className="section dark tour">
      <div className="container">
        <div className="row v-center space-between">
          <h2>
            <span className="h2-line">Виртуальный тур</span>
            <span className="h2-line">
              по ЖК <span className="h2-color">GREEN PLAZA</span>
            </span>
          </h2>
        </div>
        <div className="row v-center space-between">
          <div className="tour-wrapper">
            <div className="tour-cards-container">
              {/*{toursArray.map((tourItem, index) => (*/}
              <TourCard
                title={leftTitle}
                link={leftLink}
              />
              <TourCard
                title={rightTitle}
                link={rightLink}
              />
              {/*// ))}*/}
            </div>
            <div className="tour-info">
              <div className="tour-info-icon">
                <RhombusIcon />
              </div>
              <div className="tour-info-content">
                Просто отсканируйте QR-код и перейдите на сайт с виртуальным
                просмотром или нажмите на кнопку
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tour
