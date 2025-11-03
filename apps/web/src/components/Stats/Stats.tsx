'use client'
import React from 'react'
import './Stats.css'

function Statistics() {
  return (
    <div
      className='Statistics-container w-full h-auto flex flex-col items-center justify-center p-6 pb-40 lg:pb-60 relative overflow-visible'
      id='Statistics'
    >
      {/* Decorative raccoon images near the main image */}
      <img
        src="img/static/images/Raccoon_Hearts.svg"
        alt="Raccoon Hearts"
        className="flicker-image flicker-top-left"
      />
      <img
        src="img/static/images/Raccoon_Popcorn.svg"
        alt="Raccoon Popcorn"
        className="flicker-image flicker-bottom-right"
      />

      {/* Title Box
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">
        <div className="glow-sponsor sponsor-title-box">
          <h1 className="Sponsor-title">Statistics</h1>
        </div>
      </div> */}

      {/* Main Statistics Image */}
      <div className="stats-image-container flex flex-col items-center justify-center relative">
        <img
          src="img/static/images/statistics.png"
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
