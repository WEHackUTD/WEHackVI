"use client";
import React, { useEffect, useState } from 'react'
import './Jumbotron.css'
import Button from '@/components/Button/Button';

function Jumbotron() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const target = new Date("4/5/2025 23:59:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [target]);


  return (
    <section className='jumbotron md:h-[80rem]' id="home">
      <div className='jumboText-container flex flex-col items-start text-left'>
        <div className='jumbo-group md:ml-[1rem] mt-16 md:mt-[5rem]'>
          <h4 className='jumbo-text text-[#B4A498] text-xs font-semibold md:text-base font-serif lg:text-2xl'>WEHack 2025 Presents</h4>
          <h1 className='jumbo-title text-[#FFE9D7] text-3xl md:text-5xl lg:text-7xl animate-pulse'>Timeless Moments Await</h1>
          <h2 className='jumbo-text font-black text-[#A6CDC4] text-base sm:text-1xl md:1xl lg:text-4xl'>April 5th-6th</h2>
          {/* <Button link={'http://www.tinyurl.com/wehack-25-mentor'} buttonText={'Mentor Applications'}/> */}

                {/* Countdown Timer Here */}

          {/* <div className="countdown">
            <div className="circle-container large">
              <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse">
                <p>{days}</p>
              </div>
              <p className="label">Days</p>
            </div>
            <div className="circle-container medium">
              <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse [animation-delay:500ms]">
                <p>{hours}</p>
              </div>
              <p className="label">Hours</p>
            </div>
            <div className="circle-container small">
              <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse [animation-delay:300ms]">
                <p>{minutes}</p>
              </div>
              <p className="label">Minutes</p> 
            </div>
            <div className="circle-container smallest">
              <div className="circle bg-[rgba(255,233,215,0.68)] animate-pulse [animation-delay:1500ms]">
                <p>{seconds}</p>
              </div>
              <p className="label">Seconds</p>
            </div>

            <div>
              <img 
                className="wehack-stats-mascot h-auto w-[7rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] scale-x-[-1]"  
                src={"/static/images/raccoon sitting.png"} 
                alt="a bear trying to catch a butterfly" 
                loading="eager"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;