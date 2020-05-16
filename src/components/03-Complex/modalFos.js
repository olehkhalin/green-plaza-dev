import React from "react"

import { BrowserView, MobileView } from "react-device-detect"

import Modal from "../modal"
import MainForm from "../mainForm"

const ModalFos = ({state, disabled, clicked, title, quadrature, building}) => {

  return (
    <Modal state={state} disabled={disabled} clicked={clicked} modalClass="fos">
      <div className="modal-header small">
        <div className="modal-header-item">
          <h2>Оставьте свои контактные данные и наш менеджер свяжется с вами <span>в течение 10 минут</span>!</h2>
        </div>
      </div>
      <div className="modal-fos-form-wrapper">
        <div className="modal-fos-form">
          <MainForm/>
        </div>
        {/*<BrowserView>*/}
          <div className="modal-fos-form-plan">
          <div className="form-content-label plan">
            <span className="form-content-text">Вам понравилась эта планирвка</span>
            <div className="form-content-input">
              <span>Дом № {building}</span><span>{title} - {quadrature}</span>
            </div>
          </div>
        </div>
        {/*</BrowserView>*/}
      </div>
    </Modal>
  )
}

export default ModalFos
