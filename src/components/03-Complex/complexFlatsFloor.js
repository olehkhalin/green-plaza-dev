import React from "react"

import ComplexMoreTable from "../../icons/complex-more.svg"
import Modal from "../modal"
import Image from "../image"
import ComplexItemMore from "./complexFlatsItemMore"

const ComplexFlatsFloor = ({state, disabled, clicked}) => {

  return (
    <Modal state={state} disabled={disabled} clicked={clicked}>
      <div className="modal-header">
      <div className="modal-header-item">
        <h2>Планировка этажа домов № 9, 11, 14, 16, 17</h2>
      </div>
      </div>
      <div className="complex-floor-image">
        <Image/>
      </div>
    </Modal>
  )
}

export default ComplexFlatsFloor
