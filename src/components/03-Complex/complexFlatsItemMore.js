import React, { useEffect, useState } from "react"

import Modal from "../modal"
import ModalFos from "./modalFos"
import Img from "gatsby-image"
import moment from "moment"
import { orderBy } from "lodash"

let scrollPosition = 0
const ComplexItemMore = ({ state, disabled, clicked, flat, building, lang }) => {
  let title,
    quadrature,
    image,
    promotion,
    publicURL,
    content,
    data = 0

  if (flat) {
    title = flat.rooms + (lang !== 'kk' ? ' ком. квартира' : ' бөлмелі пәтер')
    quadrature = `${flat.quadrature}м²`
    image = flat.image.localFile
    publicURL = flat.pdf.localFile.publicURL
    content = orderBy(
      flat.rooms_content_ru,
      // eslint-disable-next-line
      [object => new moment(object.sort)],
      ["asc"]
    )
    content.map(el => {
      data += parseFloat(el.quadrature)
    })
  }

  let body = null

  useEffect(() => {
    body = document.querySelector("body")
  })

  const [stateFos, setStateFos] = useState({
    initial: false,
    clicked: null,
  })
  const [disabledFos, setDisabledFos] = useState(false)
  const handleFos = () => {
    disableFos()
    if (stateFos.initial === false) {
      clicked()
      setTimeout(() => {
        setStateFos({
          initial: null,
          clicked: true,
        })
        scrollPosition = window.pageYOffset
        document.getElementsByTagName("html")[0].style.overflow = "hidden"
        body.style.overflow = "hidden"
        body.style.position = "fixed"
        body.style.top = `-${scrollPosition}px`
        body.style.width = "100%"
      }, 700)
    } else if (stateFos.clicked === true) {
      setStateFos({
        clicked: !stateFos.clicked,
      })
      document.getElementsByTagName("html")[0].style = ""
      body.style.removeProperty("overflow")
      body.style.removeProperty("position")
      body.style.removeProperty("top")
      body.style.removeProperty("width")
      window.scrollTo(0, scrollPosition)
    } else if (stateFos.clicked === false) {
      clicked()
      setTimeout(() => {
        setStateFos({
          clicked: !stateFos.clicked,
        })
        scrollPosition = window.pageYOffset
        document.getElementsByTagName("html")[0].style.overflow = "hidden"
        body.style.overflow = "hidden"
        body.style.position = "fixed"
        body.style.top = `-${scrollPosition}px`
        body.style.width = "100%"
      }, 700)
    }
  }
  const disableFos = () => {
    setDisabledFos(!disabledFos)
    setTimeout(() => {
      setDisabledFos(false)
    }, 1200)
  }

  let roomTitle
  let quadratureTitle
  let sumTitle
  let managerButton
  let planButton
  if(lang !== 'kk') {
    roomTitle = `Комната`
    quadratureTitle = `Площадь`
    sumTitle = `Итого общая`
    managerButton = `связаться с менеджером`
    planButton = `скачать планировку`
  } else {
    roomTitle = `Бөлме`
    quadratureTitle = `Площадь`
    sumTitle = `Жалпы ауданы`
    managerButton = `связаться с менеджером`
    planButton = `скачать планировку`
  }


  return (
    <>
      <Modal
        state={state}
        disabled={disabled}
        clicked={clicked}
        modalClass="complexFlatsItemMore"
      >
        <div className="complex-more-photos">
          <div className="modal-header-item">
            <h2>
              {title} - {quadrature}
            </h2>
          </div>
          {flat ? <Img fluid={image.childImageSharp.fluid} /> : null}
        </div>
        <div className="complex-more-content">
          <div
            className={
              "modal-header-item promotion" + (!promotion ? " hidden" : "")
            }
          >
            <h2>АКЦИЯ -20%</h2>
          </div>
          <div className="complex-more-content-table">
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>{roomTitle}</th>
                  <th>{quadratureTitle}, м²</th>
                </tr>
              </thead>
              <tbody>
                {content
                  ? content.map((el, index) => (
                      <tr key={el.id}>
                        <td>{index + 1}</td>
                        <td>{el.title}</td>
                        <td>{parseFloat(el.quadrature).toFixed(1)}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>{sumTitle}</td>
                  <td>{data.toFixed(1)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="complex-more-content-buttons">
            <button
              className="button bordered main"
              onClick={() => handleFos()}
            >
              {managerButton}
            </button>
            {}
            <a href={publicURL} download className="button bordered">
              {planButton}
            </a>
          </div>
        </div>
      </Modal>
      <ModalFos
        state={stateFos}
        disabled={disabledFos}
        clicked={() => handleFos()}
        title={title}
        quadrature={quadrature}
        building={building}
      />
    </>
  )
}

export default ComplexItemMore
