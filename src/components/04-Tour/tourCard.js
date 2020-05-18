import React from "react"
import ButtonArrow from "../../icons/button-arrow.svg"
import QRCode from "qrcode.react"

const TourCard = ({ title, link, lang }) => {

  let tourButton
  if(lang !== 'kk') {
    tourButton = 'смотреть тур'
  } else {
    tourButton = 'тур қарау'
  }

  return (
    <div className="tour-card-wrapper">
      <div className="tour-card">
        <div className="tour-card-icon">
          <div className="tour-card-title">{title}</div>
          <QRCode value={link} renderAs="svg" level="L" />
        </div>
        <a className="button arrow" target="_blank" rel="noopener noreferrer" href={link}>
          {tourButton}
          <ButtonArrow />
        </a>
      </div>
    </div>
  )
}

export default TourCard
