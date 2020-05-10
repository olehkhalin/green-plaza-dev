import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { EqualHeight, EqualHeightElement } from 'react-equal-height'

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
  <LocationIcon/>,
  <EcologyIcon/>,
  <ArchitectureIcon/>,
  <EngineeringIcon/>,
  <ParkingIcon/>,
  <ChildrenIcon/>,
  <SportIcon/>,
  <SecurityIcon/>,
  <CleaningIcon/>
]

const Advantages = () => {
  const data = useStaticQuery(graphql`
    query {
      allAdvantagesJson {
        nodes {
          title
          list
        }
      }
    }
  `)

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
            {data.allAdvantagesJson.nodes.map((advantageItem, index) => (
              <AdvantagesCard advantageItem={advantageItem} key={index} isFirst={index === 0} icon={advantagesIcons[index]} />
            ))}
            {/*</EqualHeight>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
