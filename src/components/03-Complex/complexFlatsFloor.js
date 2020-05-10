import React from "react"

import Modal from "../modal"
import Img from "gatsby-image"

const ComplexFlatsFloor = ({state, disabled, clicked, image, title}) => {

  return (
    <Modal state={state} disabled={disabled} clicked={clicked}>
      <div className="modal-header">
      <div className="modal-header-item">
        <h2>Планировка этажа домов № {title}</h2>
      </div>
      </div>
      <div className="complex-floor-image">
        <Img
          fluid={image.childImageSharp.fluid}
          objectFit="contain"
        />
      </div>
    </Modal>
  )
}

export default ComplexFlatsFloor
