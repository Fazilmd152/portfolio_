import React from 'react'
import resumePic from '../../Assets/resume.jpg'

const Resume = () => {
    return (
        <section className='p-10'>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-32">
                <div className="w-8/12 md:w-2/6">
                    <h1 className='text-2xl font-medium mb-2 md:hidden'>Resume</h1>
                    <img src={resumePic} alt="" className='border border-black' />
                </div>
                <div className="text-center ">
                    <h1 className='hidden md:block text-4xl font-bold  border-b-4 border-pink-300 w-fit'>Resume</h1>
                    <p className='mt-5 md:mt-2 mb-2'>You can download my resume here
                         <span className='hidden ml-3 md:inline-block'>
                         <button className=' resume-download-button'>Download</button>
                        </span>
                    </p>
                    <button className='md:hidden resume-download-button'>Download</button>
                   
                </div>
            </div>

        </section>
    )
}

export default Resume