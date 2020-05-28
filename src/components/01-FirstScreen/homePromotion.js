import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Modal from "../modal"
import ComplexItemMore from "../03-Complex/complexFlatsItemMore"
import { disableScroll, enableScroll } from "../showHide"

const HomePromotion = ({ lang }) => {

  const data = useStaticQuery(graphql`
    query {
      allDirectusFlatsArray(filter: { is_promotion: { eq: true } }) {
        edges {
          node {
            is_promotion
            promotion_text_ru
            promotion_text_kz
            promotion_amount
            promotion_date_ru
            promotion_date_kz
            rooms
            quadrature
            image {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 165) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            pdf {
              localFile {
                publicURL
              }
            }
            rooms_content_ru {
              id
              sort
              title
              quadrature
            }
            rooms_content_kz {
              id
              sort
              title
              quadrature
            }
          }
        }
      }
    }
  `)

  const flat = data.allDirectusFlatsArray.edges[0].node

  const [state, setState] = useState({
    initial: false,
    clicked: null,
  })
  const [disabled, setDisabled] = useState(false)
  const handleComplex = () => {
    disableComplex()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
      disableScroll()
    } else if (state.clicked === true) {
      setState({
        clicked: !state,
      })
      enableScroll()
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      })
      disableScroll()
    }
  }
  const disableComplex = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }
  let title
  let date
  let promotion
  if (lang !== "kk") {
    promotion = `Акция`
    title = flat.promotion_text_ru
    date = flat.promotion_date_ru
  } else {
    promotion = `Науқандар`
    title = flat.promotion_text_kz
    date = flat.promotion_date_kz
  }

  return (
    <>
      <div className="home-promotion" onClick={() => handleComplex()}>
        <div className="home-promotion-image">
          <Img
            fluid={flat.image.localFile.childImageSharp.fluid}
            alt={title + ` ` + flat.promotion_amount + `% ` + date}
          />
        </div>
        <div className="home-promotion-content">
          <h4>{promotion}</h4>
          <p>
            {title} <span>{flat.promotion_amount}%</span>
            <br /> {date}
          </p>
        </div>
      </div>
      <ComplexItemMore
        state={state}
        disabled={disabled}
        clicked={() => handleComplex()}
        flat={flat}
        lang={lang}
      />
    </>
  )
}

export default HomePromotion
