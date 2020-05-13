import React from "react"

import {orderBy} from 'lodash'
import moment from 'moment'

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      directusGallery {
        images {
          localFile {
            id
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          title
          uploaded_on
        }
      }
    }
  `)
  const imagesArr = orderBy(
    data.directusGallery.images,
    // eslint-disable-next-line
    [object => new moment(object.uploaded_on)],
    ['desc']
  )




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
            {imagesArr.map(galleryItem => (
              <div
                className="gallery-card-wrapper"
                key={galleryItem.localFile.id}
              >
                <div className="gallery-card">
                  <Img
                    fluid={galleryItem.localFile.childImageSharp.fluid}
                    alt={galleryItem.title + " | Green Plaza"}
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
