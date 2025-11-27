'use client';

import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    image: 'img/static/images/karina.jpg',
    text: 'As a sophomore I was really nervous to join a team and was unsure of my ability to be able to finish my project, but the mentors and organizers created such a welcoming environment. The music, food, workshops, and overall vibe made WeHack such an amazing first hackathon experience!',
    author: 'Suhani Rana',
  },
  {
    image: 'img/static/images/suhani.jpg',
    text: 'WEHack was an amazing experience where I learned relevant technology skills and connected with an inspiring, supportive community. The vibes were incredible, and I left with lasting memories and new connections. I highly recommend it to anyone, especially beginners!',
    author: 'Karina Batra',
  },
  {
    image: 'img/static/images/sneha.jpeg',
    text: 'My experience at WEHack was amazing!! It really brought my friends and me together to build something meaningful, support each other, and most importantly have fun!',
    author: 'Sneha Nangunoori',
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Testimonials-container" id="Testimonials">
      <div className="title-container">
        <h1 className="FAQ-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl">
          Testimonials
        </h1>
      </div>

      <div className="circle-carousel">
        {testimonials.map((item, i) => {
          const raw = i - active;
          const distance =
            raw > testimonials.length / 2
              ? raw - testimonials.length
              : raw < -testimonials.length / 2
              ? raw + testimonials.length
              : raw;

          const isActive = i === active;
          const xOffset = distance * 220;
          const zOffset = isActive ? 140 : 0;
          const scale = isActive ? 0.9 : 0.7;
          const opacity = isActive ? 1 : 0.35;
          const blur = isActive ? 'none' : 'blur(3px)';

          return (
            <div
              key={i}
              className={`carousel-item ${isActive ? 'active' : ''}`}
              style={{
                transform: `translate(-50%, -45%) translateX(${xOffset}px) translateZ(${zOffset}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex: isActive ? 3 : 1,
              }}
            >
              <div className="testimonial-image-container">
                <img
                  src={item.image}
                  alt={`Testimonial ${i + 1}`}
                  className="testimonial-image"
                />
              </div>

              <div
                className={`testimonial-plaque ${
                  isActive ? 'plaque-active' : ''
                }`}
              >
                <div className="testimonial-content">
                  <p className="testimonial-quote">{item.text}</p>
                  <div className="testimonial-meta">
                    <span
                      className="testimonial-divider"
                      aria-hidden="true"
                    ></span>
                    <span className="testimonial-author">
                      {item.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
