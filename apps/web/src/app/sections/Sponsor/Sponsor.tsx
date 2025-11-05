import React from 'react';
import './Sponsor.css';

const sponsors = [
    // NOTE: Added a 'vase' property for the background image path
    { default: '/static/images/sample_sponsors/statefarm_logo_brown.png', hover: '/static/images/sample_sponsors/statefarm_logo.png', vase: '/static/images/sponsor_vases/A2-trimmed.png' },
    { default: '/static/images/sample_sponsors/jpmorgan_logo_brown.png', hover: '/static/images/sample_sponsors/jpmorgan_logo.png', vase: '/static/images/sponsor_vases/A2-trimmed.png' },
    { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png', vase: '/static/images/sponsor_vases/A2-trimmed.png' },
    { default: '/static/images/sample_sponsors/statefarm_logo_brown.png', hover: '/static/images/sample_sponsors/statefarm_logo.png', vase: '/static/images/sponsor_vases/A7-trimmed.png' },
    { default: '/static/images/sample_sponsors/jpmorgan_logo_brown.png', hover: '/static/images/sample_sponsors/jpmorgan_logo.png', vase: '/static/images/sponsor_vases/A2-trimmed.png' },
    { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png', vase: '/static/images/sponsor_vases/A2-trimmed.png' },
    { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png', vase: '/static/images/sponsor_vases/A7-trimmed.png' },
    { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png', vase: '/static/images/sponsor_vases/A8-trimmed.png' }
];

function Sponsor() {
    return (
      <div className='Sponsor-container w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:pb-60' id="Sponsor">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">
          <div className="glow-sponsor">
            <h1 className='FAQ-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>2025 Sponsors</h1>
          </div>
        </div>
        {/* <div className="vinyl-yellow-container flex justify-center md:justify-start pt-20 pb-72 md:pt-30 md:pb-64 md:-mr-[5rem] lg:-mr-[20rem] xl:-mr-[35rem]">
          <img className="vinyl-yellow overflow-hidden" src="/static/images/Untitled_Artwork 5.png" width="250px" height="250px"></img> 
        </div> */}
        <div className="sponsor-text-container flex flex-col gap-y-5 flex-wrap items-center justify-center">
          <p className='sponsor-text text-[#CCBA97] font-medium text-4xl md:text-5xl'>Coming Soon</p>
          <p className='sponsor-text text-[#CCBA97] font-medium text-2xl md:text-3xl text-center'>Interested in sponsoring WEHack 2025? Contact us at wehackutd@gmail.com!</p>
        </div>
        <div className='Sponsor-logos 
            grid 
            grid-cols-2           /* Small screens: 2 columns */
            md:grid-cols-4        /* Medium screens and up: 4 columns (2 rows) */
            gap-10 w-full max-w-6xl
            gap-y-20
            gap-x-15'

        >
          {sponsors.map((logo, index) => (
            <div 
                key={index} 
                className='Sponsor-logo bg-transparent flex items-center justify-center' 
                style={{ 
                    '--hover-image': `url(${logo.hover})`,
                    '--vase-image': `url(${logo.vase})` // Passed vase path to CSS
                } as React.CSSProperties}
            >
              {/* The default image is the actual sponsor logo that appears inside the vase */}
              <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
            </div>
          ))}
        </div>
        <div className="vinyl-yellow-container flex justify-center md:justify-start pt-20 pb-72 md:pt-30 md:pb-64 md:-mr-[5rem] lg:-mr-[20rem] xl:-mr-[35rem]">
          <img className="vinyl-yellow overflow-hidden" src="/static/images/Untitled_Artwork 5.png" width="250px" height="250px"></img> 
        </div>
      </div>
    );
  }
  
  export default Sponsor;