import React, { useRef } from "react"
import Image from "../image"
import ComplexItemMore from "./complexFlatsItemMore"
import Img from "gatsby-image"

const ComplexItem = ({clicked, flat}) => {
  return (
    <>
      <div className="complex-flats-item" onClick={clicked}>
        <div className="complex-flats-item-image">
          {/*<Image />*/}
          <Img
            fluid={flat.image.childImageSharp.fluid}
          />
          <div className="complex-flats-item-content">
            <h3>{flat.title} {flat.quadrature}</h3>
            <button className="button line">
              смотреть планировку
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComplexItem
