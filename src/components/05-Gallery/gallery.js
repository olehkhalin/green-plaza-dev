import React from "react"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allGalleryJson {
        nodes {
          image {
            base
            childImageSharp {
              fluid {
                src
              }
            }
          }
          alt
        }
      }
    }
  `)

  return (
    <section className="section light gallery" id="gallery">
      <div className="container">
        <div className="row v-center space-between">
          <h2>
            <span className="h2-line">Фотогалерея</span>
          </h2>
        </div>
        <div className="row v-center space-between">
          <div className="gallery-cards-container">
            {console.log(data.allGalleryJson)}
            {data.allGalleryJson.nodes.map(galleryItem => (
              <div className="gallery-card-wrapper">
                <div className="gallery-card">
                  <Img
                    fluid={galleryItem.image.childImageSharp.fluid}
                    alt={galleryItem.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
