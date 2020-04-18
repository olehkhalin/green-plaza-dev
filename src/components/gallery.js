import React from "react"

import Image from "./image"

const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Gallery = () => (
  <section className="section light gallery">
    <div className="container">
      <div className="row v-center space-between">
        <h2>
          <span className="h2-line">Фотогалерея</span>
        </h2>
      </div>
      <div className="row v-center space-between">
        <div className="gallery-cards-container">
          {galleryImages.map((galleryItem, index) => (
            <div className="gallery-card-wrapper" key={index}>
              <div className="gallery-card">
                <Image/>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  </section>
)

export default Gallery
