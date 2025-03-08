import React from 'react';
import './Sponsor.css';

const sponsors = [
  { default: '/img/static/images/sponsors/cbre_gold.png', hover: '/img/static/images/sponsors/cbre_gold.png', tier: 'gold', link: 'https://careers.cbre.com/en_US/careers/SearchJobs/?9577=%5B17276%5D&9577_format=10224&listFilterMode=1&jobRecordsPerPage=6&' },
  { default: '/img/static/images/sponsors/verizon_gold.svg', hover: '/img/static/images/sponsors/verizon_gold.svg', tier: 'gold', link: 'https://mycareer.verizon.com/jobs/' },
  { default: '/img/static/images/sponsors/bcbstx_silver.png', hover: '/img/static/images/sponsors/bcbstx_silver.png', tier: 'silver', link: 'https://careers.hcsc.com/search-jobs' },
  { default: '/img/static/images/sponsors/capital_one_silver.png', hover: '/img/static/images/sponsors/capital_one_silver.png', tier: 'silver', link: 'https://www.capitalonecareers.com/search-jobs' },
  { default: '/img/static/images/sponsors/jpmc_bronze.png', hover: '/img/static/images/sponsors/jpmc_bronze.png', tier: 'bronze', link: 'https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/requisitions' },
  { default: '/img/static/images/sponsors/statefarm_bronze.png', hover: '/img/static/images/sponsors/statefarm_bronze.png', tier: 'bronze', link: 'https://jobs.statefarm.com/main/jobs' },
  { default: '/img/static/images/sponsors/axxess_bronze.png', hover: '/img/static/images/sponsors/axxess_bronze.png', tier: 'bronze', link: 'https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=153b5e8f-6e7c-4b07-a07b-70fec40037cb&ccId=19000101_000001&type=MP&lang=en_US' },
  { default: '/img/static/images/sponsors/the_bridge_bronze.png', hover: '/img/static/images/sponsors/the_bridge_bronze.png', tier: 'bronze', link: 'https://thebridge.com/careers/' },
  { default: '/img/static/images/sponsors/codepath_bronze.png', hover: '/img/static/images/sponsors/codepath_bronze.png', tier: 'bronze', link: 'https://www.codepath.org/plan-your-codepath' },
  { default: '/img/static/images/sponsors/dfw_atw_bronze.png', hover: '/img/static/images/sponsors/dfw_atw_bronze.png', tier: 'bronze', link: 'https://www.dfwatw.org/' }
];

const goldSponsors = sponsors.filter(sponsor => sponsor.tier === 'gold')
const silverSponsors = sponsors.filter(sponsor => sponsor.tier === 'silver')
const bronzeSponsors = sponsors.filter(sponsor => sponsor.tier === 'bronze')

function Sponsor() {
    return (
      <div className='Sponsor-container w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:pb-60' id="Sponsors">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">
          <div className="glow-sponsor transform-gpu">
            <h1 className='Sponsor-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>2025 Sponsors</h1>
          </div>
        </div>
        {/*<div className="sponsor-text-container flex flex-wrap items-center justify-center">
        <p className='sponsor-text text-[#CCBA97] font-medium text-lg lg:text-xl'>Interested in sponsoring WEHack 2025? Contact us at wehackutd@gmail.com!</p>
        </div>
        <h1 className='Sponsor-title text-[#CCBA97] text-center text-4xl md:text-5xl lg:text-5xl pb-7 md:pb-15 md:pb-20'>2025 Sponsors</h1>*/}
        
        <div className="flex flex-col justify-center gap-y-10 items-center w-full">
          <div className='gold-sponsors flex flex-col justify-center gap-7 md:flex-row md:flex-1'>
            {goldSponsors.map((logo, index) => (
              <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`Sponsor-logo ${logo.tier}`}
              style={{ '--hover-image': `url(${logo.hover})` } as React.CSSProperties}
            >
                <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
            </a>
            ))}
          </div>
          <div className='silver-sponsors flex flex-col justify-center gap-7 md:flex-row md:flex-1'>
            {silverSponsors.map((logo, index) => (
              <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`Sponsor-logo ${logo.tier}`}
              style={{ '--hover-image': `url(${logo.hover})` } as React.CSSProperties}
            >
                <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
            </a>
            ))}
          </div>
          <div className='bronze-sponsors flex flex-col justify-center gap-7 md:grid md:grid-cols-3'>
            {bronzeSponsors.map((logo, index) => (
              <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`Sponsor-logo ${logo.tier}`}
              style={{ '--hover-image': `url(${logo.hover})` } as React.CSSProperties}
            >
                <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
            </a>
            ))}
          </div>
        </div>
        <div className="vinyl-yellow-container overflow-x-hidden flex justify-center md:justify-start pt-20 pb-72 md:pt-30 md:pb-64 md:-mr-[5rem] lg:-mr-[20rem] xl:-mr-[35rem]">
          <img className="vinyl-yellow overflow-x-hidden" src={"/img/static/images/Untitled_Artwork 5.png"} width="250px" height="250px"></img>    
        </div>
      </div>
    );
  }
  
  export default Sponsor;