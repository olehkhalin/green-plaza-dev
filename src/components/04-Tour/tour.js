import React from "react"

import TourCard from "./tourCard"

import RhombusIcon from "../../icons/rhombus.svg"
import { graphql, useStaticQuery } from "gatsby"

const Tour = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query {
      directusTour {
        left_link
        left_title_ru
        left_title_kz
        right_link
        right_title_ru
        right_title_kz
      }
    }
  `)

  const leftLink = data.directusTour.left_link
  const rightLink = data.directusTour.right_link
  let leftTitle
  let rightTitle

  let header
  let qrText
  if (lang !== "kk") {
    header = (
      <>
        <span className="h2-line">Виртуальный тур</span>
        <span className="h2-line">
          по ЖК <span className="h2-color">GREEN PLAZA</span>
        </span>
      </>
    )
    qrText = `Просто отсканируйте QR-код и перейдите на сайт с виртуальным просмотром или нажмите на кнопку`
    leftTitle = data.directusTour.left_title_ru
    rightTitle = data.directusTour.right_title_ru
  } else {
    header = (
      <>
        <span className="h2-line">
          <span className="h2-color">GREEN PLAZA</span> ТҮК-не
        </span>
        <span className="h2-line">виртуалды тур</span>
      </>
    )
    qrText = `QR-кодты сканерлеп, виртуалды көрініс сайтына кіріңіз немесе түймені басыңыз`
    leftTitle = data.directusTour.left_title_kz
    rightTitle = data.directusTour.right_title_kz
  }
  return (
    <section className="section dark tour">
      <div className="container">
        <div className="row v-center space-between">
          <h2>{header}</h2>
        </div>
        <div className="row v-center space-between">
          <div className="tour-wrapper">
            <div className="tour-cards-container">
              <TourCard title={leftTitle} link={leftLink} lang={lang} />
              <TourCard title={rightTitle} link={rightLink} lang={lang} />
            </div>
            <div className="tour-info">
              <div className="tour-info-icon">
                <RhombusIcon />
              </div>
              <div className="tour-info-content">{qrText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tour
