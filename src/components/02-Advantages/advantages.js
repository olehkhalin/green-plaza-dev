import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { EqualHeight, EqualHeightElement } from "react-equal-height"

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

const Advantages = () => {
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
      }
    }
  `)

  const advantagesArray = [
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

  return (
    <section className="section dark advantages" id="complex">
      <div className="container">
        <div className="row v-center space-between">
          <h2>
            <span className="h2-line">Преимущества жилого комплекса</span>
            <span className="h2-line h2-color">GREEN PLAZA</span>
          </h2>
        </div>
        <div className="row v-center space-between">
          <div className="advantages-cards-container">
            {/*<EqualHeight>*/}
              {advantagesArray.map((advantageItem, index) => (
                <AdvantagesCard
                  advantageItem={advantageItem}
                  key={index}
                  isFirst={index === 0}
                  icon={advantagesIcons[index]}
                />
              ))}
            {/*</EqualHeight>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
