import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HomePromotion = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query {
      directusHome {
        promotion_text
        promotion_text_kz
        promotion_amount
        promotion_date
        promotion_date_kz
        promotion_photo {
          localFile {
            childImageSharp {
              fluid(maxHeight: 165) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  let title
  let date
  let promotion
  if (lang !== "kk") {
    promotion = `Акция`
    title = data.directusHome.promotion_text
    date = data.directusHome.promotion_date
  } else {
    promotion = `Науқандар`
    title = data.directusHome.promotion_text_kz
    date = data.directusHome.promotion_date_kz
  }

  return (
    <div className="home-promotion">
      <div className="home-promotion-image">
        <Img
          fluid={
            data.directusHome.promotion_photo.localFile.childImageSharp.fluid
          }
          alt={title + ` ` + data.directusHome.promotion_amount + `% ` + date}
        />
      </div>
      <div className="home-promotion-content">
        <h4>{promotion}</h4>
        <p>
          {title} <span>{data.directusHome.promotion_amount}%</span>
          <br /> {date}
        </p>
      </div>
    </div>
  )
}

export default HomePromotion
