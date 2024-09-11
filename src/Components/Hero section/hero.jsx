import React from 'react'
import HeroSec1 from './heroSec1'
import HeroSec2 from './heroSec2'
//import hero from '../../Assets/hero.png'

const Hero = () => {
  
  return (
    <div className="flex h-[91vh]">
      <HeroSec1/>
      <HeroSec2/>
    </div>

  )
}

export default Hero



// <img src={hero} alt="hero image" className='w-full mx-auto'/>