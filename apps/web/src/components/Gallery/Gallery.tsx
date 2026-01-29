import React from 'react'
import './Gallery.css'

function Gallery() {
  const frames = [
    { src: "img/static/images/gallery/oval1.webp", className: "frame-0" },
    { src: "img/static/images/gallery/rect-vert1.webp", className: "frame-1" },
    { src: "img/static/images/gallery/oval2.webp", className: "frame-2" },
    { src: "img/static/images/gallery/rect2.webp", className: "frame-3" },
    { src: "img/static/images/gallery/rect-hori1.webp", className: "frame-4" },
    { src: "img/static/images/gallery/oval3.webp", className: "frame-5" },
    { src: "img/static/images/gallery/rect-vert2.webp", className: "frame-6" },
    { src: "img/static/images/gallery/oval4.webp", className: "frame-7" },
    // { src: "/static/images/gallery/frame_3.png", className: "frame-8" },
  ];

  return (
    <div className="gallery-container">
      {frames.map((frame, index) => (
        <img
          key={index}
          src={frame.src}
          className={`frame ${frame.className}`}
          alt={`Frame ${index}`}
        />
      ))}
    </div>
  )
}

export default Gallery
