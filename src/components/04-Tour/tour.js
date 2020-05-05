import React from "react"

import TourCard from "./tourCard"

import RhombusIcon from "../../icons/rhombus.svg"
import { graphql, useStaticQuery } from "gatsby"

const toursArray = [
  {
    icon: `../icons/advantages/location.svg`,
    title: `смотреть квартиры`,
    link: `https://google.com`,
  },
  {
    icon: `../icons/advantages/location.svg`,
    title: `смотреть подъезды`,
    link: `https://google.com`,
  },
]

const Tour = () => {
  const data = useStaticQuery(graphql`
    query {
      toursJson {
        flats {
          link
          title
        }
        front_door {
          title
          link
        }
      }
    }
  `)

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
                <TourCard title={data.toursJson.front_door.title} link={data.toursJson.front_door.link} />
                <TourCard title={data.toursJson.flats.title} link={data.toursJson.flats.link} />
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
