import React from "react"

import Modal from "../modal"
import MainForm from "../mainForm"

const ModalFos = ({
  state,
  disabled,
  clicked,
  title,
  quadrature,
  building,
  lang,
}) => {
  let fosTitle
  let likedPlan
  let house
  if (lang !== "kk") {
    fosTitle = (
      <h2>
        Оставьте свои контактные данные и наш менеджер свяжется с вами{" "}
        <span>в течение 10 минут</span>!
      </h2>
    )
    likedPlan = `Вам понравилась эта планирвка`
    house = `Дом`
  } else {
    fosTitle = (
      <h2>
        15 Байланыс мәліметтерін қалдырып кетіңіз, біздің менеджер{" "}
        <span>10 мин ішінде хабарласады</span>!
      </h2>
    )
    likedPlan = `Сізге осы жоспар ұнады`
    house = `Үй`
  }
  return (
    <Modal state={state} disabled={disabled} clicked={clicked} modalClass="fos">
      <div className="modal-header small">
        <div className="modal-header-item">
          {fosTitle}
          {/*<h2>Оставьте свои контактные данные и наш менеджер свяжется с вами <span>в течение 10 минут</span>!</h2>*/}
        </div>
      </div>
      <div className="modal-fos-form-wrapper">
        <div className="modal-fos-form">
          <MainForm lang={lang} />
        </div>
        <div className="modal-fos-form-plan">
          <div className="form-content-label plan">
            <span className="form-content-text">{likedPlan}</span>
            <div className="form-content-input">
              <span>{house} № {building}</span>
              <span>
                {title} - {quadrature}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalFos
