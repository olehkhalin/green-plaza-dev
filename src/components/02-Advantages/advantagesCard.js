import React from "react"

const AdvantagesCard = ({advantageItem}) => (
  <div className="advantages-card-wrapper">
    <div className="advantages-card">
      <div className="advantages-card-inner">
        <ul className="advantages-card-list inner">
          {advantageItem.list.map(el => (
            <li>{el}</li>
          ))}
        </ul>
        <div className="advantages-card-front">
          <div className="advantages-card-icon"><img src={advantageItem.icon} alt=""/></div>
          <h3 className="advantages-card-header">{advantageItem.title}</h3>
        </div>
        <div className="advantages-card-back">
          <ul className="advantages-card-list">
            {advantageItem.list.map(el => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default AdvantagesCard
