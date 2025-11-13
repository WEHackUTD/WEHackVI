import React from 'react'
import './About.css'
import Image from 'next/image'

function About() {
  return (
    <section className='about-section' id="about-wehack">
      {/* group 1 */}
      <div className='flex justify-center items-center'>
          <Image 
            className="h-auto md:px-0 transform-gpu" 
            src={"/img/static/images/Group 34.png"} 
            alt={"Dallas' Largest Inclusive Hackathon"} 
            width={800}
            height={600}/>
      </div>
      
      <div className='about-group flex flex-wrap flex-col sm:flex-row md:flex-row: lg:flex-row'>
        <div className='about-text-container flex flex-col items-center justify-center gap-y-5 -mt-10 md:mt-5 lg:mt-20'>
          <p className='about-text text-[#CCBA97] font-medium text-lg md:text-xl lg:text-2xl'>The purpose of WEHack is to create an inclusive and encouraging environment for women, nonbinary genders, and all underrepresented groups in technology so that they can gain the skills and confidence to excel in future hackathons and the tech world.</p>
          <p className='about-text text-[#CCBA97] font-medium text-lg md:text-xl lg:text-2xl'>We aim to encourage more underrepresented individuals to harness their skills by creating software or hardware projects of their own. Whether it's networking with sponsors and hackers, gaining development and workshop experience, or competing against other teams for challenges and prizes, WEHack offers participants an opportunity to end the weekend with unique takeaways.</p>
        </div>
      </div>

      {/* <div className="film-strip-container">
        <img src="/static/images/Film Strip.svg" className="film-strip" />
      </div> */}
    

      {/* stats */}
      {/* <Stats/> */}
    </section>
  )
}

export default About