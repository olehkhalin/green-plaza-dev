import React, { useRef } from "react"
import Image from "../image"
import ComplexItemMore from "./complexFlatsItemMore"

const ComplexItem = ({clicked}) => {
  return (
    <>
      <div className="complex-flats-item" onClick={clicked}>
        <div className="complex-flats-item-image">
          <Image />
          <div className="complex-flats-item-content">
            <h3>3 ком. квартира 117.0м²</h3>
            <a href="#" className="button line">
              смотреть планировку
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComplexItem
