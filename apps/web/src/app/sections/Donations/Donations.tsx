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


// Define grid item structure
interface GridItem {
  id: number;
  type: 'vase' | 'box';
  imagePath: string;
  link?: string;
  vaseClass?: string;
}


const dummySponsors: GridItem[] = [
  { id: 1, type: 'box', imagePath: LOGO_CIDERCADE, link: CIDERCADE_LINK },
  { id: 2, type: 'box', imagePath: LOGO_SHAKESHACK, link: SHAKESHACK_LINK },
  { id: 3, type: 'box', imagePath: LOGO_NAMI, link: NAMI_LINK },
  { id: 4, type: 'box', imagePath: LOGO_JENIS, link: JENIS_LINK },
];

// Size rules
const getBoxSizeClass = (id: number, type: 'vase' | 'box'): string => {
  const row = Math.ceil(id / 5);

  if (type === 'box') {
    switch (row) {
      case 1:
        return 'h-64 md:h-72 lg:h-64 w-72';
      case 2:
        return 'h-48 md:h-56 lg:h-64 w-72';
      case 3:
        return 'h-32 md:h-36 lg:h-40 w-48';
      case 4:
        return 'h-32 md:h-36 lg:h-40 w-48';
      default:
        return 'h-20';
    }
  }

  if (type === 'vase') {
    switch (row) {
      case 1:
        return 'h-48 md:h-64 lg:h-80';
      case 2:
        return 'h-44 md:h-60 lg:h-72';
      case 3:
        return 'h-40 md:h-56 lg:h-64';
      case 4:
        return 'h-36 md:h-52 lg:h-56';
      default:
        return 'h-48 md:h-64';
    }
  }

  return '';
};

// Group items into rows (still used for sizing logic), but we won't render row titles anymore.
const groupedSponsors = dummySponsors.reduce((acc, item) => {
  const row = Math.ceil(item.id / 5);
  if (!acc[row]) acc[row] = [];
  acc[row].push(item);
  return acc;
}, {} as Record<number, GridItem[]>);

const Donations: React.FC = () => {
  return (
    <div className="Sponsor-container w-full h-auto flex flex-col items-center p-6 py-20" id="Donations">
      <div className="header-3">
        <h1>Donations</h1>
      </div>

      {/* Grid (no tier titles) */}
      <div className="Sponsor-grid-wrapper w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-16 lg:gap-20">
        {Object.keys(groupedSponsors).map((rowKey) => {
          const rowId = parseInt(rowKey);
          const rowItems = groupedSponsors[rowId];

          return (
            <div key={rowId} className="Sponsor-row grid grid-cols-4 gap-5 md:gap-10 lg:gap-12 w-full">
              {rowItems.map((item) => {
                const row = Math.ceil(item.id / 5);
                const sizeClass = getBoxSizeClass(item.id, item.type);

                const commonClasses = `
                  relative
                  w-full
                  flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${item.type === 'box' ? 'bg-gray-300 rounded-lg' : ''}
                  ${sizeClass}
                  ${item.type === 'box' && row === 2 ? 'sponsor-row-2-box' : ''}
                  ${item.type === 'box' && row === 3 ? 'sponsor-row-3-box' : ''}
                `;

                return (
                    <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={`Sponsor-placeholder ${commonClasses}`}>
                        <div>
                            {item.type === 'vase' ? (
                                <div
                                    className={`Vase-item ${item.vaseClass}`}
                                    style={{
                            backgroundImage: `url(${item.imagePath})`,
                            height: '100%',
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom center',
                            }}
                        />
                        ) : (
                        <div className="Box-content w-full h-full p-4 flex items-center justify-center">
                            <img
                            src={item.imagePath}
                            alt={`Sponsor ${item.id}`}
                            className="max-w-[90%] max-h-[80%] object-contain opacity-70 transition-opacity duration-300"
                            />
                        </div>
                        )}
                    </div>
                </a>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Contact Info */}
      {/* <div className="sponsor-text-container flex flex-col gap-y-5 flex-wrap items-center justify-center mt-20 font-gantari">
        <p className="sponsor-text text-[#CCBA97] font-medium text-4xl md:text-5xl">2026 Sponsors Coming Soon</p>
        <p className="sponsor-text text-[#CCBA97] font-medium text-2xl md:text-3xl text-center">
          Interested in sponsoring WEHack 2026? Contact us at wehackutd@gmail.com!
        </p>
      </div> */}
    </div>
  );
};

export default Donations;