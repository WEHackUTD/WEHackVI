'use client';

import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  { image: '/static/images/testimonial1.png', text: `“Felt like I was completely in a safe space... " ~ Sanjana Kotha (Sophomore)` },
  { image: '/static/images/testimonial1.png', text: `“WEHack gave me one of my most memorable experiences... " ~ Elisa Paul (Sophomore)` },
  { image: 'img/static/images/testimonial-sneha.jpeg', text: `“My experience at WEHack was amazing!! It really brought my friends and me together to build something meaningful, support each other, and most importantly have fun!" ~ Sneha Nangunoori (Senior)` },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);
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
            raw > testimonials.length / 2 ? raw - testimonials.length :
            raw < -testimonials.length / 2 ? raw + testimonials.length :
            raw;

          const isActive = i === active;
          const xOffset = distance * 260;
          const zOffset = isActive ? 220 : 0;
          const scale = isActive ? 1 : 0.78;
          const opacity = isActive ? 1 : 0.35;
          const blur = isActive ? 'none' : 'blur(3px)';

          return (
            <div
              key={i}
              className={`carousel-item ${isActive ? 'active' : ''}`}
              style={{
                transform: `translate(-50%, -50%) translateX(${xOffset}px) translateZ(${zOffset}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex: isActive ? 3 : 1
              }}
            >
              <div className="testimonial-image-container">
                <img src={item.image} alt={`Testimonial ${i + 1}`} className="testimonial-image" />
              </div>

              <div className={`testimonial-plaque ${isActive ? 'plaque-active' : ''}`}>
                <p className="testimonial-text">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
