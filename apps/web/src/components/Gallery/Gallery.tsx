import React from 'react';
import './Gallery.css';

// Static frame data (outside component to avoid re-allocations)
const FRAMES = [
  { src: "/img/static/images/gallery/oval1.webp", className: "frame-0" },
  { src: "/img/static/images/gallery/rect-vert1.webp", className: "frame-1" },
  { src: "/img/static/images/gallery/oval2.webp", className: "frame-2" },
  { src: "/img/static/images/gallery/rect2.webp", className: "frame-3" },
  { src: "/img/static/images/gallery/rect-hori1.webp", className: "frame-4" },
  { src: "/img/static/images/gallery/oval3.webp", className: "frame-5" },
  { src: "/img/static/images/gallery/rect-vert2.webp", className: "frame-6" },
  { src: "/img/static/images/gallery/oval4.webp", className: "frame-7" },
];

function Gallery() {
  return (
    <div
      className="gallery-container"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px 800px' }}
    >
      {FRAMES.map((frame, index) => (
        <img
          key={index}
          src={frame.src}
          className={`frame ${frame.className}`}
          alt={`Gallery frame ${index + 1}`}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable={false}
        />
      ))}
    </div>
  );
}

export default Gallery;
