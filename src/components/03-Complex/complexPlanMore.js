import React, { useState } from "react"

import ComplexMoreTable from "../../icons/complex-more.svg"
import Modal from "../modal"
import Image from "../image"
import ComplexItemMore from "./complexFlatsItemMore"

const ComplexPlanMore = ({ state, disabled, clicked, complexNumbers }) => {
  const [stateItem, setStateItem] = useState({
    initial: false,
    clicked: null,
  })
  const [disabledItem, setDisabledItem] = useState(false)
  const handleItem = () => {
    disableItem()
    if (stateItem.initial === false) {
      clicked()
      setTimeout(() => {
        setStateItem({
          initial: null,
          clicked: true,
        })
      }, 700)
    } else if (stateItem.clicked === true) {
      setStateItem({
        clicked: !stateItem,
      })
    } else if (stateItem.clicked === false) {
      clicked()
      setTimeout(() => {
        setStateItem({
          clicked: !stateItem.clicked,
        })
      }, 700)
    }
  }
  const disableItem = () => {
    setDisabledItem(!disabledItem)
    setTimeout(() => {
      setDisabledItem(false)
    }, 1200)
  }

  return (
    <>
      <Modal state={state} disabled={disabled} clicked={clicked}>
        <div className="modal-header">
          <div className="modal-header-item">
            <h2>Планировка этажа домов № {complexNumbers}</h2>
          </div>
        </div>
        <div className="complex-plan-container">
          <div className="complex-plan-floor">
            <h3>Планировка этажа</h3>
            <Image />
          </div>
          <div className="complex-plan-flats">
            <h3>Планировки квартир</h3>
            <div className="complex-plan-flats-wrapper">
              <div className="complex-plan-flats-item">
                <div className="complex-plan-flats-item-image">
                  <Image />
                </div>
                <button
                  className="button bordered"
                  onClick={() => handleItem()}
                >
                  смотреть планировки <span>Акция -20%</span>
                </button>
              </div>
              <div className="complex-plan-flats-item">
                <div className="complex-plan-flats-item-image">
                  <Image />
                </div>
                <button
                  className="button bordered"
                  onClick={() => handleItem()}
                >
                  смотреть планировки
                </button>
              </div>
              <div className="complex-plan-flats-item">
                <div className="complex-plan-flats-item-image">
                  <Image />
                </div>
                <button
                  className="button bordered"
                  onClick={() => handleItem()}
                >
                  смотреть планировки
                </button>
              </div>
              <div className="complex-plan-flats-item">
                <div className="complex-plan-flats-item-image">
                  <Image />
                </div>
                <button
                  className="button bordered"
                  onClick={() => handleItem()}
                >
                  смотреть планировки
                </button>
              </div>
              <div className="complex-plan-flats-item">
                <div className="complex-plan-flats-item-image">
                  <Image />
                </div>
                <button
                  className="button bordered"
                  onClick={() => handleItem()}
                >
                  смотреть планировки
                </button>
              </div>
              <div className="complex-plan-flats-item">
                <div className="complex-plan-flats-item-image">
                  <Image />
                </div>
                <button
                  className="button bordered"
                  onClick={() => handleItem()}
                >
                  смотреть планировки
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ComplexItemMore
        state={stateItem}
        disabled={disabledItem}
        clicked={() => handleItem()}
      />
    </>
  )
}

export default ComplexPlanMore
