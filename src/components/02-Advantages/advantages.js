import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Equalizer from "react-equalizer"

import AdvantagesCard from "./advantagesCard"

import LocationIcon from "../../icons/advantages/location.svg"
import EcologyIcon from "../../icons/advantages/ecology.svg"
import ArchitectureIcon from "../../icons/advantages/architecture.svg"
import EngineeringIcon from "../../icons/advantages/engineering.svg"
import ParkingIcon from "../../icons/advantages/parking.svg"
import ChildrenIcon from "../../icons/advantages/children.svg"
import SportIcon from "../../icons/advantages/sport.svg"
import SecurityIcon from "../../icons/advantages/security.svg"
import CleaningIcon from "../../icons/advantages/cleaning.svg"

const advantagesIcons = [
  <LocationIcon />,
  <EcologyIcon />,
  <ArchitectureIcon />,
  <EngineeringIcon />,
  <ParkingIcon />,
  <ChildrenIcon />,
  <SportIcon />,
  <SecurityIcon />,
  <CleaningIcon />,
]

const Advantages = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query {
      directusAdvantage {
        location_title_ru
        location_list_ru
        ecology_title_ru
        ecology_list_ru
        architecture_title_ru
        architecture_list_ru
        engineering_title_ru
        engineering_list_ru
        parking_title_ru
        parking_list_ru
        children_title_ru
        children_list_ru
        sport_title_ru
        sport_list_ru
        security_title_ru
        security_list_ru
        cleaning_title_ru
        cleaning_list_ru
        location_title_kz
        location_list_kz
        ecology_title_kz
        ecology_list_kz
        architecture_title_kz
        architecture_list_kz
        engineering_title_kz
        engineering_list_kz
        parking_title_kz
        parking_list_kz
        children_title_kz
        children_list_kz
        sport_title_kz
        sport_list_kz
        security_title_kz
        security_list_kz
        cleaning_title_kz
        cleaning_list_kz
      }
    }
  `)

  let advantagesArray = []

  if (lang !== "kk") {
    advantagesArray = [
      {
        title: data.directusAdvantage.location_title_ru,
        list: data.directusAdvantage.location_list_ru,
      },
      {
        title: data.directusAdvantage.ecology_title_ru,
        list: data.directusAdvantage.ecology_list_ru,
      },
      {
        title: data.directusAdvantage.architecture_title_ru,
        list: data.directusAdvantage.architecture_list_ru,
      },
      {
        title: data.directusAdvantage.engineering_title_ru,
        list: data.directusAdvantage.engineering_list_ru,
      },
      {
        title: data.directusAdvantage.parking_title_ru,
        list: data.directusAdvantage.parking_list_ru,
      },
      {
        title: data.directusAdvantage.children_title_ru,
        list: data.directusAdvantage.children_list_ru,
      },
      {
        title: data.directusAdvantage.sport_title_ru,
        list: data.directusAdvantage.sport_list_ru,
      },
      {
        title: data.directusAdvantage.security_title_ru,
        list: data.directusAdvantage.security_list_ru,
      },
      {
        title: data.directusAdvantage.cleaning_title_ru,
        list: data.directusAdvantage.cleaning_list_ru,
      },
    ]
  } else {
    advantagesArray = [
      {
        title: data.directusAdvantage.location_title_kz,
        list: data.directusAdvantage.location_list_kz,
      },
      {
        title: data.directusAdvantage.ecology_title_kz,
        list: data.directusAdvantage.ecology_list_kz,
      },
      {
        title: data.directusAdvantage.architecture_title_kz,
        list: data.directusAdvantage.architecture_list_kz,
      },
      {
        title: data.directusAdvantage.engineering_title_kz,
        list: data.directusAdvantage.engineering_list_kz,
      },
      {
        title: data.directusAdvantage.parking_title_kz,
        list: data.directusAdvantage.parking_list_kz,
      },
      {
        title: data.directusAdvantage.children_title_kz,
        list: data.directusAdvantage.children_list_kz,
      },
      {
        title: data.directusAdvantage.sport_title_kz,
        list: data.directusAdvantage.sport_list_kz,
      },
      {
        title: data.directusAdvantage.security_title_kz,
        list: data.directusAdvantage.security_list_kz,
      },
      {
        title: data.directusAdvantage.cleaning_title_kz,
        list: data.directusAdvantage.cleaning_list_kz,
      },
    ]
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".advantages-card-inner .header")
    console.log(cards)
    let maxHeight = 0

    cards.forEach(card => {
      const newHeight = card.offsetHeight
      if (newHeight > maxHeight) maxHeight = newHeight
      console.log(maxHeight)
    })

    cards.forEach(card => {
      card.height = `${maxHeight}px`
    })
  }, [])

  let header

  if (lang !== "kk") {
    header = (
      <>
        <span className="h2-line">Преимущества жилого комплекса</span>
        <span className="h2-line h2-color">GREEN PLAZA</span>
      </>
    )
  } else {
    header = (
      <>
        <span className="h2-line">
          <span className="h2-color">GREEN PLAZA</span> тұрғын үй кешенінің
        </span>
        <span className="h2-line">артықшылықтары</span>
      </>
    )
  }

  return (
    <section className="section dark advantages" id="complex">
      <div className="container">
        <div className="row v-center space-between">
          <h2>{header}</h2>
        </div>
        <div className="row v-center space-between">
          <div className="advantages-cards-container">
            <Equalizer byRow={false}>
              {advantagesArray.map((advantageItem, index) => (
                <AdvantagesCard
                  advantageItem={advantageItem}
                  key={index}
                  isFirst={index === 0}
                  icon={advantagesIcons[index]}
                />
              ))}
            </Equalizer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
