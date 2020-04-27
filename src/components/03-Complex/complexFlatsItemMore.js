import React, { useState } from "react"

import ComplexMoreTable from "../../icons/complex-more.svg"
import Modal from "../modal"
import ModalFos from "./modalFos"

const ComplexItemMore = ({state, disabled, clicked}) => {

  const [stateFos, setStateFos] = useState({
    initial: false,
    clicked: null,
  });
  const [disabledFos, setDisabledFos] = useState(false)
  const handleFos = () => {
    disableFos();
    if (stateFos.initial === false) {
      clicked();
      setTimeout(() => {
        setStateFos({
          initial: null,
          clicked: true,
        })
      }, 700)
    } else if (stateFos.clicked === true) {
      setStateFos({
        clicked: !stateFos
      })
    } else if (stateFos.clicked === false) {
      clicked();
      setTimeout(() => {
        setStateFos({
          clicked: !stateFos.clicked
        })
      }, 700)
    }
  }
  const disableFos = () => {
    setDisabledFos(!disabledFos)
    setTimeout(() => {
      setDisabledFos(false)
    }, 1200)
  }

  return (
    <>
    <Modal state={state} disabled={disabled} clicked={clicked}>
      <div className="complex-more-photos">
        <div className="modal-header-item">
          <h2>4 ком. квартира - 182.0м²</h2>
        </div>
      </div>
      <div className="complex-more-content">
        <div className="modal-header-item promotion">
          <h2>АКЦИЯ -20%</h2>
        </div>
        <div className="complex-more-content-table">
          <ComplexMoreTable />
        </div>
        <div className="complex-more-content-buttons">
          <button className="button bordered main" onClick={() => handleFos()}>
            связаться с менеджером
          </button>
          <a href="#" className="button bordered">
            скачать планировку
          </a>
        </div>
      </div>
    </Modal>
      <ModalFos state={stateFos} disabled={disabledFos} clicked={() => handleFos()}  />
    </>
  )
}

export default ComplexItemMore
