import React from 'react'
import Logos from './Logos'
import About from './About'

const HeroSec1 = () => {
    return (
        <section className='md:grow bg-[#4831df] w-full mx-auto p-5 text-white '>
            <div className="w-full flex flex-col px-10 md:px-0 md:w-fit mx-auto mt-10">
                <h1 className='text-2xl md:text-3xl mb-1'>hi iam,</h1>
                <h1 className='text-5xl md:text-6xl mb-2 text-[#ccf381] font-bold  '> Mohamed <br />Fazil.</h1>
                <h1 className='text-3xl mt-5 mb-1'>Full stack developer</h1>
                <h1 className='w-3/4'>I like to craft solid and scalable frontend products with great user experiences.</h1>
                <Logos />
            </div>
            <About />


        </section>
    )
}

export default HeroSec1