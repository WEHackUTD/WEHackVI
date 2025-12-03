'use client'

import React, { useState, useEffect } from 'react'
import './Carousel.css'

const images = [
  '/static/images/testimonial1.png',
  '/static/images/testimonial2.png',
  '/static/images/testimonial3.png',
]

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carousel-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}

export default Carousel
