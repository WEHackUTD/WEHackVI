import React from 'react'
import './Button.css'

function Button({buttonText, link} : {buttonText : String, link : any}) {
  return (
      <a href={link} className="text-xs mt-2" target="_blank">
        <button className="primary-btn bg-[#A6CDC4] text-[#282738] hover:bg-[#6e8d85] w-full py-3 px-3">{buttonText}</button>
      </a>
  )
}

export default Button