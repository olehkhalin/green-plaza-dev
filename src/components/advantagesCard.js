import React from "react"

const AdvantagesCard = ({advantageItem}) => (
  <div className="advantages-card-wrapper">
    <div className="advantages-card">
      <div className="advantages-card-icon"><img src={advantageItem.icon} alt=""/></div>
      <h3 className="advantages-card-header">{advantageItem.title}</h3>
    </div>
  </div>
)

export default AdvantagesCard
