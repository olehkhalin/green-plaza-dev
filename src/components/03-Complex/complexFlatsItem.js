import React from "react"
import Img from "gatsby-image"

const ComplexItem = ({clicked, flat}) => {
  return (
    <>
      <div
        className="complex-flats-item"
        onClick={clicked}
        onKeyDown={clicked}
        tabIndex={0}
        role="button"
      >
        <div className="complex-flats-item-image">
          {/*<Image />*/}
          <Img fluid={flat.image.localFile.childImageSharp.fluid} />
          <div className="complex-flats-item-content">
            <h3>
              {flat.rooms} ком. квартира <span>{flat.quadrature}м²</span>
            </h3>
            <button className="button line">смотреть планировку</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComplexItem
