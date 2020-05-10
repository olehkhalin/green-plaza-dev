import React from "react"
import Img from "gatsby-image"

const ComplexItem = ({clicked, flat}) => {
  return (
    <>
      <div className="complex-flats-item" onClick={clicked} onKeyDown={clicked} tabIndex={0} role="button">
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
