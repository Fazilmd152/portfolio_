import React from 'react'
import HeroSec1 from './hero sec 1/heroSec1'
import HeroSec2 from './hero sec 2/heroSec2'
import hero from '../../Assets/hero.png'

const Hero = () => {
  
  return (
    <div className="md:flex md:h-[520px] ">
      <HeroSec1/>
      {/* <img src={hero} alt="" className='hidden md:block w-8/12 absolute left-[15%] -top-10 opacity-20 h-full object-cover'/> */}
      <HeroSec2/>
    </div>

  )
}

export default Hero



// <img src={hero} alt="hero image" className='w-full mx-auto'/>