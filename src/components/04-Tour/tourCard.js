import React from "react"
import ButtonArrow from "../../icons/button-arrow.svg"
import QRCode from "qrcode.react"

const TourCard = ({ title, link }) => (
  <div className="tour-card-wrapper">
    <div className="tour-card">
      <div className="tour-card-icon">
        <div className="tour-card-title">{title}</div>
        <QRCode value={link} renderAs="svg" level="L" size="80%" />
      </div>
      <a className="button arrow" target="_blank" href={link}>
        смотреть тур
        <ButtonArrow />
      </a>
    </div>
  </div>
)

export default TourCard
