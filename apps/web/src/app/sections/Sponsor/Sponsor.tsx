import React from 'react';
import './Sponsor.css';

// --- VASE ASSET PATHS ---
const VASE_A1 = 'img/static/images/sponsor_vases/A3-trimmed.webp';
const VASE_A2 = 'img/static/images/sponsor_vases/A2-trimmed.webp';
const VASE_A3 = 'img/static/images/sponsor_vases/A3-trimmed.webp';
const VASE_A4 = 'img/static/images/sponsor_vases/A4-trimmed.webp';
const VASE_A5 = 'img/static/images/sponsor_vases/A5-trimmed.webp';
const VASE_A6 = 'img/static/images/sponsor_vases/A6-trimmed.webp';
const VASE_A7 = 'img/static/images/sponsor_vases/A7-trimmed.webp';
const VASE_A8 = 'img/static/images/sponsor_vases/A8-trimmed.webp';

const LOGO_STATEFARM = 'img/static/images/sponsors/statefarm_bronze.webp';
const LOGO_CBRE = 'img/static/images/sponsors/cbre_gold.webp';
const LOGO_VERIZON = 'img/static/images/sponsors/verizon_gold.svg';
const LOGO_CAPITAL_ONE = 'img/static/images/sponsors/capital_one_silver.webp';
const LOGO_HCSC = 'img/static/images/sponsors/hcsc_logo.webp';
const LOGO_CODEPATH = 'img/static/images/sponsors/codepath_bronze.webp';
const LOGO_NH = 'img/static/images/sponsors/nh_logo.webp';
const LOGO_AXXESS = 'img/static/images/sponsors/axxess_bronze.webp';
const LOGO_DFW_ATW = 'img/static/images/sponsors/dfw_atw_bronze.webp';


// Define grid item structure
interface GridItem {
    id: number;
    type: 'vase' | 'box'; 
    imagePath: string; 
    vaseClass?: string;
}

// Row tier labels
const rowTitles: Record<number, string | null> = {
    1: "GOLD SPONSORS",
    2: "SILVER SPONSORS",
    3: "BRONZE SPONSORS",
    4: null
};

// --- 20 GRID ITEMS ---
const dummySponsors: GridItem[] = [

    { id: 2, type: 'vase', imagePath: VASE_A5, vaseClass: 'vase-style-6' }, 
    { id: 4, type: 'box', imagePath: LOGO_VERIZON },
    { id: 5, type: 'vase', imagePath: VASE_A2, vaseClass: 'vase-style-9' },
    { id: 3, type: 'box', imagePath: LOGO_CBRE },
    { id: 1, type: 'vase', imagePath: VASE_A1, vaseClass: 'vase-style-1' },
    
    { id: 6, type: 'vase', imagePath: VASE_A6, vaseClass: 'vase-style-6' }, 
    { id: 10, type: 'vase', imagePath: VASE_A7, vaseClass: 'vase-style-10' },
    { id: 9, type: 'box', imagePath: LOGO_CAPITAL_ONE },
    { id: 7, type: 'vase', imagePath: VASE_A3, vaseClass: 'vase-style-6' }, 
    { id: 8, type: 'vase', imagePath: VASE_A4, vaseClass: 'vase-style-6' },

    { id: 11, type: 'vase', imagePath: VASE_A5, vaseClass: 'vase-style-6' }, 
    { id: 13, type: 'box', imagePath: LOGO_HCSC },
    { id: 14, type: 'box', imagePath: LOGO_CODEPATH },
    { id: 15, type: 'box', imagePath: LOGO_STATEFARM },
    { id: 12, type: 'vase', imagePath: VASE_A7, vaseClass: 'vase-style-6' },
    
    { id: 16, type: 'box', imagePath: LOGO_NH },
    { id: 20, type: 'vase', imagePath: VASE_A8, vaseClass: 'vase-style-8' }, 
    { id: 17, type: 'box', imagePath: LOGO_DFW_ATW },
    { id: 19, type: 'vase', imagePath: VASE_A2, vaseClass: 'vase-style-7' }, 
    { id: 18, type: 'box', imagePath: LOGO_AXXESS },
];

// Size rules
const getBoxSizeClass = (id: number, type: 'vase' | 'box'): string => {
    const row = Math.ceil(id / 5);

   if (type === 'box') {
        switch (row) {
            // Largest boxes
            case 1: 
                return 'h-64 md:h-72 lg:h-64 w-72';

            // Medium boxes
            case 2: 
                return 'h-48 md:h-56 lg:h-64 w-72';

            // Small boxes
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
            case 1: return 'h-48 md:h-64 lg:h-80';
            case 2: return 'h-44 md:h-60 lg:h-72';
            case 3: return 'h-40 md:h-56 lg:h-64';
            case 4: return 'h-36 md:h-52 lg:h-56';
            default: return 'h-48 md:h-64';
        }
    }

    return '';
};

// Group items into rows
const groupedSponsors = dummySponsors.reduce((acc, item) => {
    const row = Math.ceil(item.id / 5);
    if (!acc[row]) acc[row] = [];
    acc[row].push(item);
    return acc;
}, {} as Record<number, GridItem[]>);

const Sponsor: React.FC = () => {
    return (
        <div className='Sponsor-container w-full h-auto flex flex-col items-center p-6 py-20' id="Sponsor">
            
            <div className="header-3">
                <h1>Past Sponsors</h1>
            </div>


            {/* Grid & Row Rendering */}
            <div className='Sponsor-grid-wrapper w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-16 lg:gap-20'>
                
                {Object.keys(groupedSponsors).map((rowKey) => {
                    const rowId = parseInt(rowKey);
                    const rowItems = groupedSponsors[rowId];

                    return (
                        <React.Fragment key={rowId}>

                            {/* Tier Title */}
                            {rowTitles[rowId] && (
                                <div className="Sponsor-title-wrapper w-full text-center mb-6">
                                    <h1 className='Sponsor-title text-3xl md:text-4xl tracking-widest'>
                                        {rowTitles[rowId]}
                                    </h1>
                                </div>
                            )}

                            {/* Row Grid */}
                            <div className='Sponsor-row grid grid-cols-5 gap-5 md:gap-10 lg:gap-12 w-full'>
                                {rowItems.map((item) => {
                                    // **DEFINING ROW HERE to calculate the row-specific CSS class**
                                    const row = Math.ceil(item.id / 5);
                                    const sizeClass = getBoxSizeClass(item.id, item.type);

                                    const commonClasses = `
                                        relative
                                        w-full 
                                        flex items-center justify-center
                                        transition-all duration-300 ease-in-out
                                        ${item.type === 'box' ? 'bg-gray-300 rounded-lg' : ''} 
                                        ${sizeClass}
                                        ${item.type === 'box' && row === 2 ? 'sponsor-row-2-box' : ''} // Apply margin class only to row 2 boxes
                                        ${item.type === 'box' && row === 3 ? 'sponsor-row-3-box' : ''}
                                    `;

                                    return (
                                        <div key={item.id} className={`Sponsor-placeholder ${commonClasses}`}>
                                            {item.type === 'vase' ? (
                                                <div 
                                                    className={`Vase-item ${item.vaseClass}`}
                                                    style={{
                                                        backgroundImage: `url(${item.imagePath})`,
                                                        height: '100%',
                                                        width: '100%',
                                                        backgroundSize: 'contain',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'bottom center'
                                                    }}
                                                />
                                            ) : (
                                                <div className="Box-content w-full h-full p-4 flex items-center justify-center">
                                                    <img 
                                                        src={item.imagePath} 
                                                        alt={`Sponsor ${item.id}`} 
                                                        className='max-w-[90%] max-h-[80%] object-contain opacity-70 transition-opacity duration-300' 
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        </React.Fragment>
                    );
                })}

            </div>

            {/* Contact Info */}
            <div className="sponsor-text-container flex flex-col gap-y-5 flex-wrap items-center justify-center mt-20 font-gantari">
                <p className='sponsor-text text-[#CCBA97] font-medium text-4xl md:text-5xl text-center'>2026 Sponsors Coming Soon</p>
                <p className='sponsor-text text-[#CCBA97] font-medium text-2xl md:text-3xl text-center'>
                    Interested in sponsoring WEHack 2026? Contact us at wehackutd@gmail.com!
                </p>
            </div>
        </div>
    );
};

export default Sponsor;