import React from 'react'
import './FilmStrip.css'
import Image from 'next/image'

function FilmStrip() {
  return (
      <div className="film-strip-container">
        {/* <img src={"/img/static/images/Film Strip.webp"} className="lg:-mb-96 -my-40 lg:-my-0"/> */}
        <Image 
          src={"/img/static/images/Film Strip.webp"} 
          className="lg:-mb-96 -my-40 lg:-my-0"
          alt="A film strip with 3 images"
          width={1000}
          height={900}
        />
      </div>
  )
}

export default FilmStrip