import React from 'react';
import Image from 'next/image';
import './Donations.css';

const LOGO_SHAKESHACK = '/img/static/images/donors/Shake-Shack_Logo.png';
const LOGO_NAMI = '/img/static/images/donors/Nami_Illustrations.png';
const LOGO_CIDERCADE = '/img/static/images/donors/Cidercade.png';
const LOGO_JENIS = '/img/static/images/donors/Jenis.png';
const LOGO_FIREFLY = '/img/static/images/donors/SweetFirefly.png';
const LOGO_BAZARIA = '/img/static/images/donors/Bazaria.png';
const LOGO_EILAND = '/img/static/images/donors/Eiland.png';
const LOGO_BUNDT = '/img/static/images/donors/NothingBundtCakes.png';

const SHAKESHACK_LINK = 'https://www.shakeshack.com/';
const NAMI_LINK = 'https://namimatcha.com/';
const CIDERCADE_LINK = 'https://www.cidercade.com/';
const JENIS_LINK = 'https://www.jenis.com/';
const FIREFLY_LINK = 'https://sweetfirefly.com/';
const BAZARIA_LINK = 'https://thebazaria.com/';
const EILAND_LINK = 'https://www.eilandcoffee.com/';
const BUNDT_LINK = 'https://www.nothingbundtcakes.com/';

interface GridItem {
  id: number;
  imagePath: string;
  link: string;
}

const donations: GridItem[] = [
  { id: 1, imagePath: LOGO_CIDERCADE, link: CIDERCADE_LINK },
  { id: 2, imagePath: LOGO_SHAKESHACK, link: SHAKESHACK_LINK },
  { id: 3, imagePath: LOGO_NAMI, link: NAMI_LINK },
  { id: 4, imagePath: LOGO_JENIS, link: JENIS_LINK },
  { id: 5, imagePath: LOGO_FIREFLY, link: FIREFLY_LINK },
  { id: 6, imagePath: LOGO_BAZARIA, link: BAZARIA_LINK },
  { id: 7, imagePath: LOGO_EILAND, link: EILAND_LINK },
  { id: 8, imagePath: LOGO_BUNDT, link: BUNDT_LINK },
];

const Donations: React.FC = () => {
  return (
    <section
      id="Donations"
      className="donations-container w-full flex flex-col items-center py-20 px-6"
    >
      <div className="header-3">
        <h1>Donations</h1>
      </div>

      <div className="donations-grid-wrapper w-full max-w-7xl mx-auto">
        <div className="donations-row">
          {donations.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="donation-card"
            >
              <div className="donation-card-inner">
                <Image
                  src={item.imagePath}
                  alt={`Donation ${item.id}`}
                  width={420}
                  height={420}
                  sizes="(max-width: 768px) 44vw, 18vw"
                  className="donation-logo"
                  priority={item.id <= 2}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donations;
