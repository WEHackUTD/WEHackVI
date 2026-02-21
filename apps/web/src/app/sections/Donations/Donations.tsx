import React from 'react';
import './Donations.css';

const LOGO_SHAKESHACK = '/img/static/images/donors/Shake-Shack_Logo.png';
const LOGO_NAMI = '/img/static/images/donors/Nami_Illustrations_Official_Working File_Star Logo + Name_White Text.png';
const LOGO_CIDERCADE = '/img/static/images/donors/Cidercade.png';
const LOGO_JENIS = '/img/static/images/donors/Jenis.png';

const SHAKESHACK_LINK = 'https://www.shakeshack.com/';
const NAMI_LINK = 'https://namimatcha.com/';
const CIDERCADE_LINK = 'https://www.cidercade.com/';
const JENIS_LINK = 'https://www.jenis.com/';

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
                <img
                  src={item.imagePath}
                  alt={`Donation ${item.id}`}
                  className="donation-logo"
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
