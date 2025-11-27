'use client'
import React, { useEffect, useState } from 'react'
import './Stats.css'

function Statistics() {
  const [showEyesOpen, setShowEyesOpen] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEyesOpen(prev => !prev)
    }, 2000) // toggle every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className='Statistics-container w-full h-auto flex flex-col items-center justify-center p-6 pb-40 lg:pb-60 relative overflow-visible'
      id='Statistics'
    >
      {/* Top-right cat sculpture */}
      <img
        src="img/static/images/Cat_Sculpture.png"
        alt="Cat Sculpture"
        className="corner-cat corner-cat-top-right"
      />

      {/* Bottom-left cat eyes (toggles open/closed) */}
      <img
        src={
          showEyesOpen
            ? "img/static/images/Cat_Eyes_Open.png"
            : "img/static/images/Cat_Eyes_Closed.png"
        }
        alt={showEyesOpen ? "Cat Eyes Open" : "Cat Eyes Closed"}
        className="corner-cat corner-cat-bottom-left"
      />

      {/* Main Statistics Image (ticket) */}
      <div className="stats-image-container flex flex-col items-center justify-center relative">
        <img
          src="img/static/images/Group 79.png"
          alt="Statistics Graphic"
          className="rotating-image"
          onError={(e) => {
            e.currentTarget.src = '/static/images/default-stats.png';
          }}
        />
      </div>
    </div>
  )
}

export default Statistics
