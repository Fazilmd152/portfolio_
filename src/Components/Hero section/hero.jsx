import React from 'react'
import HeroSec1 from './heroSec1'
import HeroSec2 from './heroSec2'
//import hero from '../../Assets/hero.png'

const Hero = () => {
  
  return (
    <div className="flex flex-col md:flex-row ">
      <HeroSec1/>
      <HeroSec2/>
    </div>

  )
}

export default Hero



// <img src={hero} alt="hero image" className='w-full mx-auto'/>