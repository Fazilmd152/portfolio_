import React from 'react'
import Desc from './Desc'
import Image from './image'

const AboutME = () => {
  return (
    <section className='flex flex-col p-5 md:px-10 py-20 items-center md:flex-row md:pt-24 md:h-[100vh]' id='about'>
       <Image/>
       <Desc/>
    </section>
  )
}

export default AboutME