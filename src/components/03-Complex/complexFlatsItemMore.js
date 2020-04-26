import React from "react"

import ComplexMoreTable from "../../icons/complex-more.svg"
import Modal from "../modal"

const ComplexItemMore = ({state, disabled, clicked}) => {

  return (
    <Modal state={state} disabled={disabled} clicked={clicked}>
      <div className="complex-more-header">
        <div className="complex-more-header-item">
          <h2>4 ком. квартира - 182.0м²</h2>
        </div>
        <div className="complex-more-header-item">
          <h3>АКЦИЯ -20%</h3>
        </div>
      </div>
      <div className="complex-more-photos">{/*<Image />*/}</div>
      <div className="complex-more-content">
        <div className="complex-more-content-table">
          <ComplexMoreTable />
        </div>
        <div className="complex-more-content-buttons">
          <a href="#" className="button bordered main">
            связаться с менеджером
          </a>
          <a href="#" className="button bordered">
            скачать планировку
          </a>
        </div>
      </div>
    </Modal>
  )
}

export default ComplexItemMore
