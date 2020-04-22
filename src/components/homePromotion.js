import React from "react"

import Image from "./image"

const HomePromotion = ({ buttonType, targetType, link, children }) => (
  <div className="home-promotion">
    <div className="home-promotion-image">
      <Image />
    </div>
    <div className="home-promotion-content">
      <h4>Акция</h4>
      <p>2-х комнатная квартира со скидкой <span>20%</span><br/> только до 1-го мая!</p>
    </div>
  </div>
)

export default HomePromotion
