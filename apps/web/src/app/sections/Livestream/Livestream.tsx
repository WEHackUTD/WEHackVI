import React from 'react'
import "./Livestream.css"

function LiveStream() {
  return (
    <div className='livestream-container' id="LiveStream">

      <div className="title-container">
        <div className="header-container">
          <div className="header-img-wrap">
            <img
              src="img/static/images/Live_Stream_header.png"
              className="header-img"
              alt="Live Stream"
            />
          </div>
        </div>
      </div>

      <div className="livestream-content">
        <p className="about-text livestream-text">
          Watch the event unfold in real time — tune in to WEHack 2026
        </p>

        <a
          href="https://www.youtube.com/@wehackutd7730/streams"
          target="_blank"
          rel="noopener noreferrer"
          className="watch-btn"
        >
          <span className="watch-btn-inner">
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch Live on YouTube
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>

    </div>
  )
}

export default LiveStream