import React from "react"
// import {EqualHeightElement} from "react-equal-height"

const AdvantagesCard = ({advantageItem, icon, isFirst = false}) => (
  <div className={"advantages-card-wrapper" + (isFirst ? (' full') : '')}>
      <div className="advantages-card">
        <div className="advantages-card-inner">
          {/*<EqualHeightElement name="Name">*/}
            <ul className="advantages-card-list inner">
              {advantageItem.list.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          {/*</EqualHeightElement>*/}
          <div className="advantages-card-front">
            <div className="advantages-card-icon">{icon}</div>
            <h3 className="advantages-card-header">{advantageItem.title}</h3>
          </div>
          <div className="advantages-card-back">
            <ul className="advantages-card-list">
              {advantageItem.list.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  </div>
)

export default AdvantagesCard
