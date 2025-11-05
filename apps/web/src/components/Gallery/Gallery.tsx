import React from 'react'
import './Gallery.css'

function Gallery() {
  const frames = [
    { src: "img/static/images/gallery/oval1.png", className: "frame-0" },
    { src: "img/static/images/gallery/rect1.png", className: "frame-1" },
    { src: "img/static/images/gallery/oval2.png", className: "frame-2" },
    { src: "img/static/images/gallery/rect2.png", className: "frame-3" },
    { src: "img/static/images/gallery/rect3.png", className: "frame-4" },
    { src: "img/static/images/gallery/oval1.png", className: "frame-5" },
    { src: "img/static/images/gallery/rect5.png", className: "frame-6" },
    { src: "img/static/images/gallery/oval2.png", className: "frame-7" },
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
