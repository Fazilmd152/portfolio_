import React from 'react'

const HeroSec2 = () => {
//[rgba(255,255,255,.1)] backdrop-blur-xl


  return (
    <section className="hidden md:flex md:flex-col gap-10 bg-[#ccf381] px-5 md:px-20 justify-center h-full">

        <div className='about group'>
          
            <h1 className='group-hover:text-[#ccf381] '>Frontend</h1>
            <p className='group-hover:text-white'>
              Highly skilled at progressive enhancement, design systems & UI Engineering.
            </p>
          

        </div>

        <div className="about group">
          
            <h1 className='group-hover:text-[#ccf381]'>Backend</h1>
            <p className='group-hover:text-white'>
              Proven experience building APIs for various features .
            </p>
          

        </div>

      </section>
  )
}

export default HeroSec2