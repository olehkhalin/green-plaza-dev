import React, { useState } from "react"

import ComplexMoreTable from "../../icons/complex-more.svg"
import Modal from "../modal"
import ModalFos from "./modalFos"
import Img from "gatsby-image"

const ComplexItemMore = ({state, disabled, clicked, flat, building}) => {

  let title, quadrature, image, promotion, publicURL;

  if(flat) {
    title = flat.title
    quadrature = flat.quadrature
    image = flat.image
    promotion = flat.promotion
    publicURL = flat.pdf.publicURL
  }

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
    document.querySelector('html').classList.toggle('lock-scroll');
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
          <h2>{title} - {quadrature}</h2>
        </div>
        {flat ? (
          <Img
            fluid={image.childImageSharp.fluid}
          />
        ) : null}
      </div>
      <div className="complex-more-content">
        <div className={"modal-header-item promotion" + (!promotion ? " hidden" : '')}>
          <h2>АКЦИЯ -20%</h2>
        </div>
        <div className="complex-more-content-table">
          <ComplexMoreTable />
        </div>
        <div className="complex-more-content-buttons">
          <button className="button bordered main" onClick={() => handleFos()}>
            связаться с менеджером
          </button>
          {}
          <a href={publicURL} download className="button bordered">
            скачать планировку
          </a>
        </div>
      </div>
    </Modal>
      <ModalFos state={stateFos} disabled={disabledFos} clicked={() => handleFos()} title={title} quadrature={quadrature} building={building} />
    </>
  )
}

export default ComplexItemMore
