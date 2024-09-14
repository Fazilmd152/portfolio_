import React from 'react'
import Logos from './Logos'
import About from './About'
import LogoSmallScreen from './logoSmall'

const HeroSec1 = () => {
    return (
        <section className='bg-[#4831d4] px-12 py-20 text-white md:w-full md:px-28 h-full '>
            <div className="">
                <span className='text-2xl'>Hi Iam,</span>

            <h1 className='text-5xl md:text-6xl font-bold text-[#ccf381]'> Mohamed <br />Fazil.</h1>

                <h3 className='text-2xl mt-5' >Full stack developer</h3>

                <p className='text-sm md:text-lg md:w-3/4'>I like to craft solid and scalable web app with great user experiences.</p>

                <Logos />
            </div>
            <About />
            <LogoSmallScreen/>

        </section>
    )
}

export default HeroSec1