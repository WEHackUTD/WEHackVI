import React from 'react'
import './Question.css'
function Question({question, answer} : {question : String, answer : String}) {
  return (
    <div className="question w-full lg:w-10/12">
        <details className="bg-[#D16155]">
            <summary className='flex justify-between list-none w-full bg-[#D16155] text-[#301814] p-2 text-base md:text-base lg:text-base font-bold'>{question}</summary>
                <div className="panel text-[14px] md:text-base" dangerouslySetInnerHTML={{ __html: answer }}/>
        </details>
    </div>
  )
}

export default Question