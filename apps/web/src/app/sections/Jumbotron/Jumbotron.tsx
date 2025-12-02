"use client";
import React, { useEffect, useState } from 'react'
import './Jumbotron.css'

function Jumbotron() {
  return (
    <section className='jumbotron md:h-[80rem]' id="home">
      <div className='jumboText-container flex flex-col items-start text-left'>
        <div className='jumbo-group md:ml-[1rem] mt-16 md:mt-[5rem]'>
          <h4 className='jumbo-text font-thin text-[#B4A498] text-xs md:text-base lg:text-2xl'>WEHack 2026 Presents</h4>
          <h1 className='jumbo-title text-[#FFE9D7] text-3xl md:text-5xl lg:text-7xl animate-pulse'>The Night at the Museum</h1>
          <h2 className='jumbo-text font-thin text-[#fefefe] text-base sm:text-1xl md:1xl lg:text-4xl'>April 11th-12th</h2>

                <div className='jumbo-buttons flex flex-row items-start space-x-4 mt-4 gap-1.3'>
                  {/* <Button link={'https://events.mlh.io/events/11456-wehack'} buttonText={'Interest Form'}/> */}
                  {/* <Button link={'https://live.wehackutd.com/'} buttonText={'WEHack Portal'}/> */}
                </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;