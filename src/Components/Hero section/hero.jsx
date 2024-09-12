import React from 'react'
import HeroSec1 from './hero sec 1/heroSec1'
import HeroSec2 from './hero sec 2/heroSec2'

//md:h-[520px]
const Hero = () => {
  
  return (
    <section className="md:flex h-[88vh] sm:h-[100vh] md:h-[100vh]" id='hero'>
      <HeroSec1/>
      <HeroSec2/>
    </section>

  )
}

export default Hero



// <img src={hero} alt="hero image" className='w-full mx-auto'/>