import React from "react"
import Img from "gatsby-image"

const ComplexItem = ({clicked, flat, lang}) => {

  let roomTitle
  let planTitle
  let promotion
  if(lang !== 'kk') {
    roomTitle = 'ком. квартира'
    planTitle = 'смотреть планировку'
    promotion = 'Акция'
  } else {
    roomTitle = 'бөлмелі пәтер'
    planTitle = 'жоспарларды қарау'
    promotion = 'Науқандар'
  }

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
              {flat.rooms} {roomTitle} <span>{flat.quadrature}м²</span>
            </h3>
            <button className="button line">{planTitle}</button>
          </div>
          {flat.is_promotion ?
          <div className="complex-flats-item-promotion">
            {promotion} {flat.promotion_amount}%
          </div> : null }
        </div>
      </div>
    </>
  )
}

export default ComplexItem
