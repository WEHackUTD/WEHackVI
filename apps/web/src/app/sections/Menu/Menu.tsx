import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <div className="mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">
          <div className="glow-menu transform-gpu">
            <h1 className='menu-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>Menu</h1>
          </div>
        </div>
    </div>
    
  )
}

export default Menu