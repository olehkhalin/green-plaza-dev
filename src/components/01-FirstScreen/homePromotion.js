import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HomePromotion = () => {
  const data = useStaticQuery(graphql`
    query {
      mainScreenJson {
        promotion {
          body {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            amount
            term
          }
        }
      }
    }
  `)

  return (
    <div className="home-promotion">
      <div className="home-promotion-image">
        <Img
          fluid={data.mainScreenJson.promotion.body.image.childImageSharp.fluid}
          alt={
            data.mainScreenJson.promotion.body.title +
            ` ` +
            data.mainScreenJson.promotion.body.amount +
            `% ` +
            data.mainScreenJson.promotion.body.term
          }
        />
      </div>
      <div className="home-promotion-content">
        <h4>Акция</h4>
        <p>
          {data.mainScreenJson.promotion.body.title}{" "}
          <span>{data.mainScreenJson.promotion.body.amount}%</span>
          <br /> {data.mainScreenJson.promotion.body.term}
        </p>
      </div>
    </div>
  )
}

export default HomePromotion
