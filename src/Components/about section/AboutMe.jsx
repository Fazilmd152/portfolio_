import React from 'react'
import Desc from './Desc'
import Image from './image'

const AboutME = () => {
  return (
    <section className='flex flex-col p-10 items-center md:flex-row md:pt-24'>
       <Image/>
       <Desc/>
    </section>
  )
}

export default AboutME