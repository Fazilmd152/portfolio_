import React from 'react'

const HeroSec2 = () => {
//[rgba(255,255,255,.1)] backdrop-blur-xl


  return (
    <section className="md:bg-[#ccf381]   p-5 flex flex-col gap-5 justify-center items-center hidden md:block">

        <div className='hero-sec2-div'>
          <div >
            <h1 className='text-4xl font-semibold mb-1'>Frontend</h1>
            <h1 className='text-blue-900 '>
              Highly skilled at progressive enhancement, design systems & UI Engineering.
            </h1>
          </div>

        </div>

        <div className="hero-sec2-div">
          <div >
            <h1 className='text-4xl font-semibold mb-1'>Backend</h1>
            <h1 className='text-blue-900'>
              Proven experience building successful products for clients across several countries.
            </h1>
          </div>

        </div>

      </section>
  )
}

export default HeroSec2